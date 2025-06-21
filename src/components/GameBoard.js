'use client';

import { useState, useEffect } from 'react';

export default function GameBoard({ boardSize, setIsGameWon }) {
  const [knightPosition, setKnightPosition] = useState([0, 0]);
  const [visited, setVisited] = useState(new Set(['0,0']));
  const [moveOrder, setMoveOrder] = useState({ '0,0': 1 });

  const [rows, cols] = boardSize.split('x').map(Number);
  const possibleMoves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const getPossibleMoves = (row, col) => {
    return possibleMoves
      .map(([dr, dc]) => [row + dr, col + dc])
      .filter(([r, c]) => r >= 0 && r < rows && c >= 0 && c < cols && !visited.has(`${r},${c}`));
  };

  const handleSquareClick = (row, col) => {
    if (!getPossibleMoves(knightPosition[0], knightPosition[1]).some(([r, c]) => r === row && c === col)) {
      return;
    }

    const newVisited = new Set(visited).add(`${row},${col}`);
    setVisited(newVisited);
    setKnightPosition([row, col]);
    setMoveOrder({ ...moveOrder, [`${row},${col}`]: newVisited.size });

    if (newVisited.size === rows * cols) {
      setIsGameWon(true);
    }
  };

  useEffect(() => {
    setVisited(new Set(['0,0']));
    setKnightPosition([0, 0]);
    setMoveOrder({ '0,0': 1 });
    setIsGameWon(false);
  }, [boardSize, setIsGameWon]);

  const renderSquare = (row, col) => {
    const isDark = (row + col) % 2 === 0;
    const isKnight = knightPosition[0] === row && knightPosition[1] === col;
    const isPossibleMove = getPossibleMoves(knightPosition[0], knightPosition[1]).some(
      ([r, c]) => r === row && c === col
    );
    const isVisited = visited.has(`${row},${col}`);
    const moveNumber = moveOrder[`${row},${col}`];

    return (
      <div
        key={`${row},${col}`}
        onClick={() => handleSquareClick(row, col)}
        className={`board-square flex items-center justify-center cursor-pointer
          ${isDark ? 'bg-[#5f664a]' : 'bg-[#d0d2c2]'}
          ${isPossibleMove ? 'border-4 border-blue-400' : ''}
          ${isKnight ? 'knight-icon text-blue-900' : ''}`}
      >
        {isKnight ? '♞' : isVisited ? (
          <span className="text-black font-bold">{moveNumber}</span>
        ) : (
          ''
        )}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="grid gap-0"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: rows }, (_, row) =>
          Array.from({ length: cols }, (_, col) => renderSquare(row, col))
        )}
      </div>
    </div>
  );
}