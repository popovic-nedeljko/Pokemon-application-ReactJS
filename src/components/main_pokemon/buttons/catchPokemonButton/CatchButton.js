import React from 'react';
import { useGlobalContext } from '../../../../context';
import { MdCatchingPokemon } from 'react-icons/md';
import '../ButtonComponents.scss';

const CatchButton = () => {
  const { catchPokemon, removePokemon, catchedPokemons, setModal, pokeId } =
    useGlobalContext();

  return catchedPokemons.some(
    (pokemon) => pokemon.id === pokeId || pokemon.name === pokeId
  ) ? (
    <button
      onClick={removePokemon}
      className='btn--ellipse btn--catch_pokemon btn--ellipse--animated'
    >
      <p>release pokemon</p>
      <MdCatchingPokemon />
    </button>
  ) : (
    <button
      onClick={() => {
        catchPokemon();
        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 1500);
      }}
      className='btn--ellipse btn--catch_pokemon btn--ellipse--animated'
    >
      <p>catch pokemon</p>
      <MdCatchingPokemon />
    </button>
  );
};

export default CatchButton;
