"use client"; // 💡 1行目に移動

import Image from "next/image"; // 💡 インポートは2行目以降に
import { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const buttonStyle =
    "rounded-md border border-zinc-600 bg-zinc-800 px-6 py-3 text-base font-bold text-white transition hover:bg-zinc-900";

  useEffect(() => {
    const handleScroll = () => {
      // 画面が1画面分（Heroの高さ分）スクロールされたら固定（true）にする
      if (window.scrollY > window.innerHeight - 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`left-0 z-50 w-full px-8 py-4 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-zinc-950/90 backdrop-blur-md shadow-md shadow-black/50"
          : "absolute bottom-50"
      }`}
    >
      {/* 💡 1行の中に要素を配置するための親コンテナ */}
      <div className="relative flex items-center justify-center w-full min-h-[50px]">
        
        {/* 👇 左端：スクロールして固定（Sticky）された時だけアイコン＆HOMEを表示 */}
        {isSticky && (
          <a
            href="#"
            className="absolute left-0 flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-base font-bold text-white transition hover:bg-zinc-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden">
              <Image
                src="/rogue_icon_48.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </span>
            <span className="tracking-wider">HOME</span>
          </a>
        )}

        {/* 👇 中央：ナビゲーションボタン群（常に完全な画面中央に固定されます） */}
        <div className="flex gap-5">
          <a href="#about" className={buttonStyle}>About</a>
          <a href="#skills" className={buttonStyle}>Skills</a>
          <a href="#works" className={buttonStyle}>Works</a>
          <a href="#contact" className={buttonStyle}>Contact</a>
        </div>

      </div>
    </header>
  );
}; 

export default Header;