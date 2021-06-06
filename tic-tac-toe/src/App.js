import "./App.css";
import Board from "./board";
import React, { useState } from 'react';

function App() {

  const [squareValues, setSquareValues] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)
  

  
  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  const handleClick = (i) => {
    const squares = squareValues;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setSquareValues(squareValues.concat([{
      squares
    }]))
    setXIsNext(!xIsNext)
    console.log('handled click')
  };

  const winner = calculateWinner(squareValues);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }


  return (
    
    
    <div className="App">

      {status}

      <Board squares={squareValues}
            handleChange={handleClick}/>
    </div>
  );
}

export default App;
