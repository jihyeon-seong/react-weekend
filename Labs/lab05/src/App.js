import './App.css';
import IterationExample from './IterationExample';

function App() {
  // const items = ['React', 'Vue.js', 'Angular.js', 'jQuery'];
  const items = [
    { id: 0, name: 'React' },
    { id: 1, name: 'Vue.js' },
    { id: 2, name: 'Angular.js' },
    { id: 3, name: 'jQuery' },
  ];

  return (
    <>
      <IterationExample items={items} />
    </>
  );
}

export default App;
