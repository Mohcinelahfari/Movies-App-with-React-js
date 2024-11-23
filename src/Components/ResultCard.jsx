import React from 'react'
import { data } from 'react-router-dom'
import { useMovieContext } from './context/GlobalContext'
import * as actions from "./context/ActionType"
function ResultCard({movie}) {
    const MovieContext = useMovieContext();
    const StoreWatchList = MovieContext.watchlist.find((mov) => mov.imdbID === movie.imdbID)
    const StoreWatched = MovieContext.watched.find((mov) => mov.imdbID === movie.imdbID)

    const WatchListDisable = StoreWatchList ? true : StoreWatched ? true : false

    const WatchedDisable = StoreWatched ? true : false;
    const handelClickToAddInWatchList = () => {
        MovieContext.MoviesDispatch({
            type : actions.ADD_MOVIE_TO_WATCHLIST,
            payload : movie
        })
    }

    const handelClickToAddInWatched = () => {
        MovieContext.MoviesDispatch({
            type : actions.ADD_MOVIE_TO_WATCHED,
            payload: movie
        })
    }
  return (
    <div className='result-card'>
        <div className="poster-wrapper">
            {
                movie.Poster ? (
                    <img src={movie.Poster} alt={movie.Title} />
                ) : (
                    <div className="filter-poster"></div>
                )
            }
        </div>
        <div className="info">
            <div className="heading">
                <div className="title">{movie.Title}</div>
                {movie.Year ? <h4 className='release-data'>{movie.Year}</h4> : "-" }
            </div>
            <div className="controls">
                <button onClick={handelClickToAddInWatchList} disabled={WatchListDisable} className='btn'>Add to WatchList</button>
                <button onClick={handelClickToAddInWatched} disabled={WatchedDisable} className='btn'>Add to Watched</button>
            </div>
        </div>
    </div>
  )
}

export default ResultCard