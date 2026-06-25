function Square({ value, onSquareClick }) {
  // Determine text color and glow based on value (X or O)
  const isX = value === "X";
  const isO = value === "O";
  
  const textColorClass = isX
    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
    : isO
    ? "text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]"
    : "";

  return (
    <button
      className={`
        relative overflow-hidden
        w-20 h-20 sm:w-24 sm:h-24 
        bg-slate-800/50 backdrop-blur-sm 
        border border-slate-700/80 
        rounded-2xl text-4xl sm:text-5xl font-black 
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_6px_-1px_rgba(0,0,0,0.2)]
        transition-all duration-300 ease-out
        hover:scale-[1.04] hover:bg-slate-700/65 hover:border-indigo-500/50
        active:scale-95 active:bg-slate-800/80
        flex items-center justify-center
        cursor-pointer select-none
        ${textColorClass}
      `}
      onClick={onSquareClick}
    >
      
      {value && (
        <span className="animate-scale-up-fade">
          {value}
        </span>
      )}
    </button>
  );
}

export default Square;