
import './App.css';
import ColorDisplay from './components/ColorDisplay';
import CounterAdvancedControls from './components/CounterAdvancedControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

function App() {
  return (
    <div className="App">
     <CounterDisplay/>
     <CounterSimpleControls/>
     <CounterAdvancedControls/>
     <br/>
     <ColorDisplay/>
    </div>
  );
}

export default App;
