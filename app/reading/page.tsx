export default function ReadingPage() {
  const lessons = [
    {
      title: "短文読解",
      subtitle: "短い文章を読んで理解する",
      level: "基礎",
      progress: 0,
    },
    {
      title: "中文読解",
      subtitle: "情報を整理しながら読む",
      level: "標準",
      progress: 0,
    },
    {
      title: "長文読解",
      subtitle: "長い文章から要点をつかむ",
      level: "N2",
      progress: 0,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-5 py-8 text-[#252525]">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm tracking-[0.25em] text-[#8A867D]">
            日本語学習
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            読解
          </h1>

          <p className="mt-2 text-sm text-[#77736B]">
            N2の文章を読み、情報を正確につかむ力を伸ばしましょう。
          </p>
        </header>

        <section className="mb-7 rounded-[28px] bg-[#292A2C] p-6 text-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#C9C5BC]">
                N2 READING
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                読解力を伸ばす
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#D8D5CE]">
                主張・理由・具体例・筆者の意図を意識しながら、
                N2読解に必要な力を身につけます。
              </p>
            </div>

            <span className="rounded-full bg-[#E95F52] px-3 py-1 text-xs font-medium">
              N2
            </span>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-0 rounded-full bg-[#E95F52]" />
          </div>

          <div className="mt-2 flex justify-between text-xs text-[#BDB9B0]">
            <span>進捗</span>
            <span>0%</span>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#8A867D]">
                READING SKILL
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                読解トレーニング
              </h2>
            </div>

            <span className="text-sm text-[#8A867D]">3 LESSONS</span>
          </div>

          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <div
                key={lesson.title}
                className="rounded-[24px] border border-[#E4DED3] bg-white/80 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F0ECE3] text-sm font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="font-semibold">{lesson.title}</h3>
                      <p className="mt-1 text-sm text-[#77736B]">
                        {lesson.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#F0ECE3] px-3 py-1 text-xs text-[#77736B]">
                    {lesson.level}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between text-xs text-[#8A867D]">
                    <span>進捗</span>
                    <span>{lesson.progress}%</span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E9E4DA]">
                    <div
                      className="h-full rounded-full bg-[#E95F52]"
                      style={{ width: `${lesson.progress}%` }}
                    />
                  </div>
                </div>

                <button className="mt-5 w-full rounded-2xl bg-[#E95F52] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90">
                  学習を始める
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7 rounded-[24px] border border-[#E4DED3] bg-white/70 p-5">
          <p className="text-xs tracking-[0.2em] text-[#8A867D]">
            今日のポイント
          </p>

          <h2 className="mt-2 text-lg font-semibold">
            文章の「理由」を探す
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#77736B]">
            「なぜ」「そのため」「しかし」などの表現に注目すると、
            筆者の考えや文章の流れをつかみやすくなります。
          </p>
        </section>
      </div>
    </main>
  );
}