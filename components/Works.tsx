import useProjects from '../hooks/useProjects';
import Image from 'next/image';


const Works = () => {
  const { projectList } = useProjects();


  return (
    <section id="works" className="min-h-screen px-5 py-24 max-w-5xl mx-auto text-white">
      {/* タイトル */}
      <h2 className="text-4xl font-bold mb-16 text-center tracking-wide">
        Works
      </h2>

      {/* 作品を縦に並べるコンテナ */}
      <div className="flex flex-col gap-10 md:gap-24">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-8 items-center bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/80"
          >
            {/* 左側：作品リンク・プレビュー領域 */}
            <div className="w-full md:w-1/2">
              {project.isComingSoon ? (
                <div className="block relative overflow-hidden rounded-xl aspect-video bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xl font-bold block text-zinc-300 tracking-widest">
                      COMING SOON
                    </span>
                    <span className="text-xs text-zinc-300 block mt-1">
                      Under Development
                    </span>
                  </div>
                </div>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-xl aspect-video bg-zinc-800 border border-zinc-700 transition-all hover:border-zinc-500"
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    className=" w-full h-full object-contain"
                    fill
                  />
                </a>
              )}
            </div>

            {/* 右側：作品の説明文 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-3">
                {project.title}
                {project.isComingSoon && (
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    開発中
                  </span>
                )}
              </h3>

              <p className="text-white mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.isComingSoon ? (
                  <span className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-800 text-zinc-500 border border-zinc-700/60 cursor-not-allowed">
                    Coming Soon
                  </span>
                ) : (
                  <>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      suppressHydrationWarning
                      className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 transition-colors"
                    >
                      GitHub
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section >
  );
};

export default Works;