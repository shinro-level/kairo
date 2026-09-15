"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "ホーム", href: "/", icon: "home" },
  { label: "学習", href: "/study", icon: "study" },
  { label: "復習", href: "/review", icon: "review" },
  { label: "テスト", href: "/test", icon: "test" },
  { label: "マイページ", href: "/me", icon: "profile" },
];

function NavIcon({
  type,
  active,
}: {
  type: string;
  active: boolean;
}) {
  const className = `h-[21px] w-[21px] transition-all duration-300 ease-out ${
    active ? "scale-105" : "scale-100"
  }`;

  if (type === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 10.8 12 4l8.5 6.8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 9.8V20h13V9.8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 20v-5.5h5V20"
        />
      </svg>
    );
  }

  if (type === "study") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={className}
      >
        <rect x="4" y="3.5" width="16" height="17" rx="3" />
        <path strokeLinecap="round" d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    );
  }

  if (type === "review") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 8.5A7.5 7.5 0 1 0 20 13"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 4.5v4h-4"
        />
      </svg>
    );
  }

  if (type === "test") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={className}
      >
        <rect x="4" y="3.5" width="16" height="17" rx="3" />
        <path strokeLinecap="round" d="M8 8h8M8 12h5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8 16 1.5 1.5L12 15"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
    >
      <circle cx="12" cy="8" r="3.2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 20c.8-3.5 3-5.2 6.5-5.2s5.7 1.7 6.5 5.2"
      />
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#DED8CC]/70 bg-[#F8F5ED]/95 backdrop-blur-xl">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1 px-3 py-2.5">
        {navigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex min-h-[54px] items-center justify-center rounded-2xl transition-all duration-300 ease-out active:scale-[0.94] ${
                active
                  ? "bg-[#F05A4F] text-white shadow-[0_5px_18px_rgba(240,90,79,0.20)]"
                  : "text-[#77736B] hover:bg-[#EEEAE1] hover:text-[#F05A4F]"
              }`}
            >
              <span className="flex flex-col items-center justify-center gap-1">
                <NavIcon type={item.icon} active={active} />

                <span
                  className={`text-[10px] tracking-wide transition-all duration-300 ${
                    active ? "font-semibold text-white" : "font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}