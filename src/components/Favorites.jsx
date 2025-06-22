import Moviecard from "./Moviecard";
import { useMovieContext } from "./context/Moviecontext";
import './css/Favorites.css';
function Favorites(){
    const {favorites} = useMovieContext();

    return(
        (favorites.length <=0 
            ? 
            (<div className="no-favorites"><h1 className="no-favorites-box">No favorites....</h1></div>) 
            :
        (<div className="home-movies">
            {favorites.map((favorite)=>(
                <Moviecard key={favorite.id} movie={favorite}></Moviecard>
            ))}
        </div>))
    )
}

export default Favorites;