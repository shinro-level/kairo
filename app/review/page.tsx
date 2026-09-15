const reviewItems = [
  {
    title: "漢字",
    subtitle: "Kanji",
    count: "8問",
    time: "約4分",
  },
  {
    title: "語彙",
    subtitle: "Kosakata",
    count: "6問",
    time: "約3分",
  },
  {
    title: "文法",
    subtitle: "Tata bahasa",
    count: "5問",
    time: "約3分",
  },
];

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#242424]">
      <div className="mx-auto max-w-md px-5 pb-10 pt-8">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xs tracking-[0.25em] text-[#77736B]">
            KAIRO
          </p>

          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="text-sm text-[#77736B]">
                今日の復習
              </p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight">
                復習
              </h1>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD7CB] bg-white text-sm">
              ↻
            </div>
          </div>
        </header>

        {/* Review Hero */}
        <section className="rounded-[28px] bg-[#292A2B] p-6 text-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#C9C6BE]">
                SMART REVIEW
              </p>

              <h2 className="mt-3 text-4xl font-semibold">
                19
                <span className="ml-2 text-base font-normal text-[#C9C6BE]">
                  items
                </span>
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#D7D4CD]">
                今日の復習を終わらせて、
                <br />
                学習した内容を定着させましょう。
              </p>
            </div>

            <div className="rounded-full bg-[#E85C4A] px-3 py-1 text-xs font-medium">
              N2
            </div>
          </div>

          <button className="mt-6 w-full rounded-2xl bg-[#E85C4A] px-5 py-4 text-sm font-medium text-white transition active:scale-[0.98]">
            復習を始める
          </button>
        </section>

        {/* Priority */}
        <section className="mt-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.18em] text-[#8A867E]">
                PRIORITY
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                優先復習
              </h2>
            </div>

            <span className="text-xs text-[#8A867E]">
              3カテゴリ
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {reviewItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E1DCD2] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <span className="text-xs text-[#99958C]">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-[#8A867E]">
                      {item.count} · {item.time}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EFE7] text-[#E85C4A]">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flashcard */}
        <section className="mt-8 rounded-2xl border border-[#E1DCD2] bg-white p-5">
          <p className="text-xs tracking-[0.18em] text-[#8A867E]">
            FLASHCARD
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            フラッシュカード
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#77736B]">
            忘れやすい項目をもう一度確認しましょう。
          </p>

          <button className="mt-4 w-full rounded-xl border border-[#D8D2C7] px-4 py-3 text-sm font-medium">
            フラッシュカードを開く
          </button>
        </section>

        {/* Review Stats */}
        <section className="mt-8">
          <p className="text-xs tracking-[0.18em] text-[#8A867E]">
            REVIEW INSIGHTS
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            復習データ
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs text-[#8A867E]">
                今日
              </p>
              <p className="mt-2 text-2xl font-semibold">
                0
              </p>
              <p className="mt-1 text-xs text-[#99958C]">
                完了
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs text-[#8A867E]">
                正答率
              </p>
              <p className="mt-2 text-2xl font-semibold">
                —
              </p>
              <p className="mt-1 text-xs text-[#99958C]">
                まだデータなし
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="mt-10 grid grid-cols-5 border-t border-[#DED8CD] pt-5 text-center">
          <div className="text-[#E85C4A]">
            <div className="text-lg">⌂</div>
            <p className="mt-1 text-[10px]">ホーム</p>
          </div>

          <div className="text-[#77736B]">
            <div className="text-lg">▣</div>
            <p className="mt-1 text-[10px]">学習</p>
          </div>

          <div className="text-[#77736B]">
            <div className="text-lg">↻</div>
            <p className="mt-1 text-[10px]">復習</p>
          </div>

          <div className="text-[#77736B]">
            <div className="text-lg">□</div>
            <p className="mt-1 text-[10px]">テスト</p>
          </div>

          <div className="text-[#77736B]">
            <div className="text-lg">○</div>
            <p className="mt-1 text-[10px]">マイページ</p>
          </div>
        </nav>
      </div>
    </main>
  );
}