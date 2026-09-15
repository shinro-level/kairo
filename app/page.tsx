import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1C1C1C]">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-24">
        
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#77736B]">
              日本語学習
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              KAIRO
            </h1>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED8CC] bg-white"
            aria-label="通知"
          >
            ◌
          </button>
        </header>

        {/* Greeting */}
        <section className="pt-6">
          <p className="text-sm text-[#77736B]">おかえりなさい</p>
          <h2 className="mt-1 text-2xl font-semibold">
            Bangkit
          </h2>
        </section>

        {/* N2 Readiness */}
        <section className="mt-7 overflow-hidden rounded-3xl bg-[#222222] p-6 text-[#F8F5EE]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#BDB8AE]">
                N2 READY
              </p>

              <p className="mt-4 text-5xl font-semibold">
                0<span className="text-2xl">%</span>
              </p>
            </div>

            <div className="rounded-full bg-[#B94A3A] px-3 py-1 text-xs">
              N2
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#C9C4BA]">
            まだ学習データがありません。
            <br />
            今日からN2の学習を始めましょう。
          </p>

          <button className="mt-6 w-full rounded-2xl bg-[#B94A3A] px-5 py-4 text-sm font-medium text-white">
            今日の学習を始める
          </button>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">学習スキル</h3>
            <span className="text-xs text-[#77736B]">N2</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["漢字", "Kanji"],
              ["語彙", "Kosakata"],
              ["文法", "Tata Bahasa"],
              ["読解", "Membaca"],
              ["聴解", "Menyimak"],
            ].map(([jp, id]) => (
              <div
                key={jp}
                className="rounded-2xl border border-[#E1DBD0] bg-white p-4"
              >
                <p className="text-lg font-semibold">{jp}</p>
                <p className="mt-1 text-xs text-[#77736B]">{id}</p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#ECE7DE]">
                  <div className="h-full w-0 rounded-full bg-[#B94A3A]" />
                </div>

                <p className="mt-2 text-right text-[11px] text-[#99938A]">
                  0%
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Today's Learning */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">今日の学習</h3>

          <div className="mt-4 rounded-2xl border border-[#E1DBD0] bg-white p-5">
            <p className="text-xs text-[#77736B]">
              今日の重点
            </p>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">
                  学習を始めましょう
                </p>
                <p className="mt-1 text-sm text-[#77736B]">
                  N2の力を少しずつ伸ばしていきます。
                </p>
              </div>

              <span className="text-xl">→</span>
            </div>
          </div>
        </section>

        {/* Review */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">復習</h3>
            <span className="text-xs text-[#77736B]">0問</span>
          </div>

          <div className="mt-4 rounded-2xl bg-[#EEE9DF] p-5">
            <p className="text-sm leading-6 text-[#5F5B54]">
              今日の復習はありません。
              学習すると、ここに復習項目が表示されます。
            </p>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#DED8CC] bg-[#F8F5ED]/95 backdrop-blur-md">
  <div className="mx-auto grid max-w-md grid-cols-5 px-3 py-3 text-center">

    <Link
      href="/"
      className="flex flex-col items-center gap-1 text-[11px] font-semibold text-[#B94A3A]"
    >
      <span className="text-lg">⌂</span>
      <span>ホーム</span>
    </Link>

    <Link
      href="/study"
      className="flex flex-col items-center gap-1 text-[11px] text-[#77736B]"
    >
      <span className="text-lg">▣</span>
      <span>学習</span>
    </Link>

    <Link
      href="/review"
      className="flex flex-col items-center gap-1 text-[11px] text-[#77736B]"
    >
      <span className="text-lg">↻</span>
      <span>復習</span>
    </Link>

    <Link
      href="/test"
      className="flex flex-col items-center gap-1 text-[11px] text-[#77736B]"
    >
      <span className="text-lg">□</span>
      <span>テスト</span>
    </Link>

    <Link
      href="/me"
      className="flex flex-col items-center gap-1 text-[11px] text-[#77736B]"
    >
      <span className="text-lg">○</span>
      <span>マイページ</span>
    </Link>

  </div>
</nav>
    </main>
  );
}