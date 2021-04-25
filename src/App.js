
import './App.css';
import ColorDisplay from './components/ColorDisplay';
import ColorSimple from './components/ColorSimple';
import CounterAdvancedControls from './components/CounterAdvancedControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';
import SliderControls from './components/SliderControls';
import TextDisplay from './components/TextDisplay';
import TextSimpleControls from './components/TextSimpleControls';

function App() {
  return (
    <div className="App">
     <CounterDisplay/>
     <CounterSimpleControls/>
     <CounterAdvancedControls/>
     <br/>
     <ColorDisplay/>
     <br/>
     <ColorSimple/>
     <SliderControls/>
     <br/>
     <TextDisplay/>
     <TextSimpleControls/>
    </div>
  );
}

export default App;
