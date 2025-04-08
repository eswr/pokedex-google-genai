import { GoogleGenAI } from '@google/genai';

import { BasicPokemon } from '../types/basic-pokemon.interface';
import { Pokemon } from '../types/pokemon.interface';
import { getPokemonByTerm } from './get-pokemon-by-term';
import { sleep } from '../helpers/sleep';

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: GEMINI_KEY,
});

const generateRandomIds = (pokemonId: number): number[] => {
  const ids = new Set<number>();
  while (ids.size < 4) {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    if (randomId !== pokemonId) {
      ids.add(randomId);
    }
  }
  return Array.from(ids);
};

export const getRecommendationAgainst = async (
  pokemon: Pokemon
): Promise<BasicPokemon[]> => {
  await sleep(1500);

  try {
    const recommendedIds = generateRandomIds(pokemon.id);

    const recommendations = await Promise.all(
      recommendedIds.map(async (id) => {
        const pokemon = await getPokemonByTerm(`${id}`);
        return {
          id: pokemon.id,
          name: pokemon.name,
          move: pokemon.moves[0].move.name,
          image:
            pokemon.sprites.other?.['official-artwork'].front_default ?? '',
          types: pokemon.types.map((type) => type.type.name),
        };
      })
    );

    return recommendations;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw new Error('Failed to fetch recommendations');
  }
};

export const getRecommendationAgainstGemini = async (
  pokemon: Pokemon
): Promise<BasicPokemon[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `The Pokémon to defeat is ${pokemon.name} and its type is ${pokemon.types[0].type.name}`,
      config: {
        responseMimeType: 'application/json',
        systemInstruction: `You are a Pokedex that provides Pokémon recommendations for battling against other Pokémon.
        Respond with a JSON containing the Pokémon ID and a super effective move against the given Pokémon.
        Always return 4 Pokémon
        This is the response format:
        {
          1: 'tackle',
          20: 'quick-attack',
          23: 'thunderbolt',
          25: 'thunder'
        }
        
        Only return the JSON object, don't provide explanations or anything else.
    `,
      },
    });
    if (!response.text) {
      throw new Error('Error fetching recommendations from Gemini');
    }

    const parsedResponse = JSON.parse(response.text);
    console.log(parsedResponse);
    const recommendations = await Promise.all(
      Object.keys(parsedResponse).map(async (key) => {
        const pokemon = await getPokemonByTerm(`${key}`);
        return {
          id: pokemon.id,
          name: pokemon.name,
          move: parsedResponse[key],
          image:
            pokemon.sprites.other?.['official-artwork'].front_default ?? '',
          types: pokemon.types.map((type) => type.type.name),
        };
      })
    );

    return recommendations;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw new Error('Failed to fetch recommendations - Gemini');
  }
};
