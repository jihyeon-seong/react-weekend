import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      // GET 요청 보냄
      .get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      .then((res) => {
        // success 응답일 때 실행할 콜백 등록
        // axios에서 response는 HTTPResponse를 감싸는 proxy 객체
        // res.data - 서버에서 온 응답
        if (res.data.status === 'ok') {
          setLoading(false);
          setMovies(res.data.data.movies);
          console.log(res.data.data.movies);
        }
      })
      .catch((e) => {
        // error 응답일 때 실행할 콜백 등록
        console.log(e);
      })
      .finally(() => {
        // 성공/실패 여부와 상관 없이 항상 실행함
        // console.log('finally');
      });
  }, []);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <div>{loading ? 'Loading...' : 'Ready!'}</div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.background_image_original} alt={movie.title}></img>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
