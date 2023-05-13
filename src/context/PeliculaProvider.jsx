import { useState, useEffect, createContext } from "react";

const PeliculaContext = createContext();

const PeliculaProvider = ({children}) =>{

    const [peliculas, setPeliculas] = useState("")


    return (
        <PeliculaContext.Provider
            value={{
                setPeliculas
            }}
        >
            {children}
        </PeliculaContext.Provider>
    )
}

export {
    PeliculaProvider
}

export default PeliculaContext;