import { useState, useEffect } from 'react';

import axios from 'axios';
import Movie from '../components/Movie';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
        );

        setLoading(false);
        setMovies(response.data.data.movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <div className="movie-wrap">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              rating={movie.rating}
              genres={movie.genres}
              summary={movie.summary}
              background_image_original={movie.background_image_original}
            />
          ))
        )}
      </div>
    </div>
  );
}
