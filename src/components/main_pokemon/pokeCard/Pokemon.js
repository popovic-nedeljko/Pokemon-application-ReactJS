import React from 'react';
import Loading from '../../../components/loading/Loading';
import PokemonCard from './PokemonCard';
import { useGlobalContext } from '../../../context';

const Pokemon = () => {
  // const { pokeId } = useParams();
  // const { loading, error, pokemonData } = usePokemonData(pokeId);
  const { loading, error, pokemonData } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (!pokemonData) {
    return (
      <h2 className='message'>
        Start by picking form a list or search for a pokemon. Have fun!
      </h2>
    );
  }
  return <PokemonCard key={pokemonData.id} {...pokemonData} />;
};

export default Pokemon;
