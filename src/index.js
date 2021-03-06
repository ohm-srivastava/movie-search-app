import React from 'react';
import ReactDOM from 'react-dom';
import MovieSearch from "./MovieSearch";

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Movie Search</h1>
                <h1 className ="nameline">Made by Ohm Srivastava using the TMDB API</h1>
                <MovieSearch />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));