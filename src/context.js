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
  const pokeId =
    isSearched && searchPokemon
      ? searchPokemon
      : +pathname.slice(1) > 0
      ? +pathname.slice(1)
      : '';

  const { pokemonData, error } = usePokemonData(pokeId);
  const [pokeList, setPokeList] = useState([]);

  const [catchedPokemons, setCatchedPokemons] = useState(getLocalStorage());

  const [modal, setModal] = useState(false);

  //fetch pokemonList
  const fetchPokemons = useCallback(async (url) => {
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
      console.error(err);
    }
  }, []);

  const fetchSinglePokemon = async (api) => {
    const response = await fetch(api);
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    if (page !== Math.ceil(pokeId / 10)) {
      console.log('we ar ehere');
      setPage(Math.ceil(pokeId / 10));
    }
  }, [pokeId]);

  useEffect(() => {
    fetchPokemons(API);
  }, [fetchPokemons, page]);

  //Catch pokemons
  const catchPokemon = () => {
    if (pokemonData.id === pokeId || pokemonData.name === pokeId) {
      const catchedPokemon = pokemonData;
      return setCatchedPokemons([...catchedPokemons, catchedPokemon]);
    } else {
      return;
    }
  };
  //relese pokemons
  const removePokemon = () => {
    const removed = catchedPokemons.find(
      (item) => item.name === pokeId || item.id === pokeId
    );

    if (removed) {
      const updatedPokemons = catchedPokemons.filter(
        (item) => item.id !== removed.id
      );

      setCatchedPokemons(updatedPokemons);
    }
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
        error,
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
