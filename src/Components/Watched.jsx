import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import MovieCard from './MovieCard'
function Watched() {
  const MoviesListWatched = useMovieContext()
  return (
    <div className='watched'>
      <div className="container">
      <div className="main-heading">
          <h1>My Watched</h1>
          <span className='movies-count'>
            {MoviesListWatched.watched.length}
            {MoviesListWatched.watched.length === 1 ? "Movie" : "Movies"  }
          </span>
        </div>
        {
          MoviesListWatched.watched.length > 0 ?(<div className='movie-grid'>
            {MoviesListWatched.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type='watched' />
            ))}
          </div>) : <h2 className='no-movies'>No Movies in your List, add some!</h2>
        }
      </div>
    </div>
  )
}

export default Watched