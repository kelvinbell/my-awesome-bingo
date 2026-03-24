# Soc Ops Bingo — Project Guidelines

## ✅ Development Checklist (Before Committing)

- [ ] `npm run lint` passes (ESLint fixes unused imports/variables)
- [ ] `npm run build` succeeds (TypeScript & Vite)
- [ ] `npm test` passes (all tests green)

**Run all three**: `npm run lint && npm run build && npm test`

---

## Code Style

**Language**: TypeScript 5.9+ strict mode | **Styling**: Tailwind CSS v4 (see `.github/instructions/tailwind-4.instructions.md`)

**Naming**: Components `PascalCase`, Hooks `useXxx`, Functions `camelCase`, Constants `SCREAMING_SNAKE_CASE`

**Tooling**: ESLint (flat config) enforces React Hooks, no unused imports, TypeScript strict, React 19

---

## Architecture

**Game** (5×5 Bingo): Players mark squares matching social prompts. First to complete 5-in-a-row wins. localStorage persists game state. Center free space immutable.

**Components** (`src/components/`):
- `App.tsx` — Orchestrator (start → playing → bingo)
- `StartScreen.tsx`, `GameScreen.tsx` — UI containers
- `BingoBoard.tsx` — 5×5 CSS Grid | `BingoSquare.tsx` — Individual tiles
- `BingoModal.tsx` — Victory popup

**State** (`src/hooks/useBingoGame.ts`): Game state ('start' | 'playing' | 'bingo'), board generation (24 shuffle + free space), mark/unmark, bingo detection, localStorage sync (SSR-safe)

**Logic** (`src/utils/bingoLogic.ts`): Pure functions—`generateBoard()`, `toggleSquare()`, `checkBino()`, `getWinningSquareIds()`. No side effects, fully testable.

**Data** (`src/data/questions.ts`): 24 prompts + FREE_SPACE constant

**Types** (`src/types/index.ts`): BingoSquareData, BingoLine, GameState

---

## Build & Deployment

| Task | Command | Notes |
|------|---------|-------|
| Install | `npm install` | — |
| Dev | `npm run dev` | Hot reload @ http://localhost:5173 |
| Build | `npm run build` | Output: `dist/` |
| Lint | `npm run lint` | Fix with `--fix` flag |
| Test | `npm test` | Vitest + jsdom, pattern: `*.test.ts` |
| Deploy | Push to `main` | Auto → GitHub Pages via Actions |

---

## Patterns & Conventions

**Game Flow**: `start` → `playing` (click Start) → `bingo` (any 5-in-row) → `start` (restart)

**Squares**: Free space immutable. Toggle via `toggleSquare()`, auto-detect bingo with `checkBingo()`, highlight winner with `getWinningSquareIds()`

**Storage**: localStorage stores `board` + `gameState`, validates on load, uses `globalThis.window` checks for SSR

**Testing**: Unit test pure logic (`bingoLogic.ts`), integration test components, mock localStorage

**TypeScript**: Strict mode always, exhaustive union checks, centralize types in `src/types/index.ts`

**Components**: Functional + hooks only, separate logic from UI, read-only props, `useCallback` for children handlers

---

## Customization Points

1. **Prompts** — `src/data/questions.ts` array
2. **Theme** — `@theme` variables in `src/index.css`
3. **Board size** — `BOARD_SIZE` constant (5×5, hardcoded)
4. **Win conditions** — `checkBingo()` logic in `src/utils/bingoLogic.ts`

---

## Resources

[React 19](https://react.dev) | [TypeScript](https://www.typescriptlang.org/tsconfig#strict) | [Tailwind v4](https://tailwindcss.com/docs) | [Vite](https://vitejs.dev/guide/) | [Testing Library](https://testing-library.com/react) | [ESLint](https://eslint.org/docs/latest/use/configure/configuration-files-new)
