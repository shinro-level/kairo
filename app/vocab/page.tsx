const vocabulary = [
  {
    word: "影響",
    reading: "えいきょう",
    meaning: "pengaruh",
    example: "生活に大きな影響を与える。",
  },
  {
    word: "改善",
    reading: "かいぜん",
    meaning: "perbaikan",
    example: "問題を改善する必要がある。",
  },
  {
    word: "環境",
    reading: "かんきょう",
    meaning: "lingkungan",
    example: "環境を守ることが大切だ。",
  },
  {
    word: "確認",
    reading: "かくにん",
    meaning: "memastikan / konfirmasi",
    example: "もう一度内容を確認してください。",
  },
];

export default function VocabularyPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] px-5 py-8 text-[#252525]">
      <div className="mx-auto max-w-3xl">

        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-[#8B857B]">
            KAIRO
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            語彙
          </h1>

          <p className="mt-2 text-sm text-[#77736C]">
            N2 Vocabulary
          </p>
        </header>

        <section className="mb-6 rounded-3xl bg-[#292929] p-6 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#C9C4BA]">
                N2 語彙
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                今日の語彙
              </h2>

              <p className="mt-2 text-sm text-[#C9C4BA]">
                まずは4語から始めましょう。
              </p>
            </div>

            <div className="rounded-full bg-[#E85B4F] px-4 py-2 text-sm font-medium">
              0%
            </div>
          </div>
        </section>

        <section className="space-y-4">
          {vocabulary.map((item, index) => (
            <article
              key={item.word}
              className="rounded-3xl border border-[#E5DFD4] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-[#A09A91]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-[#F1EEE7] px-3 py-1 text-xs text-[#77736C]">
                  N2
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold">
                {item.word}
              </h2>

              <p className="mt-1 text-sm text-[#8B857B]">
                {item.reading}
              </p>

              <div className="mt-5 border-t border-[#EEE9E0] pt-4">
                <p className="text-sm font-medium">
                  {item.meaning}
                </p>

                <p className="mt-2 text-sm leading-6 text-[#77736C]">
                  {item.example}
                </p>
              </div>
            </article>
          ))}
        </section>

        <button className="mt-6 w-full rounded-2xl bg-[#E85B4F] py-4 text-sm font-semibold text-white shadow-sm">
          語彙を学習する
        </button>

        <nav className="mt-8 grid grid-cols-5 gap-2 border-t border-[#E5DFD4] pt-5 text-center text-[11px] text-[#8B857B]">
          <span>ホーム</span>
          <span>学習</span>
          <span>復習</span>
          <span>テスト</span>
          <span>マイページ</span>
        </nav>

      </div>
    </main>
  );
}