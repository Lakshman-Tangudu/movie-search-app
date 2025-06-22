import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

function MovieProvider({ children }) {
    const [favorites, setfavorites] = useState([]);

    useEffect(()=>{
        const storedfavorites = JSON.parse(localStorage.getItem('favorites'));
        if(storedfavorites) setfavorites(storedfavorites);
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites));
    },[favorites])

    function isfavorite(id) {
        return favorites.find((movie) => movie.id === id);
    }

    function addtofavorite(movie) {
        setfavorites(prev => [...prev, movie]);
    }

    function deletefromfavorite(id) {
        setfavorites(prev => prev.filter((movie) => movie.id !== id))
    }

    const value = {
        favorites,
        isfavorite,
        addtofavorite,
        deletefromfavorite
    }
    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;
