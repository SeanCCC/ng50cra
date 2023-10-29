'use client'

import React from 'react';
import Image from "@/components/Image"
;

export default function BackgroundAnimation({ children }) {
  return (
    <div className="relative w-full h-full">
      {/* 基礎背景圖層 */}
      <div className="fixed top-0 left-0 w-full h-full">
        <Image src="/images/bg1.png" layout="fill" alt="bg1" />
      </div>

      {/* 動態效果的背景圖層 */}
      <div className="fixed top-0 left-0 w-full h-full opacity-100 animate-fadeInOut">
        <Image src="/images/bg2.png" layout="fill" alt="bg2" />
      </div>

      {/* 其他內容 */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeInOut {
          animation: fadeInOut 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
