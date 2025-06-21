export default function TitleAndDescription() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 dark:text-blue-300">
        Knights Tour
      </h1>
      <p className="text-base sm:text-lg text-blue-700 dark:text-blue-400 mt-2">
        The Knights Tour is a puzzle where you move a knight to every square on the board exactly once, following the knights L-shaped movement pattern. Select a board size and click a square to move the knight. Possible moves are highlighted, and visited squares show the move order. Complete the board to win!
      </p>
    </div>
  );
}