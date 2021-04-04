import React from 'react';

export default function MoviesSearch() {
	return(
		<form>
			<label htmlFor="query">movie name</label>
			<input type="text" name="query" id="searchQuery" placeholder="i.e game of thrones"/>
			<button>search</button>
		</form>
	);
}