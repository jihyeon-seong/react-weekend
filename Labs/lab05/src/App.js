import './App.css';
import IterationExample from './IterationExample';
import IterationExample2 from './IterationExample2';

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
      <IterationExample2 items={items} />

      <div style={{ display: 'none' }}>
        <IterationExample items={items} />
      </div>
    </>
  );
}

export default App;
