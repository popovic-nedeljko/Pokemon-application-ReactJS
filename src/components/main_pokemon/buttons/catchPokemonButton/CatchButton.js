import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../../../../context';
import { MdCatchingPokemon } from 'react-icons/md';
import '../ButtonComponents.scss';

const CatchButton = () => {
  const { catchPokemon, removePokemon, catchedPokemons, setModal, pokeId } =
    useGlobalContext();
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCatch = () => {
    catchPokemon();
    setModal(true);
    timeoutRef.current = setTimeout(() => setModal(false), 1500);
  };

  const isCatched = catchedPokemons.some(
    (pokemon) => pokemon.id === pokeId || pokemon.name === pokeId
  );

  return isCatched ? (
    <button
      onClick={removePokemon}
      className='btn--ellipse btn--catch_pokemon btn--ellipse--animated'
    >
      <p>release pokemon</p>
      <MdCatchingPokemon />
    </button>
  ) : (
    <button
      onClick={handleCatch}
      className='btn--ellipse btn--catch_pokemon btn--ellipse--animated'
    >
      <p>catch pokemon</p>
      <MdCatchingPokemon />
    </button>
  );
};

export default CatchButton;
