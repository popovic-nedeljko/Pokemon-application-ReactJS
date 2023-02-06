import React from 'react';
import Loading from '../../../components/loading/Loading';
import PokemonCard from './PokemonCard';
import { useGlobalContext } from '../../../context';

const Pokemon = () => {
  const { loading, error, pokemonData } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (!pokemonData) return;

  return <PokemonCard key={pokemonData.id} {...pokemonData} />;
};

export default Pokemon;
