import React, {useState} from 'react';
import MovieCard from './MovieCard';

export default function MoviesSearch() {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const searchMovie = async (e) => {
		e.preventDefault();
		const endpoint = `https://api.themoviedb.org/3/search/multi?api_key=929bd70144cab5f478871bf2f00ec778&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
	        const res = await fetch(endpoint);
	        const data  = await res.json();
	        setMovies(data.results);
	    }catch(err) {
			console.log(err);
	    }
	}

	console.log(movies)
	
	return(
		<div>
			<form onSubmit={searchMovie}>
				<label htmlFor="query">movie name</label>
				<input 
					type="text" name="query" 
					id="searchQuery" 
					placeholder="i.e game of thrones"
					onChange={e => setQuery(e.target.value)}
				/>
				<button>search</button>
			</form>
			<div className="card-list">
				{ movies.filter(movie => movie.poster_path).map( movie => <MovieCard key={movie.id} movie={movie}/>)}
	   		</div>
	   </div>
	);
}