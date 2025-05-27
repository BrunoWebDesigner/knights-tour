export default function GameStatus({ isGameWon }) {
  return isGameWon ? (
    <div className="text-center text-2xl font-bold text-green-600 mt-4">
      Congratulations! You\'ve completed the Knight\'s Tour!
    </div>
  ) : null;
}