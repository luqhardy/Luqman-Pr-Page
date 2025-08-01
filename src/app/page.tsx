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
      sub: "準備中",
    },
    en: {
      text1: "Luqman Hadi",
      sub:"Under Construction",
    }
  };

  return (   
    <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1>
            <span className="font-bold text-3xl">{content[language].text1}</span><br />
            <span className="font-bold text-3xl">{content[language].sub}</span><br />
          </h1>
           <div className="mt-6 flex justify-center gap-4  mb-5 items-center">
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
          {/* Language Toggle Switch */}
          <div className="flex items-center gap-1 ml-2">
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
        </div>
          </div>
        </div>
  );
}
