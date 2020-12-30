import React, {useState} from "react";

export default function SearchMovies(){

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movieList, setMovies] = useState([]);

    const searchMovies = async (initial) => {
        initial.preventDefault();


        const url = `https://api.themoviedb.org/3/search/movie?api_key=5d26ee44346e8b6147a823f014582d0d&language=en-US&query=${query}&page=1&include_adult=false`;


        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    return(
        <>
            <form className = "form" onSubmit={searchMovies}>
                {/*<label className = "label" htmlFor={'query'}> Please enter the name of the movie: </label>*/}

                <input className="input" required type = "text" name = "query" placeholder={"Iron Man, Titanic etc..." } value = {query}
                       onChange={(initial) => setQuery(initial.target.value)}/>
                <button className="button" type = "submit"> Search</button>
            </form>
            <div className="card-list">
                {movieList.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                             src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                             alt={movie.title + ' poster'}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}/10</small></p>
                            <p className="card--desc"> Summary: <br /><br/> {movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div>
        </>

    )
}