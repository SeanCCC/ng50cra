'use client'

// AnimatedButton.tsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from "@/components/Image"
import { easeCubicInOut } from 'd3-ease';

interface AnimatedButtonProps {
  text: string;
  onClick: () => void;
  showArrow?: boolean;
  style?: any;
  fadein?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick, showArrow = false, style, fadein=true }) => {

  const buttonProps = useSpring({
    from: { opacity: fadein? 0:1 },
    to: { opacity: 1 },
    delay: 400,
    config: { duration: 400, easing: easeCubicInOut },
  });

  return (
    <animated.div 
      style={style === undefined? buttonProps : style}
      className={`relative justify-center items-center border-[color:#F92C16] self-center flex w-[156x] h-10 max-w-full flex-row px-10 py-3.5 rounded-[50px] border-2 border-solid active:bg-gray-300`}
      onMouseUp={onClick}
    >
      <p className={`text-red-600 text-center text-base font-medium leading-6 tracking-wider self-center no-select`}> {/* 添加 items-center 以確保文字和圖片垂直居中 */}
        {text}
      </p>
      {showArrow && (
        <div className="flex-shrink-0 ml-2" style={{ width: 8, height: 10 }}> {/* 添加外部容器 */}
          <Image src="/images/buttonArrow.png" width={8} height={10} alt="buttonArrow" layout="intrinsic"/>
        </div>
      )}
    </animated.div>
  );
}

export default AnimatedButton;
