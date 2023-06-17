import ForwardRef from './components/ForwardRef';
import ForwardRefEx from './components/ForwardRefEx';
import Ref from './components/Ref';
import RefDOM from './components/RefDOM';
import RefVsState from './components/RefVsState';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <ForwardRefEx />

      <div className="display-none">
        <ForwardRef />
        <RefDOM />
        <Stopwatch />
        <RefVsState />
        <Ref />
      </div>
    </div>
  );
}

export default App;
