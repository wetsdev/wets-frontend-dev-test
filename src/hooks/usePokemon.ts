import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/interfaces";

export const usePokemon = (url?: string) => {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const fetchPokemon = async () => {
    if (url) {
      const { data }: any = await axios.get(url);
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };
};
