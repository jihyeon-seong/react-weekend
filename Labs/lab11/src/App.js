import Casousel from './components/Casousel';
import ForwardRef from './components/ForwardRef';
import ForwardRefEx from './components/ForwardRefEx';
import Ref from './components/Ref';
import RefDOM from './components/RefDOM';
import RefVsState from './components/RefVsState';
import ScrollDOM from './components/ScrollDOM';
import ScrollDOMArray from './components/ScrollDOMArray';
import Stopwatch from './components/Stopwatch';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Video />

      <div className="display-none">
        <Casousel />
        <ScrollDOMArray />
        <ScrollDOM />
        <ForwardRefEx />
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
