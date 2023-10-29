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
}
const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick, showArrow, style }) => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      // 首先执行 appear 动画
      await next({ opacity: 1, delay: 500, config: { duration: 400, easing: easeCubicInOut } });
      // 然后循环执行 blink 动画
      while (1) {
        await next({ opacity: 0, delay: 3000, config: { duration: 500, easing: easeCubicInOut } });
        await next({ opacity: 1, delay: 500, config: { duration: 500, easing: easeCubicInOut } });
      }
    }
  });
  
  return (
    <animated.div 
      style={animation}
      className={`relative justify-center items-center border-[color:#F92C16] self-center flex w-[156x] h-10 max-w-full flex-row px-10 py-3.5 rounded-[50px] border-2 border-solid active:bg-gray-300}`}
      onMouseUp={onClick}
    >
      <p className={`text-red-600 text-center text-base font-medium leading-6 tracking-wider self-center  no-select`}>
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