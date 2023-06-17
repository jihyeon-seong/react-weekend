import Ref from './components/Ref';
import RefVsState from './components/RefVsState';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <Stopwatch />

      <div style={{ display: 'none' }}>
        <RefVsState />
        <Ref />
      </div>
    </div>
  );
}

export default App;
