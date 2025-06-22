import Moviecard from "./Moviecard";
import { useMovieContext } from "./context/Moviecontext";
function Favorites(){
    const {favorites} = useMovieContext();
    console.log(favorites);

    return(
        (favorites && favorites.length <0 ? <div>No favorites....</div> :
        <div className="home-movies">
            {favorites.map((favorite)=>(
                <Moviecard key={favorite.id} movie={favorite}></Moviecard>
            ))}
        </div>)
    )
}

export default Favorites;