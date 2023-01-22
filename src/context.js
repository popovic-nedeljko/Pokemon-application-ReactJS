import React, { useState, useContext, useEffect, useCallback } from 'react';
import usePokemonData from '../src/hooks/usePokemonData';
import { useLocation } from 'react-router-dom';

const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';

const AppContext = React.createContext();

const getLocalStorage = () => {
  let pokemons = localStorage.getItem('pokemons');
  return pokemons
    ? (pokemons = JSON.parse(localStorage.getItem('pokemons')))
    : [];
};

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const { pathname } = useLocation();
  const pokeId = pathname.slice(1);
  const { pokemonData } = usePokemonData(pokeId);
  console.log(typeof pokeId);
  const [searchPokemon, setSearchPokemon] = useState('a');
  console.log(searchPokemon);
  const [pokeList, setPokeList] = useState([]);

  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [page, setPage] = useState(0);

  const [catchedPokemons, setCatchedPokemons] = useState(getLocalStorage());

  const [modal, setModal] = useState(false);

  //fetch pokemonList
  const fetchPokemons = useCallback(async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) throw new Error(`${data.message}(${response.status})`);

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
          };
        });

        setPokeList(newPokeList);
        setPage(Math.ceil(+newPokeList[0].id / 10));
      } else {
        setPokeList([]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchSinglePokemon = async (api) => {
    const response = await fetch(api);
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    fetchPokemons(API);
  }, [fetchPokemons]);

  //Catch pokemons
  const catchPokemon = () => {
    if (pokemonData.id === pokeId) {
      const catchedPokemon = pokemonData;

      return setCatchedPokemons([...catchedPokemons, catchedPokemon]);
    } else {
      return;
    }
  };

  const removePokemon = () => {
    setCatchedPokemons(catchedPokemons.filter((item) => item.id !== pokeId));
  };

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(catchedPokemons));
  }, [catchedPokemons]);

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
        fetchSinglePokemon,
        catchedPokemons,
        removePokemon,
        catchPokemon,
        pokemonData,
        setModal,
        modal,
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
