import Image from "next/image";

const About = () => {
  return (
    <section id="about"
      className=" mx-auto min-h-screen px-5 py-20 text-center">
      <h2 className=" mb-25 text-4xl font-bold tracking-[0.5em] text-white">
        About Me
      </h2>

      <div
        className="
          flex flex-col items-center justify-center gap-10 text-left leading-relaxed text-white md:flex-row">
        <div className="shrink-0">
          <Image src="/rogueアイコン.png" alt="rogue" width={250} height={250} />
        </div>

        <div className="max-w-2xl">
          <p className="mb-5">
            フロントエンドエンジニアを目指しているrogueです。
          </p>

          <p className="mb-5">
            福島県在住。<br />
            フロントエンドエンジニアへの転職を目指して学習中です。<br />
            React、TypeScript、Next.jsを中心に学んでいます。<br />
            <br />
            私は見た目の美しさだけでなく、<br />
            実際に触ったときの使いやすさや実用性を重視しています。<br />
            <br />
            日頃からゲームやアプリのUIに触れる中で、<br />
            「本当に使いやすいか？」という視点を大切にしてきました。<br />
            <br />
            ユーザーが迷わず快適に操作できるフロントエンド開発を目指しています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;