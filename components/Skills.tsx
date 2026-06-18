import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaRust 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs 
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const Skills = () => {
  const skillList: Skill[] = [
    { name: 'HTML5', icon: <FaHtml5 />, hoverColor: 'group-hover:text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, hoverColor: 'group-hover:text-blue-500' },
    { name: 'JavaScript', icon: <FaJsSquare />, hoverColor: 'group-hover:text-yellow-500' },
    { name: 'TypeScript', icon: <SiTypescript />, hoverColor: 'group-hover:text-blue-500' },
    { name: 'React', icon: <FaReact />, hoverColor: 'group-hover:text-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, hoverColor: 'group-hover:text-white' },
    { name: 'Rust', icon: <FaRust />, hoverColor: 'group-hover:text-amber-600' },
  ];

  return (
    <section id="skills" className="flex flex-col items-center justify-center min-h-screen px-5 text-center bg-transparent">
      <h2 className="text-4xl font-bold mb-4 tracking-wide text-white">
        Skills
      </h2>
      
      <p className="text-white mb-12 max-w-md">
        これまでに触れてきた、または現在学習・使用している<br />
        技術スタックの一覧です。
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full px-4">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 bg-zinc-900 rounded-2xl shadow-lg border border-zinc-800 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className={`text-5xl mb-4 text-zinc-500 transition-colors duration-300 ${skill.hoverColor}`}>
              {skill.icon}
            </div>
            <span className="font-medium text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;