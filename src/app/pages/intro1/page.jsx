'use client'

import AnimatedButton  from "@/components/AnimatedButton"
import FadedFragment  from "@/components/FadedFragment"
import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from '@/hooks/useLocation';
import { easeCubicInOut } from 'd3-ease';
import { useGlobalContext } from '@/app/context/store';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Intro1() {
  const router = useRouter();
  const [fading, setFading] = useState(false);
  const { bgAudio } = useGlobalContext()

  const earphoneProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 200,
    config: { duration: 400, easing: easeCubicInOut } // Ease out easing function
  });


  return (
        <div className="flex-col self-stretch relative flex  px-5 py-10 justify-between w-100dvw h-100dvh">
          <FadedFragment
            onNextPage={() => router.push('/pages/intro2')}
            fading={fading}
            className="flex flex-col items-center justify-between h-full"
          >
            <div></div>
            <div className="flex-col align-items relative flex  px-5 py-10 justify-content"> 
              <animated.img 
                style={earphoneProps}
                alt="earphone"
                loading="eager"
                srcSet="/images/earphone.png"
                className="aspect-[1.32] object-cover object-center w-[86px] self-center shrink-0"
              />
              <animated.p 
                style={earphoneProps}
                className="relative text-white text-center text-base leading-6 tracking-wide self-center max-w-[334px] mt-3 font-[color:#F92C16]" 
              >
                請戴上耳機 <br /> 獲得最完整的沉浸式體驗 
              </animated.p>
            </div>
            <AnimatedButton text="準備好了！" onClick={async () => {
              bgAudio.play()
              setFading(true)
            }} />
          </FadedFragment>
        </div>
  );
}
