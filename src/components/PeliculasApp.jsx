import './MovieApp.css'

export const PeliculasApp = () => {
    return (
        <div className='container'>
            <h1 className='title'>Buscador de Películas</h1>
            <form >
                <input placeholder='Escribe la peli a buscar' type="text" name="inputMovie" id="inputMovie" />
                <button className='searchButton' type='submit'>Buscar</button>
            </form>
        </div>
    )
}
