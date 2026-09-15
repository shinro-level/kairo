const listeningLessons = [
  {
    number: "01",
    title: "会話のポイント",
    subtitle: "Percakapan sehari-hari",
    level: "N2",
    time: "約10分",
  },
  {
    number: "02",
    title: "話の内容",
    subtitle: "Memahami isi pembicaraan",
    level: "N2",
    time: "約10分",
  },
  {
    number: "03",
    title: "話し手の意図",
    subtitle: "Memahami maksud pembicara",
    level: "N2",
    time: "約12分",
  },
  {
    number: "04",
    title: "情報の整理",
    subtitle: "Mengolah informasi yang didengar",
    level: "N2",
    time: "約12分",
  },
];

export default function ListeningPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#252525]">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <header className="mb-10">
          <p className="text-xs font-medium tracking-[0.25em] text-[#8A8175]">
            KAIRO
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            聴解
          </h1>

          <p className="mt-2 text-sm text-[#777067]">
            Listening
          </p>
        </header>

        <section className="mb-8 rounded-[28px] bg-[#292929] p-7 text-white shadow-sm sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#BDB7AD]">
                N2 LISTENING
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                聴く力を鍛える
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#D7D2CA]">
                会話や説明を聞いて、必要な情報を正確に理解する練習です。
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E85D4A] text-sm font-semibold">
              N2
            </div>
          </div>

          <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-0 rounded-full bg-[#E85D4A]" />
          </div>

          <div className="mt-3 flex justify-between text-xs text-[#BDB7AD]">
            <span>学習進捗</span>
            <span>0%</span>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold">リスニング練習</h2>
              <p className="mt-1 text-sm text-[#8A8175]">
                Pilih latihan untuk mulai belajar
              </p>
            </div>

            <span className="text-xs text-[#8A8175]">
              4 LESSONS
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {listeningLessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-[24px] border border-[#E4DED4] bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#E85D4A]">
                    {lesson.number}
                  </span>

                  <span className="rounded-full bg-[#F1EEE8] px-3 py-1 text-[11px] font-medium text-[#777067]">
                    {lesson.level}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {lesson.title}
                </h3>

                <p className="mt-1 text-sm text-[#777067]">
                  {lesson.subtitle}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-[#9A9288]">
                    {lesson.time}
                  </span>

                  <button className="rounded-full bg-[#E85D4A] px-4 py-2 text-xs font-semibold text-white">
                    始める
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#E4DED4] bg-white/70 p-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#E85D4A]">
            SMART REVIEW
          </p>

          <h2 className="mt-2 text-lg font-semibold">
            聞き取れなかった問題を復習
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#777067]">
            間違えた問題は、あとで優先的に復習できます。
          </p>
        </section>
      </div>
    </main>
  );
}