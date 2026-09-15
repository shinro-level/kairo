const tests = [
  {
    title: "クイックテスト",
    subtitle: "短時間で実力をチェック",
    detail: "5〜10問",
    icon: "⚡",
  },
  {
    title: "スキルテスト",
    subtitle: "分野ごとの実力を確認",
    detail: "漢字・語彙・文法・読解・聴解",
    icon: "◉",
  },
  {
    title: "ミックステスト",
    subtitle: "N2の総合力をチェック",
    detail: "全スキル",
    icon: "◆",
  },
  {
    title: "N2模擬テスト",
    subtitle: "本番を意識した総合テスト",
    detail: "N2形式",
    icon: "▣",
  },
];

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] px-5 py-8 text-[#202124]">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-[#8C8A83]">
            KAIRO
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            テスト
          </h1>

          <p className="mt-2 text-sm text-[#77746D]">
            今の実力をチェックして、次の学習につなげましょう。
          </p>
        </header>

        <section className="mb-8 rounded-[28px] bg-[#25272A] p-6 text-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#B8B5AD]">
                N2 TEST
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                N2の実力を測る
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#D4D1CA]">
                テスト結果から、あなたの得意分野と弱点を確認できます。
              </p>
            </div>

            <span className="rounded-full bg-[#E85D4A] px-3 py-1 text-xs font-semibold">
              N2
            </span>
          </div>

          <button className="mt-6 w-full rounded-2xl bg-[#E85D4A] px-5 py-4 text-sm font-semibold text-white transition hover:opacity-90">
            テストを始める
          </button>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#8C8A83]">
                TEST MENU
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                テストを選ぶ
              </h2>
            </div>
          </div>

          <div className="grid gap-4">
            {tests.map((test) => (
              <button
                key={test.title}
                className="group rounded-[24px] border border-[#E3DED3] bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F1EEE6] text-lg">
                    {test.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">
                      {test.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#77746D]">
                      {test.subtitle}
                    </p>

                    <p className="mt-2 text-xs text-[#9A968D]">
                      {test.detail}
                    </p>
                  </div>

                  <span className="text-xl text-[#A29E95] transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#E3DED3] bg-[#EFEBE2] p-5">
          <p className="text-xs tracking-[0.2em] text-[#8C8A83]">
            TEST RESULT
          </p>

          <h2 className="mt-2 text-lg font-semibold">
            まだテスト結果がありません
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#77746D]">
            最初のテストを受けると、ここにあなたの成績が表示されます。
          </p>
        </section>
      </div>
    </main>
  );
}