import React from 'react'
import * as actions from "./context/ActionType"
import { useMovieContext } from './context/GlobalContext'


function MovieControls({movie, type}) {

    const MovieContext = useMovieContext();
    const handelclickToAddWatched = () => {
        MovieContext.MoviesDispatch({
            type: actions.ADD_MOVIE_TO_WATCHED,
            payload : movie
        })
    }

    const HandelRemoveMovieWatchList = () => {
        MovieContext.MoviesDispatch({
            type : actions.REMOVE_MOVIE_FROM_WATCHLIST,
            payload : movie.imdbID
        })
    }

    const handelClicRemoveWatchedTowatchlist = () => {
        MovieContext.MoviesDispatch({
            type : actions.MOVE_TO_WATCHLIST,
            payload : movie
        })
    }
    const handelRemoveWatched = () => {
        MovieContext.MoviesDispatch({
            type : actions.REMOVE_MOVIE_FROM_WATCHED,
            payload : movie.imdbID
        })
    }
  return (
    <div className='inner-card-controls'>
        {
            type === "watchlist" && (
                <>
                    <button className='ctrl-btn' onClick={handelclickToAddWatched}>
                        <i className='fa-solid fa-eye' />
                    </button>
                    <button className='ctrl-btn' onClick={HandelRemoveMovieWatchList}>
                        <i className='fa-fw fa fa-times' />
                    </button>
                </>
            )
        }
                {
            type === "watched" && (
                <>
                    <button className='ctrl-btn' onClick={handelClicRemoveWatchedTowatchlist}>
                        <i className='fa-solid fa-eye-slash' />
                    </button>
                    <button className='ctrl-btn' onClick={handelRemoveWatched}>
                        <i className='fa-fw fa fa-times' />
                    </button>
                </>
            )
        }
    </div>
  )
}

export default MovieControls