import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

export default function Movie({
  id,
  year,
  title,
  rating,
  genres,
  summary,
  background_image_original,
  url,
}) {
  return (
    <article
      key={id}
      className="movie"
      style={{
        backgroundImage: `url(${background_image_original})`,
      }}
    >
      <div className="movie-info">
        <h3>
          {title} ({year})
        </h3>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p>{summary.slice(0, 200)}</p>
      </div>
    </article>
  );
}
