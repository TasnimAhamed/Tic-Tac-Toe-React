import { useState } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [turn, setTurn] = useState("X");
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setTurn(turn === "X" ? "O" : "X");
    }

    function jumpTo(nextMove) {
        setHistory(history.slice(0, nextMove + 1));
        setCurrentMove(nextMove);
        setTurn(nextMove % 2 === 0 ? "X" : "O");
    }

    const moves = history.map((squares, move) => {
        const isCurrent = move === currentMove;
        let description;
        if (move > 0) {
            description = `Go to move #${move}`;
        } else {
            description = "Restart / Reset";
        }

    return (
        <li key={move} className="relative pl-6">
            {/* Visual Bullet on the Timeline */}
            <div
            className={`absolute left-0 top-3.5 w-2.5 h-2.5 rounded-full border-2 transform -translate-x-[5px] transition-all duration-300 ${
                isCurrent
                ? "bg-indigo-400 border-indigo-400 shadow-[0_0_8px_#818cf8]"
                : "bg-slate-800 border-slate-700/80"
            }`}
            />
            <button
            className={`
                w-full text-left text-xs sm:text-sm cursor-pointer select-none
                ${
                isCurrent
                    ? "bg-indigo-600/90 hover:bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/20 px-3 py-2 rounded-xl border border-indigo-500/40"
                    : "bg-slate-800/30 hover:bg-slate-800/70 hover:text-slate-200 text-slate-400 px-3 py-2 rounded-xl border border-slate-800/60 hover:border-slate-700/50"
                }
                transition-all duration-200 ease-in-out
            `}
            onClick={() => jumpTo(move)}
            >
            <span className="font-bold mr-2 text-[10px] sm:text-xs opacity-60">
                {move}
            </span>
            {description}
            </button>
        </li>
        );
    });

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        
        <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl font-black tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-indigo-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]">
            Tic-Tac-Toe
            </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center lg:items-start w-full">
            {/* Board Component */}
            <div className="flex-1 w-full flex justify-center">
                <Board turn={turn} onPlay={handlePlay} squares={currentSquares} />
            </div>

            {/* History / Steps Component */}
            <div className="w-full lg:w-auto flex justify-center">
                <History moves={moves} />
            </div>
        </div>
        </div>
        );
}

export default Game;