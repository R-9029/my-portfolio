
const Hero = () => {


  return (
    <section
      className=" relative flex min-h-screen flex-col items-center justify-center px-5 text-center bottom-10"
    >
      <h1
        className=" mb-5 text-4xl font-bold tracking-[0.5em] md:text-5xl"
      >
        Rogue&apos;s Portfolio
      </h1>

      <p
        className=" mb-15 max-w-[700px] text-xl leading-relaxed text-white"
      >
        「本当に自分で使ってみたか？」を基準に開発しています。
        <br />
        派手な演出よりも、ストレスなく使える操作性と実用性を重視。
        <br />
        ユーザー目線で考え抜いたフロントエンドを目指します。
      </p>


      <a
        href="#about"
        className="
          absolute
          bottom-10
          flex
          flex-col
          items-center
          gap-1
          text-sm
          text-white
          hover:text-zinc-300
          transition-colors
        "
      >
        <span>Scroll Down</span>
        <span className="text-xl animate-bounce">↓</span>
      </a>
    </section>
  );
};

export default Hero;