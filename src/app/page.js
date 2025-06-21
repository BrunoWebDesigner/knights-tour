"use client"

import { useState } from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import GameControls from '../components/GameControls';
import GameBoard from '../components/GameBoard';
import GameStatus from '../components/GameStatus';

export default function Home() {
  const [boardSize, setBoardSize] = useState('8x8');
  const [isGameWon, setIsGameWon] = useState(false);

  const resetGame = () => {
    setIsGameWon(false);
    setBoardSize(boardSize); // Trigger re-render
  };

  return (
    <div className="container mx-auto p-4">
      <TitleAndDescription />
      <GameControls boardSize={boardSize} setBoardSize={setBoardSize} resetGame={resetGame} />
      <GameBoard boardSize={boardSize} setIsGameWon={setIsGameWon} />
      <GameStatus isGameWon={isGameWon} />
    </div>
  );
}