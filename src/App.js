import './App.css';
import MoleContainer from './components/MoleContainer';
import { useState } from "react";

function App() {
  let [score, setScore] = useState(0);

  //create 9 mole hills
  function createMoleHill() {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
        key={hills.length}
        setScore={setScore}
        score={score} />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }
  
  //return app
  return (
    <div className='App'>
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
