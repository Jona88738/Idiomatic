import { useState } from 'react';
//import Timer from './components/Timer';
import '../../styles/Memorama.css';

function App() {
  const [start, setStart] = useState(false);
  
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Timer start={start} setStart={setStart} />
      <div className="buttons">
        {!start 
          ? <button onClick={() => setStart(true)}>Start</button>
          : <button onClick={() => location.reload()}>Again</button>
        }
      </div>
      <Cards start={start} />
    </div>
  );
}

export default App;
