import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Hello Redux</h1>
    </div>
  );
};

export default App;
