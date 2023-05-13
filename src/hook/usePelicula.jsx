import { useContext } from "react";
import PeliculaContext from "../context/PeliculaProvider";

const usePelicula = () =>{
    return useContext(PeliculaContext)
}

export default usePelicula;