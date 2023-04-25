
import './App.css';

import {Board} from './Component/Board';

function App() {
  const board = ["x","x","x","x","x","x","x","x","x"]
  return (
    <div className='App'>
    <Board board = {board} onClick={null} />
    </div>
   
  );
}

export default App;
