# 🎲 Soc Ops Bingo

> **Break the ice at your next event** with a social bingo game that gets people talking, laughing, and connecting!

[![Deployed on GitHub Pages](https://img.shields.io/badge/status-live-green)](#deploy) [![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev) [![TypeScript 5.9](https://img.shields.io/badge/TypeScript-5.9%2B-3178c6?logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-4-06b6d4?logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ How It Works

1. **See a prompt** on your 5×5 bingo card
2. **Find someone** at the mixer who matches that description
3. **Check them off** and keep going
4. **Get 5 in a row** (horizontal, vertical, or diagonal) to win! 🎉

The center square is a **free space** — always yours from the start.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js 22](https://nodejs.org/) or higher

### Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The game deploys automatically to GitHub Pages on push to `main`. Your live URL: `https://{your-username}.github.io/{your-repo}`

---

## 🎨 Features

- ✅ **Responsive Design** — Works on phones, tablets, and desktops
- ✅ **Persistent Game State** — localStorage saves your board between sessions
- ✅ **Customizable Questions** — Swap out prompts for any theme or event
- ✅ **Accessibility First** — Full keyboard navigation and ARIA labels
- ✅ **Fully Tested** — Comprehensive unit and integration test coverage
- ✅ **TypeScript Strict Mode** — Type-safe, maintainable code

---

## 🛠️ Development

```bash
npm run lint       # ESLint with strict rules
npm run build      # TypeScript + Vite
npm test           # Vitest with jsdom
```

Or run all checks: `npm run lint && npm run build && npm test`

---

## 💡 Customize Your Game

### Change Prompts
Edit `src/data/questions.ts` — swap out the 24 prompts for your event theme:
- Team building questions
- Icebreaker challenges
- Tech trivia
- Or anything else!

### Change Theme
Modify CSS variables in `src/index.css` under `@theme` to match your brand colors.

### Add New Game Modes
The architecture is modular — see `src/utils/bingoLogic.ts` for core game logic and extend `src/hooks/useBingoGame.ts` for new features.

---

## 📁 Project Structure

```
src/
├── components/        # React UI components
├── hooks/             # Game state management (useBingoGame)
├── utils/             # Pure game logic (bingoLogic.ts)
├── data/              # 24 questions + free space
├── types/             # TypeScript types
└── test/              # Test setup
```

---

## 🧪 Testing

```bash
npm test
```

Tests cover all game logic with 100% of the `bingoLogic.ts` module. Add more tests in `*.test.ts` files alongside your code.

---

## 📚 Tech Stack

- **React 19** — Latest UI framework with hooks
- **TypeScript 5.9+** — Strict mode, zero-tolerance linting
- **Tailwind CSS v4** — Modern utility-first styling
- **Vite** — Lightning-fast builds
- **Vitest** — Fast, modern test runner
- **ESLint** — Enforces React Hooks, no unused code, TypeScript strict

---

## 🤝 Contribution & Customization

This project is built for learning and customization. Check out the **[Lab Guide](.lab/GUIDE.md)** for:
- Setting up AI assistance for your workflow
- Creating custom agents
- Running design-driven development
- Testing your game live

---

## 📖 Resources

- [React 19 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 📄 License

MIT — Feel free to use, modify, and share!

---

**Ready to create some good vibes?** Fork this repo, customize the questions, and get your team connecting! 🎉
