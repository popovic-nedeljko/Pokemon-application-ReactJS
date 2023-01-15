import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [searchPokemon, setSearchPokemon] = useState('a');
  const [pokemon, setPokemon] = useState();

  const [pokeList, setPokeList] = useState([]);

  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [page, setPage] = useState(0);

  const fetchPokemons = useCallback(
    async (url) => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok)
          throw new Error(`${data.message}(${response.status})`);

        setNextUrl(data.next);
        setPrevUrl(data.previous);

        const dataList = await Promise.all(
          data.results.map((item) => fetchSinglePokemon(item.url))
        );

        if (dataList) {
          const newPokeList = dataList.map((item) => {
            return {
              id: item.id,
              name: item.name,
              picture: item.sprites.other['official-artwork'].front_default,
              pictureSub: item.sprites.other.dream_world.front_default,
              type: item.types.map((type) => type.type.name).join(' '),
              // url: `${item.id}`,
            };
          });

          setPokeList(newPokeList);
          setPage(Math.ceil(+newPokeList[0].id / 10));
        } else {
          setPokeList([]);
        }
        setLoading(false);

        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    [searchPokemon]
  );

  const fetchSinglePokemon = async (api) => {
    const response = await fetch(api);
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    fetchPokemons(API);
  }, [fetchPokemons, searchPokemon]);

  return (
    <AppContext.Provider
      value={{
        loading,
        pokeList,
        setSearchPokemon,
        fetchPokemons,
        nextUrl,
        prevUrl,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
