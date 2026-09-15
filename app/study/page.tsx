const skills = [
  {
    kanji: "漢字",
    indonesia: "Kanji",
    progress: 0,
  },
  {
    kanji: "語彙",
    indonesia: "Kosakata",
    progress: 0,
  },
  {
    kanji: "文法",
    indonesia: "Tata Bahasa",
    progress: 0,
  },
  {
    kanji: "読解",
    indonesia: "Membaca",
    progress: 0,
  },
  {
    kanji: "聴解",
    indonesia: "Menyimak",
    progress: 0,
  },
];

export default function StudyPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] px-5 pb-28 pt-8 text-[#252525]">
      <div className="mx-auto max-w-md">
        <header className="mb-8">
          <p className="text-xs tracking-[0.25em] text-[#8A857D]">
            学習
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            学習
          </h1>

          <p className="mt-2 text-sm text-[#77736C]">
            N2のスキルを少しずつ伸ばしましょう。
          </p>
        </header>

        <section className="mb-7 rounded-[28px] bg-[#252525] p-6 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#C9C5BD]">
                N2 SKILL MAP
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                今日の学習
              </h2>
            </div>

            <div className="rounded-full bg-[#F05A4F] px-3 py-1 text-xs font-medium">
              N2
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#D8D4CD]">
            今のあなたに必要なスキルから学習を始めましょう。
          </p>

          <button className="mt-6 w-full rounded-2xl bg-[#F05A4F] py-4 text-sm font-semibold text-white transition active:scale-[0.98]">
            今日の学習を始める
          </button>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-[#8A857D]">
                N2
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                学習スキル
              </h2>
            </div>

            <span className="text-xs text-[#8A857D]">
              5スキル
            </span>
          </div>

          <div className="space-y-3">
            {skills.map((skill) => (
              <button
                key={skill.kanji}
                className="w-full rounded-3xl border border-[#E5DED2] bg-white p-5 text-left shadow-sm transition active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {skill.kanji}
                    </h3>

                    <p className="mt-1 text-xs text-[#8A857D]">
                      {skill.indonesia}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-[#F05A4F]">
                    {skill.progress}%
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#EEE9E0]">
                  <div
                    className="h-full rounded-full bg-[#F05A4F]"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}