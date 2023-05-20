import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
