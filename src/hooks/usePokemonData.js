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
        const response = await fetch(`${id > 0 ? `${url}${id}` : ''}`);
        const data = await response.json();

        if (data) {
          const newPokemon = {
            id: data.id,
            name: data.name,
            height: data.height,
            picture: data.sprites.other['official-artwork'].front_default,
            pictureSub: data.sprites.other.dream_world.front_default,
            Hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            type: data.types.map((item) => item.type.name),
            ability: data.abilities.map((ab) => ab.ability.name).join(' ** '),
            pageNumber: Math.ceil(+data.id / 10),
          };

          setPokemonData(newPokemon);
        } else {
          setPokemonData(null);
          setError('Fetching failed');
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    }
    getPokemonData();
  }, [id]);

  return { loading, error, pokemonData };
};

export default usePokemonData;