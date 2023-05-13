import { Outlet } from "react-router-dom"
import { useState } from "react";


const AuthLayout = () => {

    const [modal, setModal] = useState(true);
    return (
        <>
            <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
                <div className="md:w-2/3 lg:w-2/5" >
                    <Outlet />
                </div>
            </main>

        </>
    )
}

export default AuthLayout