import React, { useEffect, useState } from "react";
import clienteAxios from '../config/clienteAxios';

const Peliculas = () => {
    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState([]);
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        listaPeliculas();
    }, []);

    useEffect(() => {
        realizarBusqueda();
    }, [terminoBusqueda]);

    const listaPeliculas = async () => {
        const { data } = await clienteAxios.get(`/pelicula`);
        setLista(data);
        setCargando(false);
    };

    const realizarBusqueda = () => {
        if (terminoBusqueda === '') {
            setResultados([]);
        } else {
            const resultadosFiltrados = lista.filter(pelicula => {
                const titulo = pelicula.titulo.toLowerCase();
                const busqueda = terminoBusqueda.toLowerCase();
                return titulo.includes(busqueda);
            });
            setResultados(resultadosFiltrados);
        }
    };

    const handleBuscar = (e) => {
        e.preventDefault();
        setCargando(true);
        realizarBusqueda();
        setCargando(false);
    };

    return (
        <>
            <h1 className="text-sky-600 font-black text-xl text-center uppercase">Peliculas</h1>
            <form onSubmit={handleBuscar}>
                <div className="flex items-center mt-3">
                    <input
                        type="text"
                        placeholder="Buscar"
                        value={terminoBusqueda}
                        onChange={(e) => setTerminoBusqueda(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        className="px-4 py-2 bg-sky-600 text-white rounded-r-md hover:bg-sky-800 focus:outline-none"
                        type="submit"
                    >
                        Buscar
                    </button>
                </div>
            </form>

            <ol className="list-group list-group-numbered mt-3">
                {cargando ? (
                    "Cargando"
                ) : (
                    resultados.length > 0 ? (
                        resultados.map((pelicula) => (
                            <li
                                className="list-group-item d-flex justify-content-between align-items-start"
                                key={pelicula._id}
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{pelicula.titulo}</div>
                                    {pelicula.descripcion}
                                </div>
                                <span className="badge bg-sky-600 rounded-pill mr-1">14</span>
                                <span className="badge bg-sky-600 rounded-pill">Votar</span>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No se encontraron resultados.</li>
                    )
                )}
            </ol>
        </>
    );
};

export default Peliculas;
