export default function KanjiPage() {
  const kanji = [
    {
      character: "築",
      reading: "チク",
      meaning: "membangun",
      example: "建築",
      exampleMeaning: "arsitektur",
    },
    {
      character: "環",
      reading: "カン",
      meaning: "lingkungan",
      example: "環境",
      exampleMeaning: "lingkungan",
    },
    {
      character: "認",
      reading: "ニン",
      meaning: "mengakui / mengenali",
      example: "確認",
      exampleMeaning: "konfirmasi",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#292724]">
      <div className="mx-auto max-w-md px-5 pb-10 pt-8">

        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#8B857B]">
              N2 学習
            </p>
            <h1 className="mt-1 text-2xl font-semibold">
              漢字
            </h1>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED8CC] bg-white text-sm">
            N2
          </div>
        </header>

        {/* Progress */}
        <section className="mb-6 rounded-3xl bg-[#292B2D] p-6 text-white shadow-sm">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#BDB9B0]">
                今日の漢字
              </p>

              <p className="mt-2 text-4xl font-semibold">
                0<span className="text-xl"> / 5</span>
              </p>
            </div>

            <span className="rounded-full bg-[#E96558] px-3 py-1 text-xs">
              DAY 1
            </span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#55575A]">
            <div className="h-full w-0 rounded-full bg-[#E96558]" />
          </div>

          <p className="mt-3 text-sm text-[#D5D1C8]">
            今日の漢字を5文字学習しましょう。
          </p>
        </section>

        {/* Start */}
        <button className="mb-7 w-full rounded-2xl bg-[#E96558] px-5 py-4 text-sm font-medium text-white shadow-sm">
          漢字学習を始める
        </button>

        {/* Kanji list */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              今日の漢字
            </h2>

            <span className="text-xs text-[#8B857B]">
              3 / 5
            </span>
          </div>

          <div className="space-y-3">
            {kanji.map((item) => (
              <div
                key={item.character}
                className="rounded-2xl border border-[#E3DED4] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F1EEE7] text-4xl font-semibold">
                    {item.character}
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {item.reading}
                    </p>

                    <p className="mt-1 text-sm text-[#777168]">
                      {item.meaning}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-[#EEEAE2] pt-3">
                  <p className="text-sm font-medium">
                    {item.example}
                  </p>

                  <p className="mt-1 text-xs text-[#8B857B]">
                    {item.exampleMeaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning tip */}
        <section className="mt-6 rounded-2xl bg-[#E8E5DC] p-5">
          <p className="text-xs tracking-[0.15em] text-[#777168]">
            学習のコツ
          </p>

          <p className="mt-2 text-sm leading-6 text-[#45413C]">
            漢字を見て、読み方と意味を思い出してから
            答えを確認しましょう。
          </p>
        </section>

      </div>
    </main>
  );
}