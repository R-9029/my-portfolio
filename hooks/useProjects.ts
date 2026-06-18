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
      link: 'https://example.com/kakeibo',
      github: 'https://github.com/yourusername/kakeibo-app',
      thumbnail: '/images/CommingSoon.jpg',
      isComingSoon: true, 
    },
    {
      id: 3,
      title: '短編ノベルゲーム',
      description: 'インタラクティブなストーリー体験を提供する短編ノベルゲーム。選択肢によって物語が分岐し、プレイヤーの判断が物語の展開に影響を与えます。',
      techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      link: 'https://example.com/novel-game',
      github: 'https://github.com/yourusername/novel-game',
      thumbnail: '/images/CommingSoon.jpg',
      isComingSoon: true,
    },
  ], []);

  return { projectList };
};

export default useProjects;