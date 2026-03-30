interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <main className="relative min-h-full bg-slate-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(90,181,255,0.35),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(255,142,203,0.28),transparent_40%),linear-gradient(18deg,#0f172a_0%,#020617_100%)]" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/3 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <section className="flex w-full flex-col gap-8 rounded-3xl border border-white/20 bg-[rgba(15,23,42,0.70)] p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="space-y-4 text-center">
            <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
              ⭐ Social icebreaker experience
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Soc Ops Bingo
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-200 sm:text-lg">
              Play, connect, and win with 5-in-a-row challenges. Perfect for meetups, team building, and bringing energy to your event.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🧠", title: "Quick conversation", subtitle: "Break the ice in 5 minutes" },
              { emoji: "🌏", title: "Inclusive prompts", subtitle: "Everyone finds something in common" },
              { emoji: "✨", title: "Live progress", subtitle: "Track your path to Bingo" },
              { emoji: "💾", title: "Persistent state", subtitle: "Resumes after refresh" },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">
                  <span aria-hidden="true" className="mr-2">{item.emoji}</span>
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-200">{item.subtitle}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={onStart}
              className="w-full rounded-xl border border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-4 text-lg font-extrabold text-slate-900 shadow-lg shadow-cyan-500/40 transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300 sm:w-auto"
            >
              Dive into Bingo
            </button>

            <p className="text-center text-sm text-slate-300 sm:text-left">
              Need a quick refresh? Play with 24 custom prompts and free center square. 5-in-a-row wins.
            </p>
          </div>
        </section>

        <div className="mt-8 text-center text-xs text-slate-400">
          Hint: Use the game board to call out your favorite prompt as a group activity.
        </div>
      </div>
    </main>
  );
}
