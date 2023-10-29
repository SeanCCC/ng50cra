'use client'

import React, { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import { innerTextStyle } from "@/common/fontStyle"
import { useRouter } from '@/hooks/useLocation';
import Image from "@/components/Image"

import FadedFragment  from "@/components/FadedFragment"
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { opening } from "@common/data"

const useSerialAnimation = () => {
	const textLine1 = useSpring({
		from: { opacity: 0, transform: "translateY(1em)" },
		to: { opacity: 1, transform: "translateY(0)" },
		delay: opening.subtitleTimeline[0],
		config: { duration: opening.subtitleTimeline[0] + 300, easing: easeCubicInOut }
	});

	const textLine2 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: opening.subtitleTimeline[1],
			config: { duration: opening.subtitleTimeline[1] + 300, easing: easeCubicInOut }
	});

	const textLine3 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: opening.subtitleTimeline[2],
			config: { duration: opening.subtitleTimeline[2] + 300, easing: easeCubicInOut }
	});

	const textLine4 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: opening.subtitleTimeline[3],
			config: { duration: opening.subtitleTimeline[3] + 300, easing: easeCubicInOut }
	});

	const textLine5 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: opening.subtitleTimeline[4],
			config: { duration: opening.subtitleTimeline[4] + 300, easing: easeCubicInOut }
	});

	const textLine6 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: opening.subtitleTimeline[5],
			config: { duration: opening.subtitleTimeline[5] + 300, easing: easeCubicInOut }
	});
	return [textLine1, textLine2, textLine3, textLine4, textLine5, textLine6]
}


function StoryComponent() {
  const router = useRouter();
  const [fading, setFading] = useState(false);

	const textAnimations = useSerialAnimation()

  const photoAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500, easing: easeCubicInOut },
  });

  const audio = useAudioPlayer(
		{
		 src: "/audio/賓哥_MIX.m4a",
		 onFinish: () =>{ 
      setFading(true)
     }
		}
	 )

   useEffect(() => {
    console.log("intro4")
    audio.play()
   }, [])

  return (
    <div className="flex flex-col justify-between items-center w-100dvw h-full pb-10 pt-10">
      <Image
        loading="eager"
        layout="intrinsic"
        width={30}
        height={0}
        src="/images/logo2.png"
        alt=""
      />
      <FadedFragment
        onNextPage={() => router.push("/pages/questions")}
        fading={fading}
        className="text-center w-full" style={innerTextStyle}
      >
        <animated.div style={{...photoAnimation, "height": "100px"}} className="w-full flex items-center justify-center relative">
          <Image
            className="z-10 absolute left-0"
            style={{top: "11px"}}
            loading="eager"
            width={0}
            height={78}
            layout="responsive"
            src="/images/wave2.png"
            alt=""
          />  
          <Image
            className="z-20 absolute top-0"
            loading="eager"
            layout="intrinsic"
            width={100}
            height={100}
            src="/images/photo_賓哥.png"
            alt=""
          />
        </animated.div>
        <animated.div style={photoAnimation} className="pt-2 pb-5">李屏賓</animated.div>
        <div >

            {opening.subtitle.map((line, index) => (
              <animated.div key={index} style={textAnimations[index]}>
                {line}
                <br />
              </animated.div>
            ))}
        </div>
      </FadedFragment>
      <div></div>
      
    </div>
  );
}

export default StoryComponent;