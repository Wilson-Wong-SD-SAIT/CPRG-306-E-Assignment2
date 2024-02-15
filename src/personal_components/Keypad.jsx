import React from 'react';

function Keypad({ onInput, onCalculate, onClear }) {
  return (
    <div className="keypad">
      <button name="+" onClick={onInput}>+</button>
      <button name="-" onClick={onInput}>&minus;</button>
      <button name="*" onClick={onInput}>&times;</button>
      <button name="/" onClick={onInput}>&divide;</button>
      <button name="(" onClick={onInput}>&#8333;</button>
      <button key='7' name='7' onClick={onInput}>7</button>
      <button key='8' name='8' onClick={onInput}>8</button>
      <button key='9' name='9' onClick={onInput}>9</button>
      <button name=")" onClick={onInput}>&#8334;</button>
      <button key='4' name='4' onClick={onInput}>4</button>
      <button key='5' name='5' onClick={onInput}>5</button>
      <button key='6' name='6' onClick={onInput}>6</button>
      <button key='.' name='.' onClick={onInput}>.</button>
      <button key='1' name='1' onClick={onInput}>1</button>
      <button key='2' name='2' onClick={onInput}>2</button>
      <button key='3' name='3' onClick={onInput}>3</button>
      <button name="C" onClick={onClear}>C</button>
      <button name="=" onClick={onCalculate}>=</button>
      <button key='0' name='0' onClick={onInput}>0</button>
    </div>
  );
}

export default Keypad;
