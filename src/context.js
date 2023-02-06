import React, { useState, useContext, useEffect, useCallback } from 'react';
import usePokemonData from '../src/hooks/usePokemonData';
import { useLocation } from 'react-router-dom';

const AppContext = React.createContext();

const getLocalStorage = () => {
  let pokemons = localStorage.getItem('pokemons');
  return pokemons
    ? (pokemons = JSON.parse(localStorage.getItem('pokemons')))
    : [];
};

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const API = `https://pokeapi.co/api/v2/pokemon/?offset=${
    (page - 1) * 10
  }&limit=10`;

  const [loading, setLoading] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const { pathname } = useLocation();
  const pokeId = searchPokemon
    ? searchPokemon
    : +pathname.slice(1) > 0
    ? +pathname.slice(1)
    : '';
  const { pokemonData } = usePokemonData(pokeId);

  const [pokeList, setPokeList] = useState([]);

  const [catchedPokemons, setCatchedPokemons] = useState(getLocalStorage());

  const [modal, setModal] = useState(false);

  //fetch pokemonList
  const fetchPokemons = useCallback(async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) throw new Error(`${data.message}(${response.status})`);

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
  }, [fetchPokemons, page, API]);

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
        page,
        setPage,
        fetchSinglePokemon,
        catchedPokemons,
        removePokemon,
        catchPokemon,
        pokemonData,
        setModal,
        modal,
        isSearched,
        setIsSearched,
        pokeId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
