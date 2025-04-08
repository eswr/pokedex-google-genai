import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

import { SearchBar } from '../../components/SearchBar';
import { FullScreenLoading } from '../../components/FullScreenLoading';
import { PokemonCard } from '../../components/PokemonCard';
import { usePokemonsPaginated } from '../../hooks/usePokemonsPaginated';
import { BasicPokemon } from '../../types/basic-pokemon.interface';

export const PaginatedPage = () => {
  const navigate = useNavigate();

  const { pokemons, totalPages, currentPage, isLoading, onPrefetchNextPage } =
    usePokemonsPaginated();

  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (pokemonId: number) => {
    setFavorites((prev) =>
      prev.includes(pokemonId)
        ? prev.filter((id) => id !== pokemonId)
        : [...prev, pokemonId]
    );
  };

  const displayedPokemons = showFavorites
    ? pokemons.filter((pokemon: { id: number }) => favorites.includes(pokemon.id))
    : pokemons;

  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-6">Pokédex</h1>
        <div className="flex gap-4 w-full max-w-2xl mb-6">
          <SearchBar />
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              showFavorites
                ? 'bg-red-700 text-white'
                : 'bg-red-100 text-red-900 border border-red-200 hover:bg-red-200'
            }`}
          >
            <Heart className={showFavorites ? 'fill-current' : ''} size={20} />
            Favorites
          </button>
        </div>
      </div>

      {/* Header End */}

      {isLoading && <FullScreenLoading />}

      {!isLoading && displayedPokemons.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <p className="text-white text-lg">No Pokemons found</p>
        </div>
      )}

      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedPokemons.map((pokemon: BasicPokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isFavorite={favorites.includes(pokemon.id)}
              onFavoriteClick={() => toggleFavorite(pokemon.id)}
            />
          ))}
        </div>

        {!showFavorites && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => navigate(`?page=${currentPage - 1}`)}
              onMouseEnter={() => onPrefetchNextPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 bg-red-100 border border-red-200 rounded-lg disabled:opacity-50 hover:bg-red-200 text-red-900"
            >
              <ChevronLeft size={20} /> Previous
            </button>
            <span className="text-white font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => navigate(`?page=${currentPage + 1}`)}
              onMouseEnter={() => onPrefetchNextPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 bg-red-100 border border-red-200 rounded-lg disabled:opacity-50 hover:bg-red-200 text-red-900"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        )}
      </>
    </>
  );
};
