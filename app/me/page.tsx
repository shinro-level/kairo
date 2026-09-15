const skills = [
  { name: "漢字", value: 0, label: "Kanji" },
  { name: "語彙", value: 0, label: "Kosakata" },
  { name: "文法", value: 0, label: "Tata Bahasa" },
  { name: "読解", value: 0, label: "Membaca" },
  { name: "聴解", value: 0, label: "Menyimak" },
];

export default function MePage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#191817] pb-28">
      <div className="mx-auto max-w-5xl px-5 py-8">

        {/* Header */}
        <header className="mb-8">
          <p className="text-sm text-[#77736c]">マイページ</p>

          <div className="mt-3 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Bangkit
              </h1>
              <p className="mt-1 text-sm text-[#77736c]">
                N2学習プロフィール
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1d1c1a] text-lg font-semibold text-white">
              B
            </div>
          </div>
        </header>

        {/* Readiness */}
        <section className="rounded-3xl bg-[#1d1c1a] p-6 text-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#c9c3b9]">
                N2 READINESS
              </p>

              <h2 className="mt-3 text-5xl font-semibold">
                0%
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[#c9c3b9]">
                学習データがまだありません。
                学習を始めると、N2への準備度が更新されます。
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#55514a]">
              <span className="text-sm text-[#c9c3b9]">N2</span>
            </div>
          </div>
        </section>

        {/* Learning Statistics */}
        <section className="mt-6">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium tracking-widest text-[#8b857c]">
                学習データ
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                学習統計
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["0", "学習時間"],
              ["0", "学習日数"],
              ["0", "回答数"],
              ["0%", "正答率"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-xs text-[#77736c]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skill Progress */}
        <section className="mt-8">
          <p className="text-xs font-medium tracking-widest text-[#8b857c]">
            SKILL
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            スキル進捗
          </h2>

          <div className="mt-4 space-y-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <p className="mt-1 text-xs text-[#8b857c]">
                      {skill.label}
                    </p>
                  </div>

                  <span className="text-sm font-semibold">
                    {skill.value}%
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#ebe6dc]">
                  <div
                    className="h-full rounded-full bg-[#c84b3f]"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Settings */}
        <section className="mt-8">
          <p className="text-xs font-medium tracking-widest text-[#8b857c]">
            SETTINGS
          </p>

          <div className="mt-3 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            {[
              ["学習設定", "学習方法と目標を設定"],
              ["表示設定", "ライト / ダークモード"],
              ["アプリ情報", "KAIROについて"],
            ].map(([title, description], index) => (
              <div
                key={title}
                className={`flex items-center justify-between p-5 ${
                  index !== 2 ? "border-b border-[#eee9df]" : ""
                }`}
              >
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="mt-1 text-xs text-[#8b857c]">
                    {description}
                  </p>
                </div>

                <span className="text-[#aaa49b]">›</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-black/5 bg-[#f6f1e8]/95 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-5 px-3 py-3">
          {[
            ["ホーム", "⌂"],
            ["学習", "◫"],
            ["復習", "↻"],
            ["テスト", "□"],
            ["マイページ", "●"],
          ].map(([label, icon]) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 text-[11px] ${
                label === "マイページ"
                  ? "font-semibold text-[#c84b3f]"
                  : "text-[#77736c]"
              }`}
            >
              <span className="text-base">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </nav>
    </main>
  );
}