import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './components/Movie';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /**
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
 */

  useEffect(() => {
    // async-await 를 사용한 axios 사용법
    const fetchData = async () => {
      // async : 함수 body 안에 비동기로 동작하는 코드가 있다는 걸 선언

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
        {loading
          ? 'Loading...'
          : movies.map((movie) => (
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
            ))}
      </div>
    </div>
  );
}

export default App;
