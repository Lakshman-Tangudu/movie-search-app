import './css/Moviecard.css'
import { useState } from 'react';
import { useMovieContext } from './context/Moviecontext';
function Moviecard({ movie }) {
    let {isfavorite , addtofavorite , deletefromfavorite} = useMovieContext();
    const favorite = isfavorite(movie.id);

    const toggleLike = () => {
    if(favorite){
        deletefromfavorite(movie.id)
    }else{
        addtofavorite(movie)
    }
  };

    return (
        <div key={movie.id} className="moviecard">
            <div>
                <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <button
                    className={`heart-btn ${favorite ? "liked" : ""}`}
                    onClick={toggleLike}
                >
                      ♥ 
                </button>
            </div>
            <div className="movie-details">
                <h4>{movie.title}</h4>
                <h3>{movie.release_date}</h3>
            </div>
        </div>
    )
}

export default Moviecard;