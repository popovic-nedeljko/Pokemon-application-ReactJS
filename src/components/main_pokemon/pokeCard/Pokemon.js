import React from 'react';
import Loading from '../../../components/loading/Loading';
import PokemonCard from './PokemonCard';
import { useGlobalContext } from '../../../context';
import Error from '../../../pages/Error';

const Pokemon = () => {
  const { loading, pokemonData } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (!pokemonData) return;

  return <PokemonCard key={pokemonData.id} {...pokemonData} />;
};

export default Pokemon;
