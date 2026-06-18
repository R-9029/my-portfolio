import React from 'react';
// react-icons から必要なアイコンをインポート
import { FaXTwitter, FaGithub } from 'react-icons/fa6'; 

const Contact = () => {
  // SNSや連絡先のデータ一覧
  const contactLinks = [
    {
      name: 'X (Twitter)',
      icon: <FaXTwitter />,
      url: 'https://x.com/R9029_zen', 
      hoverColor: 'hover:text-sky-400 hover:border-sky-400/30',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/R-9029',
      hoverColor: 'hover:text-white hover:border-zinc-600',
    },
  ];

  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-[60vh] px-5 py-20 text-center bg-transparent">
      {/* タイトル */}
      <h2 className="text-4xl font-bold mb-4 tracking-wide text-gray-100">
        Contact
      </h2>

      {/* 説明文 */}
      <p className="text-white mb-10 max-w-md text-sm leading-relaxed">
        お仕事のご相談や、作成したアプリに関するフィードバックなど、<br />
        各種SNSよりお気軽にご連絡ください。
      </p>

      {/* アイコンボタンの並び */}
      <div className="flex flex-wrap justify-center gap-6">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name} // マウスを乗せたときにポップアップで名前が出る
            // 初期状態はグレーの丸枠。ホバーすると、それぞれのブランドカラーにふわっと変化
            className={`flex items-center justify-center w-14 h-14 text-2xl text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg ${link.hoverColor}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;