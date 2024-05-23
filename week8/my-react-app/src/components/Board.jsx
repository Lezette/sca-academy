/* eslint-disable react/prop-types */
import Square from "./Square";

const Board = ({ squares, onClick }) => {

  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div className="border border-white">
      <div className="border-y grid grid-cols-3 border-white">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="border-y grid grid-cols-3 border-white">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="border-y grid grid-cols-3 border-white">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board;
