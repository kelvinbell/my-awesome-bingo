import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center rounded-xl transition-all duration-150 select-none min-h-[60px] text-[10px] md:text-xs leading-tight font-semibold';

  const baseColor = square.isMarked
    ? 'bg-[#ffe2ce] border-[#d66cff] text-[#2f1f3a] shadow-inner'
    : 'bg-white border-[#1f2937] text-[#1f2937] hover:bg-[#fff2eb]';

  const winningExtra = isWinning ? 'ring-4 ring-[#b4ff55] ring-offset-2 ring-offset-white rotate-[1deg]' : '';

  const freeSpaceClasses = square.isFreeSpace
    ? 'bg-[#f5e1ff] font-black text-sm uppercase tracking-wide'
    : '';

  const stripe = square.id % 2 === 0
    ? 'bg-[linear-gradient(135deg,rgba(255,110,199,0.15) 0%,rgba(255,110,199,0.00) 50%)]'
    : 'bg-[linear-gradient(45deg,rgba(109,239,255,0.15) 0%,rgba(109,239,255,0.00) 50%)]';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${baseColor} ${winningExtra} ${freeSpaceClasses} ${stripe}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-[#1f2937] text-xs">✓</span>
      )}
    </button>
  );
}
