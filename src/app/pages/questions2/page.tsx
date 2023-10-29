'use client'

import React, {useEffect, useState} from "react";
import { useSpring, animated } from 'react-spring';
import FadedFragment  from "@/components/FadedFragment"
import { easeCubicInOut } from 'd3-ease';
import { useRouter } from '@/hooks/useLocation';
import BrandComponent from "@/components/BrandComponent";
import useAudioPlayer from "@/hooks/useAudioPlayer"
import { useGlobalContext } from "@/app/context/store"
import Image from "@/components/Image"


const titleStyle = {
  color: 'var(--main_color_red, #F92C16)',
  textAlign: 'center' as const,
  fontFamily: 'Inter',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '160%', 
  letterSpacing: '0.45px'
};

const textStyle = {
  ...titleStyle,
  color: '#FFF',
};

const AudioControl = ({ onFinish, actor }: any) => {

  const audioPlayer = useAudioPlayer({
    src:`/audio/${actor}_MIX.m4a`,
    autoPlay: true,
    onFinish: () => {
      onFinish()
    }
  });

  const isPlaying = audioPlayer.firstPlayStarted && audioPlayer.playing;
  
  return (
    <animated.img
      className="active:bg-gray-300 rounded-[50px] z-10"
      onClick={() => {
        if(isPlaying) audioPlayer.pause()
        else audioPlayer.play(0)
      }}
      width={36}
      height={36}
      src={isPlaying ? "/images/audio-stop.png" : "/images/audio-play.png"}
    />
  );
};

const useSerialAnimation = (subtitleTimeline: number[]) => {
	const textLine0 = useSpring({
		from: { opacity: 0, transform: "translateY(1em)" },
		to: { opacity: 1, transform: "translateY(0)" },
		delay: subtitleTimeline[0],
		config: { duration: 200 * 0 + 300, easing: easeCubicInOut }
	});

	const textLine1 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: subtitleTimeline[1],
			config: { duration: 200 * 1 + 300, easing: easeCubicInOut }
	});

	const textLine2 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: subtitleTimeline[2],
			config: { duration: 200 * 2 + 300, easing: easeCubicInOut }
	});

	const textLine3 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: subtitleTimeline[3],
			config: { duration: 200 * 3 + 300, easing: easeCubicInOut }
	});

	const textLine4 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: subtitleTimeline[4],
			config: { duration: 200 * 4 + 300, easing: easeCubicInOut }
	});

	const textLine5 = useSpring({
			from: { opacity: 0, transform: "translateY(1em)" },
			to: { opacity: 1, transform: "translateY(0)" },
			delay: subtitleTimeline[5],
			config: { duration: 200 * 5 + 300, easing: easeCubicInOut }
	});

  const textLine6 = useSpring({
    from: { opacity: 0, transform: "translateY(1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: subtitleTimeline[6],
    config: { duration: 200 * 6 + 300, easing: easeCubicInOut }
  });

  const textLine7 = useSpring({
    from: { opacity: 0, transform: "translateY(1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: subtitleTimeline[7],
    config: { duration: 200 * 7 + 300, easing: easeCubicInOut }
  });
  const textLine8 = useSpring({
    from: { opacity: 0, transform: "translateY(1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: subtitleTimeline[8],
    config: { duration: 200 * 8 + 300, easing: easeCubicInOut }
  });
  const textLine9 = useSpring({
    from: { opacity: 0, transform: "translateY(1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: subtitleTimeline[9],
    config: { duration: 200 * 9 + 3000, easing: easeCubicInOut }
  });
	return [textLine0, textLine1, textLine2, textLine3, textLine4, textLine5, textLine6, textLine7, textLine8, textLine9]
}


const StoryComponent = () => {
  const router = useRouter();
  const { stage, setBgPlaying, firstSelected, secondSelected, thirdSelected } = useGlobalContext();
  const [fading, setFading] = useState(false);
  const [audioFading, setAudioFading] = useState(false);
  const actor = [firstSelected, secondSelected, thirdSelected][stage]

  useEffect(() => {
    setBgPlaying(false);
  }, [])


  const textLines= actor?.subtitle??[]

  const textAnimations = useSerialAnimation(actor?.subtitleTimeline??[])
  

  const waveAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    config: { duration: 400, easing: easeCubicInOut },
  })
  if(actor === null) return null;


  return (
      actor && <div className="flex flex-col w-100dvw h-full pt-5">
        <BrandComponent active={stage}/>
        <FadedFragment
          className="flex flex-grow flex-col justify-between items-center pb-50"
          fading={fading}
          onNextPage={() => {
            router.push("/pages/questions3")
          }}
        >
          <div></div>
          <div className="flex flex-col gap-10px">
            <div style={titleStyle}>
              △ {actor.title[0]}<br/>{actor.title[1]}
            </div>
            <div className="text-center" style={textStyle}>
              {textLines.map((line: string, index: number) => (
                <animated.div key={index} style={textAnimations[index]}>
                  {line}
                  <br />
                </animated.div>
              ))}
            </div>
          </div>
          <FadedFragment
            fading={audioFading}
            onNextPage={() => {
              router.push("/pages/questions4")
            }}
          >
            <div style={{
              height: "76px",
              display: "flex",
              alignItems: "center"
            }}>
              <AudioControl
                actor={actor.name}
                onFinish={()=>{
                  console.log("AudioControl finished")
                  setBgPlaying(true)
                  if(stage === 0 || stage === 1) {
                    setFading(true)
                    console.log("AudioControl finished2")

                  } else {
                    setAudioFading(true)
                    console.log("AudioControl finishe3d")

                  }
                }} 
              />
            </div>
          </FadedFragment>
        </FadedFragment>
        <animated.div  style={waveAnimation} className="absolute bottom-40 left-0 w-full">
          <Image
            src="/images/wave2.png"
            alt="wave2"
            loading="eager"
            width={0}
            // className="absolute bottom-40 left-0"
            height={78}
            layout="responsive"
          />
        </animated.div>
      </div>
  );
};

export default StoryComponent;
