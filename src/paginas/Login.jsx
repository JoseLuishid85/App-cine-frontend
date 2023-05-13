import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import useAuth from "../hook/useAuth"

const Login = () => {

    const [email, setEmail] = useState('prueba1@gmail.com')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth();

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return            
        }

        try {
            const { data } = await clienteAxios.post(`/usuarios/login`, { email, password})
            //console.log(data)
            setAuth(data)
            navigate('/administrar')
        } catch (error) {
            console.log(error.response.data.msg)
        }
    }
    return (
        <>
            <h1 className="text-sky-600 font-black text-xl text-center uppercase" >Iniciar Sesión</h1>

            <form className="my-10 bg-white shadow rounded-lg py-5 px-10" onSubmit={handleSubmit} >
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        onChange={ e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        onChange={ e => setPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value="Iniciar Sesión" 
                    className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded-xl 
                    hover:cursor-pointer hover:bg-sky-800  transition-colors" 
                />
            </form>
        </>
    )
}

export default Login