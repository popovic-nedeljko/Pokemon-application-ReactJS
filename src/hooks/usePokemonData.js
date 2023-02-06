import { useEffect, useState } from 'react';

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
            health: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            type: data.types.map((item) => item.type.name),
            abilities: data.abilities.map((ab) => ab.ability.name).join(' ** '),
            pageNumber: Math.ceil(+data.id / 10),
          };

          setPokemonData(newPokemon);
        } else {
          setPokemonData(null);
          setError('Fetching failed');
        }
        setLoading(false);
      } catch (err) {
        // console.error(err);
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
