import { useContext, useEffect } from "react";
import NavBar from "./../../components/navbar.tsx";
import { PokeList } from "../../components/pokelist.tsx";
import { PokemonContext } from "../../context/PokemonContext";
import { PaginationL } from "../../components/pagination.tsx";
import { usePagination } from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate();
    const { allPokemons } = useContext(PokemonContext);
    const { page, handleChange } = usePagination();
    const jwtlocal = localStorage.getItem("jwt");

    useEffect(() => {
        if (jwtlocal == null) {
          navigate("/login");
        }
    }, [])
    
  return (
    <>
      <NavBar />
      <PokeList pokemonsUrls={allPokemons} page={page}/>
      <PaginationL page={page} handleChange={handleChange} />
    </>
  );
};
