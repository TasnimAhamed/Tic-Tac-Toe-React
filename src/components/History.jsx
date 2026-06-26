function History({ moves }) {
    return (
        <div className="w-full max-w-sm bg-slate-900/30 backdrop-blur-md border border-slate-800/60 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/60">
            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-base font-bold tracking-wider text-slate-300 uppercase">
            Timeline History
            </h2>
            <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-bold border border-slate-700/50">
            {moves.length} {moves.length === 1 ? 'state' : 'states'}
            </span>
        </div>
        
        {/* Step Timeline */}
        <div className="max-h-78.75 overflow-y-auto pr-1 select-none scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            <ol className="relative border-l border-slate-800/80 ml-2.5 space-y-3 pb-2">
            {moves}
            </ol>
        </div>
        </div>
    );
}

export default History;