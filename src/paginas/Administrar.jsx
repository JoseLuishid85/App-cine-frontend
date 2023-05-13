import { useEffect, useState } from "react"
import clienteAxios from '../config/clienteAxios'
import { Link } from "react-router-dom";


const Administrar = () => {

    const [cargando, setCargando] = useState(true)
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);
  
    useEffect(() => {
        realizarBusqueda();
    }, [terminoBusqueda]);


    const realizarBusqueda = async() => {
        if (terminoBusqueda === '') {
            const { data } = await clienteAxios.get(`/pelicula`)
            setResultados(data)
            setCargando(false)
        } else {
            const resultadosFiltrados = await resultados.filter(pelicula => {
                const titulo = pelicula.titulo.toLowerCase();
                const busqueda = terminoBusqueda.toLowerCase();
                return titulo.includes(busqueda);
            });
            setResultados(resultadosFiltrados);
        }
    };

    return (
        <div>
           <h1 className="text-sky-600 font-black text-xl text-center uppercase" >Peliculas</h1>
            <form>
                <div className="flex items-center mt-3">
                    <input 
                        type="text" 
                        placeholder="Buscar" 
                        value={terminoBusqueda}
                        onChange={(e) => setTerminoBusqueda(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    
                </div>
            </form>

            <Link to="/agregar-pelicula">Agregar Nueva Pelicula</Link>

            <ol className="list-group list-group-numbered mt-3">
                { cargando ? "Cargando" : (
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
                                <a href="#" >Editar</a> |
                                <a href="#" >Eliminar</a>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No se encontraron resultados.</li>
                    )
                ) } 
            
            </ol>       
        </div>
    )
}

export default Administrar