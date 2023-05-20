import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './css/Detail.scss';

export default function Detail() {
  //   const { id } = useParams();
  const location = useLocation();
  const id = location.state.id;

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        const {
          data: {
            data: { movie },
          },
        } = await axios.get(
          `https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`,
        );

        setLoading(false);
        // setMovie({ ...response.data.data.movie });
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="Detail">
      <h1>Movie Details</h1>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <article>
          <div className="poster">
            <img src={movie.large_cover_image} alt={movie.title} />
          </div>
          <div className="info">
            <h2>
              {movie.title} <span className="year">({movie.year})</span>
            </h2>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p>{movie.description_full}</p>
          </div>
        </article>
      )}
    </div>
  );
}
