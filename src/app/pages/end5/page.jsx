'use client'

import React, {useState, useEffect} from "react";
import AnimatedButton from "@/components/AnimatedButton"
import FadedFragment  from "@/components/FadedFragment"
import { useRouter } from '@/hooks/useLocation';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import Image from "@/components/Image"

import useAudioPlayer from "@/hooks/useAudioPlayer";
import { useGlobalContext } from "@/app/context/store";

const whiteTextStyle = {
  fontFamily: "Inter",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.03em",
  textAlign: "center"
};


export default function Page() {
  const router = useRouter();
  const [fading, setFading] = useState(false);
	const {setBgPlaying} = useGlobalContext()

  const audio = useAudioPlayer(
		{
		 src: "/audio/李安_MIX.m4a",
		 onFinish: () => setBgPlaying(true)
		}
	 )

  useEffect(() => {
    audio.play()
  }, [])

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500, easing: easeCubicInOut },
  });

  const photoAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500, easing: easeCubicInOut },
  });

  const btnAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400, easing: easeCubicInOut },
    delay: 500
  });

  return (
      <div className="flex pt-5  items-center flex-col h-full pb-40">
        <Image
          loading="eager"
          layout="intrinsic"
          width={30}
          height={0}
          src="/images/logo2.png"
          alt=""
        />
        <FadedFragment
          className="flex flex-col flex-grow justify-between items-center pt-6"
          fading={fading}
          onNextPage={() => router.push("/pages/award")}
        >
          <div>
            <animated.div style={photoAnimation} className="flex flex-col items-center">
              <Image
                className="pb-2"
                loading="eager"
                layout="intrinsic"
                width={100}
                height={0}
                src="/images/photo_李安.png"
                alt=""
              />
              <div className="pb-5">李安</div>
            </animated.div>
            <animated.div style={{...whiteTextStyle, ...textAnimation}} className="flex flex-row w-full items-center px-8 align-middle">
            謝謝你跟我們一起完成了一個故事。<br/>
            金馬獎走過一甲子，<br/>
            記錄下華語電影不同的世代。<br/><br/>
            無論你曾經跟上哪個最好或最壞的電影世代，電影人仍持續為電影奮力一搏。無論電影工作者或是影迷，你我都身在其中。<br/><br/>
            現在，攝影機還在 Rolling ，故事還在繼續，我們攜手向前，迎向下一個甲子。
            </animated.div>
          </div>
          <AnimatedButton text="好" style={{...btnAnimation, width: "50%"}} onClick={() =>{
            setFading(true)
            audio.pause()
            setBgPlaying(false)      
          }}/>
        </FadedFragment>
      </div>
  );
}
