import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./paginas/Login"
import Peliculas from "./paginas/Peliculas"
import Administrar from "./paginas/administrar"


import { AuthProvider } from "./context/AuthProvider"
import { PeliculaProvider } from "./context/PeliculaProvider"
import AgregarPelicula from "./paginas/AgregarPelicula"


function App() {



    return (
        <BrowserRouter>
            <AuthProvider>
                <PeliculaProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<Peliculas />} />
                            <Route path="login" element={<Login />} />
                            <Route path="administrar" element={<Administrar />} />
                            <Route path="agregar-pelicula" element={<AgregarPelicula />} />
                        </Route>
                    </Routes>
                </PeliculaProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
