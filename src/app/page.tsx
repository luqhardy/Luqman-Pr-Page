//"use client";

// import Image from "next/image";
import React, { useState } from "react";
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
//import LiquidGlass from "liquid-glass-react";

export default function Home() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  const content = {
    ja: {
      text1: "ルクマン　ハディ",
      sub: "",
    },
    en: {
      text1: "Luqman Hadi",
      sub:"",
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="font-bold text-3xl text-center mb-2">{content[language].text1}</h1>
      <h2 className="font-bold text-2xl text-center mb-6">{content[language].sub}</h2>
      <div className="flex justify-center gap-4 mb-5 items-center">
        <a
          href="https://linkedin.com/in/luqman-hadi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-900 text-white font-semibold transition"
        >
          <Icon path={mdiLinkedin} size={1} color="white" />
        </a>
        <a
          href="https://github.com/luqhardy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-900 text-white font-semibold transition"
        >
          <Icon path={mdiGithub} size={1} />
        </a>
        <a
          href="mailto:hello@luqmanhadi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-900 text-white font-semibold transition"
        >
          <Icon path={mdiEmail} size={1} />
        </a>
      </div>
      {/* Language Toggle Switch */}
      <div className="flex items-center gap-1 ml-2 mb-8">
        <button
          onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
          className="relative w-16 h-8 bg-gray-200 rounded-full flex items-center px-1 transition-colors duration-300 focus:outline-none border border-gray-400"
          aria-label="Toggle language"
          type="button"
        >
          <span className="absolute left-2 text-xl select-none pointer-events-none">🇯🇵</span>
          <span className="absolute right-2 text-xl select-none pointer-events-none">🇬🇧</span>
          <span
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${language === 'en' ? 'translate-x-8' : ''}`}
            style={{ willChange: 'transform' }}
          />
        </button>
      </div>
      <section className="p-6 max-w-3xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4">
          📜 経歴と資格 <span className="text-lg text-gray-600">My Journey & Experience</span>
        </h1>
        <p className="mb-6">
          私のバックグラウンドは、語学力と技術的・創造的スキルを融合させた多様な経験に基づいています。
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🎓 学歴・資格 <span className="text-base text-gray-600">Education & Certifications</span>
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>文部科学省 国費留学生 (MEXT Scholarship Recipient)</li>
            <li>神戸電子専門学校 - AIシステム開発学科 (2025年〜)（国費留学生）</li>
            <li>JASSO日本語教育センター - 進学課程コース (2025年卒業)（国費留学生）</li>
            <li>関西大学 - JASSO交換留学生プログラム (2023年秋)（国費留学生）</li>
            <li>日本語能力試験 N1 (2023年取得)</li>
            <li>ビジネス日本語テスト J2 (2025年取得)</li>
            <li>TOEIC® Listening & Reading Test　980点</li>
            <li>ITパスポート試験 (2025年6月合格)</li>
            <li>アドビ認定プロフェッショナル (Photoshop 2024)（2025年6月取得）</li>
            <li>情報セキュリティマネジメント（2025年9月受験予定）</li>
            <li>基本情報技術者（2026年1月受験予定）</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            💼 職務経歴 <span className="text-base text-gray-600">Professional Experience</span>
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>株式会社ワオナス - 通訳・グラフィックデザイン担当（リモート）</li>
            <li>RGB Monster Limited (UK) - SNS担当・動画編集（リモート）</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
export const metadata = {
  title: "Luqman Hadi's PR Page",
  description: "Copytight © 2025 Luqman Hadi",
};