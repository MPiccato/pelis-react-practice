import { useState } from 'react'
import './MovieApp.css'

export const PeliculasApp = () => {

    const API_KEY = '9ed223dfe56220ff04f29d9c4bc473b6'
    const urlBase = 'https://api.themoviedb.org/3/search/movie?' 
    // query=Jack+Reacher&api_key=9ed223dfe56220ff04f29d9c4bc473b6'

    
    const [search, setSearch] = useState('');
    const [movieList, setMovieList] = useState(null);

    const handleInputChange = ({target}) => {
        setSearch(target.value)
        
    };

    const handleSubmit = (e) => {
        e.preventDefault()
       fetchMovies()
    }

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${urlBase}query=${search}&api_key=${API_KEY}&language=es-ES`)
            const data = await response.json()
            setMovieList(data.results)
            
            
        } catch (error) {
            console.error(error)
            
        }
    }



    return (
        <div className='container'>
            <h1 className='title'>Buscador de Películas</h1>
            <form onSubmit={handleSubmit} >
                <input 
                placeholder='Escribe la peli a buscar' 
                type="text" 
                name="inputMovie" 
                id="inputMovie"
                value={search}
                onChange={handleInputChange} 
                />
                <button className='searchButton' type='submit'>Buscar</button>
            </form>
            {movieList && (
                <div className='movie-list'>
                    {movieList.map(movie => (
                        <div key={movie.id} className='movie-card'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>

                        </div>
                    ))}
                </div>
            )
                
            }
        </div>
    )
}
