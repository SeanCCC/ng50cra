import React, { ReactNode } from 'react';

interface BackgroundVideoProps {
  children: ReactNode;
  backgroundVideo: string;
  style?: React.CSSProperties;
}

const BackgroundVideo = ({ children, backgroundVideo, style }: BackgroundVideoProps) => {
  return (
    <div className="relative w-100dvw h-100dvh" style={style}>
      {/* 基礎背景影片層 */}
      <div className="absolute w-full h-full">
        <video playsInline autoPlay muted loop className="w-full h-full object-cover">
          <source src={backgroundVideo+"#t=0.1"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 其他內容 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default BackgroundVideo;
