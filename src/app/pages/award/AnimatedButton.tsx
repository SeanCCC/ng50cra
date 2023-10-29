'use client'

// AnimatedButton.tsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from "@/components/Image"

import { easeCubicInOut } from 'd3-ease';

interface AnimatedButtonProps {
  text: string;
  onClick: () => void;
}

const style = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '26px',
  letterSpacing: '1px',
  // textAlign: 'center'
};

const AnimatedButton = ({ text, onClick }: AnimatedButtonProps) => {

  const buttonAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 400,
    config: { duration: 400, easing: easeCubicInOut },
  });

  return (
    <animated.div 
      style={{...buttonAnimation, ...style}}
      className={`relative justify-center items-center border-[color:white] bg-white self-center flex w-[156x] h-10 max-w-full flex-row px-10 py-3.5 rounded-[50px] border-2 border-solid active:bg-gray-300}`}
      onMouseUp={onClick}
    >
      <p  className={`text-red-600 text-center text-base font-medium leading-6 tracking-wider self-center  no-select`}>
        {text}
      </p>
      <Image src="/images/icon-mail.png" className="ml-10px" width={18} height={14} alt="icon-mail" layout="fixed"/>
    </animated.div>
  );
}

export default AnimatedButton;