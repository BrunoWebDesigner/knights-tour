export default function GameStatus({ isGameWon }) {
  return isGameWon ? (
    <div className="text-center text-2xl font-bold text-green-600 mt-4">
      Congratulations! You have completed the Knights Tour!
    </div>
  ) : null;
}