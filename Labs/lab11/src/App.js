import Ref from './components/Ref';
import RefVsState from './components/RefVsState';

function App() {
  return (
    <div className="App">
      <RefVsState />

      <div style={{ display: 'none' }}>
        <Ref />
      </div>
    </div>
  );
}

export default App;
