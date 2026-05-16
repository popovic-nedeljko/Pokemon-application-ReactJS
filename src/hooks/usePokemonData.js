import { useEffect, useState } from 'react';
import { PAGE_SIZE } from '../context';

const url = `https://pokeapi.co/api/v2/pokemon/`;

const usePokemonData = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function getPokemonData() {
      try {
        setLoading(true);

        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (!response.ok)
          throw new Error(`${data.message}(${response.status})`);

        if (data) {
          const newPokemon = {
            id: data.id,
            name: data.name,
            height: data.height,
            picture: data.sprites.other['official-artwork'].front_default,
            pictureSub: data.sprites.other.dream_world.front_default,
            health: data.stats.find((s) => s.stat.name === 'hp')?.base_stat,
            attack: data.stats.find((s) => s.stat.name === 'attack')?.base_stat,
            defense: data.stats.find((s) => s.stat.name === 'defense')?.base_stat,
            speed: data.stats.find((s) => s.stat.name === 'speed')?.base_stat,
            type: data.types.map((item) => item.type.name),
            abilities: data.abilities.map((ab) => ab.ability.name).join(' ** '),
            pageNumber: Math.ceil(+data.id / PAGE_SIZE),
          };

          setPokemonData(newPokemon);
        } else {
          setPokemonData(null);
          setError('Fetching failed');
        }
        setLoading(false);
      } catch (err) {
        setPokemonData(null);
        setError(err);
        setLoading(false);
      }
    }
    getPokemonData();
  }, [id]);

  return { loading, error, pokemonData };
};

export default usePokemonData;
