"use client";

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
      intro: "私のバックグラウンドは、語学力と技術的・創造的スキルを融合させた多様な経験に基づいています。",
      educationTitle: "🎓 学歴・資格",
      educationSubtitle: "Education & Certifications",
      education: [
        "文部科学省 国費留学生 (MEXT Scholarship Recipient)",
        "神戸電子専門学校 - AIシステム開発学科 (2025年〜)（国費留学生）",
        "JASSO日本語教育センター - 進学課程コース (2025年卒業)（国費留学生）",
        "関西大学 - JASSO交換留学生プログラム (2023年秋)（国費留学生）",
        "日本語能力試験 N1 (2023年取得)",
        "ビジネス日本語テスト J2 (2025年取得)",
        "TOEIC® Listening & Reading Test　980点",
        "ITパスポート試験 (2025年6月合格)",
        "アドビ認定プロフェッショナル (Photoshop 2024)（2025年6月取得）",
        "情報セキュリティマネジメント（2025年9月受験予定）",
        "基本情報技術者（2026年1月受験予定）",
      ],
      experienceTitle: "💼 職務経歴",
      experienceSubtitle: "Professional Experience",
      experience: [
        "株式会社ワオナス - 通訳・グラフィックデザイン担当（リモート）wownas.com",
        "使った技術：Microsoft Office, Google Docs, Studio.Design, Framer, Figma, Adobe Creative Cloud (Photoshop, After Effects, Premiere Pro)",
        "RGB Monster Limited (UK) - SNS担当・動画編集（リモート）",
        "使った技術：Adobe Creative Cloud (Photoshop, After Effects, Premiere Pro)",
      ],
      journeyTitle: "📜 経歴と資格",
      journeySubtitle: "My Journey & Experience",
    },
    en: {
      text1: "Luqman Hadi",
      sub: "",
      intro: "My background is based on diverse experiences that combine language skills with technical and creative abilities.",
      educationTitle: "🎓 Education & Certifications",
      educationSubtitle: "Education & Certifications",
      education: [
        "MEXT Scholarship Recipient (Japanese Government)",
        "Kobe Institute of Computing - AI Systems Development (from 2025)",
        "JASSO Japanese Language Education Center - Preparatory Course (Graduated 2025)",
        "Kansai University - JASSO Exchange Program (Fall 2023)",
        "JLPT N1 (2023)",
        "Business Japanese Test J2 (2025)",
        "TOEIC® Listening & Reading Test: 980/990",
        "IT Passport Exam (Passed June 2025)",
        "Adobe Certified Professional (Photoshop 2024, June 2025)",
        "Information Security Management (Scheduled Sep 2025)",
        "Fundamental Information Technology Engineer (Scheduled Jan 2026)",
      ],
      experienceTitle: "💼 Professional Experience",
      experienceSubtitle: "Professional Experience",
      experience: [
        "Wownas Co., Ltd. - Interpreter & Graphic Designer (Remote) wownas.com",
        "Technologies: Microsoft Office, Google Docs, Studio.Design, Framer, Figma, Adobe Creative Cloud (Photoshop, After Effects, Premiere Pro)",
        "RGB Monster Limited (UK) - Social Media & Video Editor (Remote)",
        "Technologies: Adobe Creative Cloud (Photoshop, After Effects, Premiere Pro)",
      ],
      journeyTitle: "📜 Journey & Qualifications",
      journeySubtitle: "My Journey & Experience",
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="font-bold text-3xl text-center mb-2">{content[language].text1}</h1>
      <a
            href="https://luqmanhadi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            Return to luqmanhadi.com
          </a>
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
          {content[language].journeyTitle} <span className="text-lg text-gray-600">{content[language].journeySubtitle}</span>
        </h1>
        <p className="mb-6">
          {content[language].intro}
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {content[language].educationTitle} <span className="text-base text-gray-600">{content[language].educationSubtitle}</span>
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {content[language].education.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            {content[language].experienceTitle} <span className="text-base text-gray-600">{content[language].experienceSubtitle}</span>
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {content[language].experience.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
      <div className="text-xs text-gray-500 mb-10 text-center">
              <p>© 2025 Luqman Hadi</p>
              <p>All rights reserved.</p>
              </div>
    </div>
    
  );
}