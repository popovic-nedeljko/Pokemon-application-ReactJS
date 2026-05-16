import React, { useState, useContext, useEffect, useCallback } from "react";
import usePokemonData from "./hooks/usePokemonData";
import { useLocation } from "react-router-dom";

const AppContext = React.createContext();

export const PAGE_SIZE = 10;

const getLocalStorage = () => {
  const pokemons = localStorage.getItem("pokemons");
  return pokemons ? JSON.parse(pokemons) : [];
};

const fetchSinglePokemon = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
};

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const API = `https://pokeapi.co/api/v2/pokemon/?offset=${
    (page - 1) * PAGE_SIZE
  }&limit=${PAGE_SIZE}`;

  const [searchPokemon, setSearchPokemon] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const { pathname } = useLocation();
  const pokeId =
    isSearched && searchPokemon
      ? searchPokemon
      : +pathname.slice(1) > 0
        ? +pathname.slice(1)
        : "";

  const { pokemonData, error, loading } = usePokemonData(pokeId);
  const [pokeList, setPokeList] = useState([]);

  const [catchedPokemons, setCatchedPokemons] = useState(getLocalStorage());

  const [modal, setModal] = useState(false);

  const fetchPokemons = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) throw new Error(`${data.message}(${response.status})`);

      setTotalPages(Math.ceil(data.count / PAGE_SIZE));

      const dataList = await Promise.all(
        data.results.map((item) => fetchSinglePokemon(item.url)),
      );

      if (dataList) {
        const newPokeList = dataList.map((item) => {
          return {
            id: item.id,
            name: item.name,
            picture: item.sprites.other["official-artwork"].front_default,
            pictureSub: item.sprites.other.dream_world.front_default,
            type: item.types.map((type) => type.type.name).join(" "),
          };
        });

        setPokeList(newPokeList);
      } else {
        setPokeList([]);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    const numericId = +pokeId;
    if (numericId > 0 && page !== Math.ceil(numericId / PAGE_SIZE)) {
      setPage(Math.ceil(numericId / PAGE_SIZE));
    }
  }, [pokeId, page]);

  useEffect(() => {
    fetchPokemons(API);
  }, [fetchPokemons, API]);

  const catchPokemon = () => {
    if (!pokemonData) return;
    if (pokemonData.id === pokeId || pokemonData.name === pokeId) {
      setCatchedPokemons((prev) => [...prev, pokemonData]);
    }
  };

  const removePokemon = () => {
    const removed = catchedPokemons.find(
      (item) => item.name === pokeId || item.id === pokeId,
    );

    if (removed) {
      setCatchedPokemons((prev) =>
        prev.filter((item) => item.id !== removed.id),
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(catchedPokemons));
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
        totalPages,
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
