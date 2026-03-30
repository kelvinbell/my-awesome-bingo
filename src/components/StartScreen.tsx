interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4">
      <div className="relative max-w-lg w-full rounded-3xl p-6 md:p-8 bg-[rgba(255,255,255,0.95)] border border-white/35 shadow-[10px_10px_0px_rgba(255,110,199,0.75)] backdrop-blur-sm">
        <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-purple-400/80 border-2 border-white rotate-[23deg]" />
        <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-md bg-[#6efcff] border-2 border-white rotate-[11deg]" />

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">MEMPHIS BINGO</h1>
        <p className="text-lg font-semibold text-slate-600 mb-6">Geometric patterns, bold color, and instant icebreakers.</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl border-2 border-[#ff6ec7] bg-[#fff1f5] text-sm font-medium text-[#861657]">Find people fast</div>
          <div className="p-3 rounded-xl border-2 border-[#fcbf49] bg-[#fff9e3] text-sm font-medium text-[#7d5a00]">Complete 5 in a row</div>
          <div className="p-3 rounded-xl border-2 border-[#4d61ff] bg-[#e4e7ff] text-sm font-medium text-[#192a8a]">Free space center</div>
          <div className="p-3 rounded-xl border-2 border-[#43d9a3] bg-[#ddfff5] text-sm font-medium text-[#0c5d45]">Save to local storage</div>
        </div>

        <button
          onClick={onStart}
          className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#ff6ec7] to-[#ffb34d] shadow-[0_10px_0_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-transform"
        >
          Start the Game
        </button>
      </div>
    </div>
  );
}
