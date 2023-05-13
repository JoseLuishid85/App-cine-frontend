

const AgregarPelicula = () => {

    const handleAgregarPelicula = e =>{
        e.preventDefault();

    }

    return (
        <>
            <h1 className="text-sky-600 font-black text-xl text-center uppercase" >Agregar Pelicula</h1>

            <form className="my-5 bg-white shadow rounded-lg py-2 px-10" onSubmit={handleAgregarPelicula} >
                <div className="my-2">
                    <label className="text-gray-600 block text-xl font-bold" htmlFor="titulo">Titulo</label>
                    <input
                        id="titulo"
                        type="text"
                        placeholder="Titulo de la Pelicula"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
                <div className="my-2">
                    <label className="text-gray-600 block text-xl font-bold" htmlFor="descripcion">Descripción</label>
                    
                    <textarea 
                        id="descripcion" 
                        placeholder="Descripción de la Pelicula"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50" 
                        rows={8}
                    >

                    </textarea>
                </div>

                <input type="submit" value="Agregar" 
                    className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded-xl 
                    hover:cursor-pointer hover:bg-sky-800  transition-colors" 
                />
            </form>
        </>
    )
}

export default AgregarPelicula