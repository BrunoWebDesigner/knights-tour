export default function GameControls({ boardSize, setBoardSize, resetGame }) {
  const boardOptions = [
    { value: '4x5', label: '4x5' },
    { value: '5x5', label: '5x5' },
    { value: '6x6', label: '6x6' },
    { value: '7x7', label: '7x7' },
    { value: '8x8', label: '8x8' },
  ];

  return (
    <div className="flex justify-center mb-12 space-x-4">
      <select
        value={boardSize}
        onChange={(e) => setBoardSize(e.target.value)}
        className="border border-gray-300 rounded p-2 text-gray-400"
      >
        {boardOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset Game
      </button>
    </div>
  );
}