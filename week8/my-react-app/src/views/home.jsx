// import Navigation from '../components/navigation';

import Board from "../components/Board"
import { useState } from "react";

import Button from "../components/Button";

const Home = () => {


  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isXNext, setIsXNext] = useState(true);

  const current = history[stepNumber];

  const winner = calculateWinner(current);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];


    if (winner || squares[i]) return;

    squares[i] = isXNext ? 'X' : 'O';


    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length)
    setIsXNext(!isXNext)

  }


  const jumpTo = (step) => {
    setStepNumber(step);
    setIsXNext(step % 2 === 0);
  };


  const renderMoves = () =>
    history.map((_step, move) => {
      const desc = move ? `Go to: move #${move}` : 'Go to: game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });


  return (
    <div className="h-svh flex justify-center items-center">
      <div>
        <Board squares={current} onClick={handleClick} />

        <div className="mt-5">{winner ? 'Winner: ' + winner : 'Next player: ' + (isXNext ? 'X' : 'O')}</div>

        <ul>{renderMoves()}</ul>


        <div className="mt-5">
          <Button>Donate</Button>
          <Button>Visit us</Button>
        </div>
      </div>
    </div>
  )
}


const calculateWinner = (squares) => {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null
}

export default Home