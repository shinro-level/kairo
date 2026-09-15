const grammar = [
  {
    pattern: "〜わけではない",
    meaning: "bukan berarti ...",
    description: "Digunakan untuk menyangkal sebagian atau meluruskan suatu kesalahpahaman.",
  },
  {
    pattern: "〜ことになっている",
    meaning: "sudah ditetapkan bahwa ...",
    description: "Menunjukkan aturan, keputusan, atau ketentuan yang sudah ditetapkan.",
  },
  {
    pattern: "〜に違いない",
    meaning: "pasti ...",
    description: "Digunakan ketika pembicara sangat yakin berdasarkan alasan atau bukti.",
  },
  {
    pattern: "〜ものの",
    meaning: "meskipun ...",
    description: "Menunjukkan pertentangan antara keadaan sebelumnya dan hasil berikutnya.",
  },
  {
    pattern: "〜に対して",
    meaning: "terhadap / sedangkan ...",
    description: "Menunjukkan sasaran tindakan atau perbandingan antara dua hal.",
  },
];

export default function GrammarPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#292929]">
      <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xs font-medium tracking-[0.25em] text-[#8B8B83]">
            日本語学習
          </p>

          <div className="mt-2 flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                文法
              </h1>
              <p className="mt-1 text-sm text-[#77776F]">
                N2 Grammar
              </p>
            </div>

            <span className="rounded-full bg-[#292929] px-4 py-2 text-xs font-medium text-white">
              N2
            </span>
          </div>
        </header>

        {/* Progress */}
        <section className="mb-7 rounded-3xl bg-[#292929] p-6 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#C9C7BF]">
                GRAMMAR PROGRESS
              </p>
              <p className="mt-2 text-4xl font-semibold">0%</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-[#C9C7BF]">学習データ</p>
              <p className="mt-1 text-sm">まだありません</p>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-0 rounded-full bg-[#E85B4A]" />
          </div>
        </section>

        {/* Section title */}
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-[#8B8B83]">
              N2 GRAMMAR
            </p>
            <h2 className="mt-1 text-xl font-semibold">
              文法を学ぶ
            </h2>
          </div>

          <span className="text-sm text-[#8B8B83]">
            {grammar.length}項目
          </span>
        </div>

        {/* Grammar cards */}
        <section className="space-y-3">
          {grammar.map((item, index) => (
            <article
              key={item.pattern}
              className="rounded-2xl border border-[#E6E1D8] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1EEE7] text-xs font-semibold text-[#77776F]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.pattern}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#E85B4A]">
                    {item.meaning}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#6F6F68]">
                    {item.description}
                  </p>

                  <button className="mt-4 rounded-full bg-[#292929] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90">
                    文法を見る
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom note */}
        <section className="mt-8 rounded-2xl bg-[#EDE8DE] p-5">
          <p className="text-xs font-medium tracking-[0.15em] text-[#8B8B83]">
            KAIRO METHOD
          </p>
          <p className="mt-2 text-sm leading-6 text-[#55554F]">
            文法を覚えるだけではなく、意味・使い方・例文・練習問題まで
            身につけていきます。
          </p>
        </section>
      </div>
    </main>
  );
}