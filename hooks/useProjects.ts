import { useMemo } from 'react';

// 作品データの型定義
interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github: string;
  thumbnail: string;
  images?: string[];
  isComingSoon?: boolean;
}

const useProjects = () => {
  const projectList: Project[] = useMemo(() => [
    {
      id: 1,
      title: 'Xboxコントローラ残量通知アプリ',
      description: 'Windows環境でXboxコントローラのバッテリー残量をタスクトレイに常駐して監視・通知するデスクトップアプリ。OS特有のキャッシュ挙動による生存判定バグを、複数のPnPデバイスプロパティキーを組み合わせることで解決しました。',
      techStack: ['React', 'TypeScript', 'Rust (Tauri)', 'PowerShell', 'CSS'],
      link: 'https://github.com/R-9029/Xbox-Battery-Monitor', 
      github: 'https://github.com/R-9029/Xbox-Battery-Monitor',
      thumbnail: '/images/xbox-battery-monitor/main.png',
      isComingSoon: false,
    },
    {
      id: 2,
      title: '家計簿アプリ',
      description: '日々の収支を直感的に記録・管理できるWebアプリケーション。localStorageを活用したデータ永続化や、月ごとの比較ページなどを実装し、実用性にこだわりました。',
      techStack: ['React', 'TypeScript', 'CSS Modules'],
      link: 'https://kakeibo-app-nine-theta.vercel.app',
      github: 'https://github.com/R-9029/kakeibo-app',
      thumbnail: '/images/kakeibo-app/home.png',
      isComingSoon: false, 
    },
    {
      id: 3,
      title: '短編ノベル「忘れられない、雨の夜」',
      description: '自作の短編ビジュアルノベルと、その作品紹介LPを制作しました。LPでは作品の世界観を意識したデザインに加え、ストーリー・キャラクター・ゲームシステムを紹介し、本編をプレイできる導線まで実装しています。',
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      link: 'https://short-visual-novel-lp.vercel.app/',
      github: 'https://github.com/R-9029/short-visual-novel-lp',
      thumbnail: '/images/visual-novel/novel-lp.png',
      isComingSoon: false,
    },
  ], []);

  return { projectList };
};

export default useProjects;