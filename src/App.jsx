import React, { useState } from 'react';
import './App.css';
// TODO: Import Keypad and Display components once implemented.
import Keypad from './personal_components/Keypad';
import Display from './personal_components/Display';


function App() {
  const [input, setInput] = useState('');

  // Handle input
  function handleInput(e) {
    // TODO: Implement handleInput to update the input state.
    setInput(input.concat(e.target.name));
  }

  // Calculate the result
  function calculate() {
    // TODO: Implement calculation logic safely here.
    setInput(eval(input).toString());
  }

  // Clear the input
  function clear() {
    // TODO: Implement clear functionality.
    setInput('');
  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      {/* TODO: Render the Display component and pass the current input as a prop. */}
      <Display input={input}/>
      {/* TODO: Render the Keypad component and pass handleInput, calculate, and clear as props. */}
      <Keypad onInput={handleInput} onCalculate={calculate} onClear={clear}/>
    </div>
  );
}

export default App;
