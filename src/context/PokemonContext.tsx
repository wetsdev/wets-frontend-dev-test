import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { AllPokemonsResult } from "../interfaces/types";

interface ContextProps {
  allPokemons: string[] | null;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  let urlAllPokemons =
    "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

  const [allPokemons, setAllPokemons] = useState(null);

  const getAllPokemons = async () => {
    const { data } = await axios.get(urlAllPokemons);

    //console.log(data);

    let pokemons = data?.results?.map(
      (pokemon: AllPokemonsResult) => pokemon?.url
    );

    setAllPokemons(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
    value={{
      allPokemons,
    }}
  >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
