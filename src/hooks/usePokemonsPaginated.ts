import { useSearchParams } from 'react-router';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getPokemonsByPage } from '../actions';
import { BasicPokemon } from '../types/basic-pokemon.interface';

type PokemonsResponse = {
  pokemons: BasicPokemon[];
  totalPages: number;
};

export const usePokemonsPaginated = () => {
  const [searchParams] = useSearchParams();
  const pageParam = Number(searchParams.get('page') ?? '1');
  const currentPage = pageParam > 0 ? pageParam : 1;

  const [totalPages, setTotalPages] = useState(0);

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<PokemonsResponse, Error>({
    queryKey: ['pokemons', 'page', currentPage],
    queryFn: () => getPokemonsByPage({ currentPage }),
    staleTime: 1000 * 60 * 5,
    onSuccess: (data:PokemonsResponse) => {
      setTotalPages(data.totalPages);
    },
  });

  const pokemons = data?.pokemons ?? [];
  const totalPagesValue = data?.totalPages ?? totalPages;

  const onPrefetchNextPage = (page: number) => {
    if (page > totalPagesValue) return;
    if (page < 1) return;
    if (page === currentPage) return;

    queryClient.prefetchQuery({
      queryKey: ['pokemons', 'page', page],
      queryFn: () => getPokemonsByPage({ currentPage: page }),
      staleTime: 1000 * 60 * 5,
    });
  };

  return {
    pokemons,
    totalPages: totalPagesValue,
    currentPage,
    isLoading,
    onPrefetchNextPage,
  };
};