import Square from "./Square";

function Board({ turn, squares, onPlay }) {
  const winner = calculateWinner(squares);
  
  const isDraw = !winner && squares.every((square) => square !== null);

  function handleClick(index) {
    if (squares[index] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[index] = turn;
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
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

  // Render a beautiful, styled status component
  const renderStatus = () => {
    if (winner) {
        const winnerColor = winner === "X" ? "text-cyan-400 font-extrabold" : "text-rose-400 font-extrabold";
        return (
            <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-slate-300 uppercase">
                Winner: <span className={winnerColor}>{winner}</span> 🎉
            </span>
            </div>
        );
    }
        if (isDraw) {
        return (
            <div className="flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-amber-200 uppercase">
                It's a Draw! 🤝
            </span>
            </div>
        );
        }
    
    // Playing state
        const nextPlayerColor = turn === "X" ? "text-cyan-400 font-black" : "text-rose-400 font-black";
        return (
        <div className="flex items-center gap-2.5 px-5 py-2.5 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
            <span className={`w-2 h-2 rounded-full animate-ping ${turn === "X" ? "bg-cyan-400" : "bg-rose-400"}`}></span>
            <span className="text-sm font-medium tracking-wide text-slate-300">
            Next Turn: <span className={`${nextPlayerColor} text-base`}>{turn}</span>
            </span>
        </div>
        );
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Status Bar */}
      <div className="mb-6 h-12 flex items-center justify-center">
        {renderStatus()}
      </div>

      {/* Grid Container */}
      <div className="relative p-4 rounded-3xl bg-slate-900/30 border border-slate-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md">
        <div className="grid grid-cols-3 gap-3">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;