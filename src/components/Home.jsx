import { useState } from "react";
import { useEffect } from "react";
import Moviecard from "./Moviecard";
import './css/Home.css'
function Home() {
    const [search, setsearch] = useState('');
    const [movies, setmovies] = useState([]);
    const [loading, setloading] = useState(true);


    const handleSearch = (e) => {
        setsearch(e.target.value);
    }

    useEffect(() => {
        async function laodmovies() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eee180db727d516f5b3ea40c940bc3fc&language=en-US&page=1`);
            const data = await res.json();
            setmovies(data.results);
            setloading(false);
        }
        laodmovies();
    }, [])

    const searchformovie =(e)=>{
        e.preventDefault();
        async function get() {
            const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=eee180db727d516f5b3ea40c940bc3fc&query=${encodeURIComponent(search.trim())}`
            );
            const data = await res.json();
            setmovies(data.results);
            setsearch('');
        }
        get();
    }

return (
    <div className="Home">
        <div className="home-searchbar">
            <form onSubmit={searchformovie}>
                <input
                    className="home-searchbar-input"
                    type="text"
                    placeholder="Search for a movie..."
                    value={search}
                    onChange={handleSearch}
                />
                <button className="home-searchbar-button">search</button>
            </form>
        </div>
        <div>
            {loading
                ? (<div>loading...</div>)

                : (
                    <div className="home-movies">
                        {movies.map((movie) => (
                            <Moviecard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
        </div>
    </div>
)

}
export default Home;