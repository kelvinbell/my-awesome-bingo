import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      <header className="relative flex items-center justify-between p-4 bg-gradient-to-r from-[#ff6ec7] to-[#ffb34d] text-white border-b-4 border-[#1f2937] shadow-lg">
        <button
          onClick={onReset}
          className="text-[11px] uppercase tracking-wider px-3 py-2 rounded-lg bg-black/30 hover:bg-black/45 transition"
        >
          ← Reset Board
        </button>
        <h1 className="font-black text-xl md:text-2xl tracking-tight drop-shadow-lg">Soc Ops - Memphis Mode</h1>
        <div className="w-20 h-8 bg-[linear-gradient(45deg,#6efcff_25%,#ffb34d_25%,#ffb34d_50%,#6efcff_50%,#6efcff_75%,#ffb34d_75%,#ffb34d_100%)] bg-[length:16px_16px] rounded"></div>
      </header>

      <p className="text-center text-sm md:text-base py-2 px-4 text-white bg-black/20 backdrop-blur-sm">
        Tap a square when someone matches it. hit 5 in a row for a big Memphis win!
      </p>

      {hasBingo && (
        <div className="mx-3 mt-3 rounded-xl border-2 border-[#b4ff55] bg-[#b4ff5580] text-[#1f2937] text-center py-2 font-bold uppercase text-sm drop-shadow-md">
          🎉 BINGO! You scored a line!
        </div>
      )}

      <main className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </main>

      <footer className="text-xs text-center text-white/90 pb-4">
        Free space is always active. Express your pattern, own your style.
      </footer>
    </div>
  );
}
