import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'

function Add() {
  const [SearchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${SearchValue}&apikey=ecc1caa`)
    .then((response) => {
      if(response.data.Search){
        setMovies(response.data.Search)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  },[SearchValue])
  return (
    <div className='add-page'>
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type='text' placeholder='Search for a movie'
              value={SearchValue} 
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}

export default Add