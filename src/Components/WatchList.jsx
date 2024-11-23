import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import MovieCard from './MovieCard'

function WatchList() {
  const MoviesList = useMovieContext()
  return (
    <div className='watch-list'>
      <div className="container">
        <div className="main-heading">
          <h1>My WatchList</h1>
          <span className='movies-count'>
            {MoviesList.watchlist.length}
            {MoviesList.watchlist.length === 1 ? 'Movie' : "Movies"}
          </span>
        </div>
        {
          MoviesList.watchlist.length > 0 ?(<div className='movie-grid'>
            {MoviesList.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type='watchlist' />
            ))}
          </div>) : <h2 className='no-movies'>No Movies in your List, add some!</h2>
        }
      </div>
    </div>
  )
}

export default WatchList