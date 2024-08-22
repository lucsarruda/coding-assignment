import React from 'react';
import Movie from './Movie';
import '../styles/movies.scss';
import withInfiniteScroll from '../hooks/withInfiniteScroll';

const Movies = ({ movies, viewTrailer, closeCard, loadMoreMovies }) => {
    if (!movies || !movies.movies || !movies.movies.results) {
    return <div>No movies available</div>; // Ou algum outro fallback apropriado
  }

  return (
    <div className="movie-grid">
      {movies.movies.results.map((movie) => (
        <Movie 
          movie={movie} 
          key={movie.id}
          viewTrailer={viewTrailer}
          closeCard={closeCard}
        />
      ))}
    </div>
  );
};

export default withInfiniteScroll(Movies);


/*
import Movie from './Movie'
import '../styles/movies.scss'

const Movies = ({ movies, viewTrailer, closeCard }) => {

    return (
        <div  className="movie-grid">
            {movies.movies.results?.map((movie) => {
                return (
                    <Movie 
                        movie={movie} 
                        key={movie.id}
                        viewTrailer={viewTrailer}
                        closeCard={closeCard}
                    />
                )
            })}
        </div>
    )
}



export default Movies
*/
