const listeningSections = [
  {
    title: "短い会話",
    subtitle: "Percakapan singkat",
    count: "10問",
    time: "約5分",
  },
  {
    title: "中程度の会話",
    subtitle: "Percakapan menengah",
    count: "10問",
    time: "約8分",
  },
  {
    title: "長い会話",
    subtitle: "Percakapan panjang",
    count: "5問",
    time: "約7分",
  },
  {
    title: "総合聴解",
    subtitle: "Latihan listening N2",
    count: "15問",
    time: "約12分",
  },
];

const focusItems = [
  "状況を先に理解する",
  "重要な言葉を聞き取る",
  "話し手の意図を考える",
];

export default function ListeningPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#242424]">
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-8 sm:px-8">

        {/* Header */}
        <header className="mb-8">
          <p className="text-xs tracking-[0.28em] text-[#8A857C]">
            日本語学習
          </p>

          <div className="mt-2 flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                聴解
              </h1>
              <p className="mt-1 text-sm text-[#777168]">
                Listening N2
              </p>
            </div>

            <div className="rounded-full bg-[#242424] px-4 py-2 text-xs font-medium text-white">
              N2
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mb-6 overflow-hidden rounded-[28px] bg-[#292B2C] p-6 text-white shadow-sm sm:p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs tracking-[0.22em] text-[#B9B5AD]">
                LISTENING
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                聞く力を鍛える
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#D3D0C9]">
                会話の流れを理解し、重要な情報と話し手の意図を
                聞き取る練習をしましょう。
              </p>
            </div>

            <div className="ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E85D4A] text-2xl">
              ♪
            </div>
          </div>

          <button className="mt-7 w-full rounded-2xl bg-[#E85D4A] px-5 py-4 text-sm font-semibold text-white transition hover:opacity-90">
            今日の聴解を始める
          </button>
        </section>

        {/* Progress */}
        <section className="mb-6 rounded-[24px] border border-[#DED8CD] bg-white/70 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#8A857C]">あなたの進捗</p>
              <p className="mt-1 text-lg font-semibold">0%</p>
            </div>

            <p className="text-xs text-[#8A857C]">
              まだ学習データがありません
            </p>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E8E2D8]">
            <div className="h-full w-0 rounded-full bg-[#E85D4A]" />
          </div>
        </section>

        {/* Practice */}
        <section>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.18em] text-[#8A857C]">
                PRACTICE
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                聴解トレーニング
              </h2>
            </div>

            <span className="text-xs text-[#8A857C]">
              4コース
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {listeningSections.map((section, index) => (
              <button
                key={section.title}
                className="group rounded-[22px] border border-[#DED8CD] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1EDE5] text-sm font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-xs text-[#8A857C]">
                    {section.count}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold">
                  {section.title}
                </h3>

                <p className="mt-1 text-sm text-[#777168]">
                  {section.subtitle}
                </p>

                <p className="mt-4 text-xs text-[#9A948A]">
                  {section.time}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Strategy */}
        <section className="mt-8">
          <div className="mb-4">
            <p className="text-xs tracking-[0.18em] text-[#8A857C]">
              STRATEGY
            </p>
            <h2 className="mt-1 text-xl font-semibold">
              聴解のポイント
            </h2>
          </div>

          <div className="space-y-3">
            {focusItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[20px] bg-white p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1EDE5] text-xs font-semibold">
                  {index + 1}
                </div>

                <p className="text-sm font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom navigation */}
        <nav className="fixed bottom-0 left-0 right-0 border-t border-[#DED8CD] bg-[#F7F3EA]/95 backdrop-blur">
          <div className="mx-auto grid max-w-5xl grid-cols-5">
            {[
              ["⌂", "ホーム"],
              ["学", "学習"],
              ["↻", "復習"],
              ["✓", "テスト"],
              ["○", "マイページ"],
            ].map(([icon, label], index) => (
              <button
                key={label}
                className={`flex flex-col items-center gap-1 py-3 text-[11px] ${
                  index === 1
                    ? "font-semibold text-[#E85D4A]"
                    : "text-[#777168]"
                }`}
              >
                <span className="text-base">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </nav>

      </div>
    </main>
  );
}