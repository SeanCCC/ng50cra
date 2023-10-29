'use client'

import React, {useState} from "react";
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import { useRouter } from '@/hooks/useLocation';
import AnimatedButton from "@/components/AnimatedButton";
import ToggleImageButton from "@/components/ToggleImageButton";
import { useGlobalContext } from "@/app/context/store"
import BrandComponent from "@/components/BrandComponent"
import FadedFragment  from "@/components/FadedFragment"
import Image from "@/components/Image"


const textStyle = {
  color: '#FFF',
  textAlign: 'center' as const,
  fontFamily: 'Inter',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '160%', 
  letterSpacing: '0.45px'
};

const AudioControl = ({setFading} : { setFading: any}) => {
  const { stage, setStage } = useGlobalContext();  
  const router = useRouter();

  const btnAnimations = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    config: { duration: 400, easing: easeCubicInOut },
  })

  if(stage <2) {
    return (
      <animated.div className="flex gap-5  z-10" style={btnAnimations}>
        <ToggleImageButton
          width={42}
          height={42}
          defaultImage="/images/audio-replay.png"
          activeImage="/images/audio-replay-active.png"
          onClick={() => {
            setFading();
            setTimeout(() => {
              router.push('/pages/questions2')
            }, 300)
          }}
        />
        <AnimatedButton
          onClick={() => {
            setFading();
            setTimeout(() => {
              setStage(stage+1)
              router.push('/pages/questions')
            }, 300)
          }}
          text="故事繼續"
          showArrow
          fadein={false}
        />
      </animated.div>
    )
  } else {
    return (
      <animated.div className="flex gap-5 items-center justify-center  z-10" style={btnAnimations}>
        <ToggleImageButton
          width={42}
          height={42}
          defaultImage="/images/audio-replay.png"
          activeImage="/images/audio-replay-active.png"
          onClick={() => {
            setFading();
            setTimeout(() => {
              router.push('/pages/questions2')
            }, 300)
          }}
        />
        <animated.img 
          onClick={
            () => {
              setFading();
              setTimeout(() => {
                router.push('/pages/end')
              }, 300)
            }
          }
          width={76}
          height={76}
          alt="earphone"
          loading="eager"
          srcSet="/images/btn-cut.png"
          className="object-cover object-left shrink-0 active:bg-gray-300 rounded-[50px]"
        />
      </animated.div>
    )
  }
}

function StoryComponent() {
  const { stage } = useGlobalContext();
  const [fading, setFading] = useState(false);
  let textLines: string[] = [""]
  if(stage === 0) {
    textLines = [".......是誰在那裡？"]
  }
  if(stage === 1) {
    textLines = [".......他們在做什麼？"]
  }
	const animation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    delay: 0, // 淡入间隔 0.4 秒
    config: { duration: 300, easing: easeCubicInOut }
  })

  return (
    <div className="flex flex-col w-100dvw h-full pt-5 ">
      <BrandComponent active={stage}/>
      <FadedFragment
        className="flex flex-col flex-grow justify-between items-center pb-50"
        fading={fading}
        onNextPage={() => {}}
      >
        <div className="flex justify-center item-center h-full" style={textStyle}>
            {textLines.map((line, index) => (
              <animated.div key={index} style={animation} className="flex text-center justify-center items-center">
                {line}
                <br />
              </animated.div>
            ))}
        </div>
        <div style={{
          height: "76px",
          display: "flex",
          alignItems: "center"
        }}>
          <AudioControl key="pg3" setFading={()=> setFading(true)}/>
        </div>
      </FadedFragment >
      <Image
          src="/images/wave2.png"
          alt="wave2"
          className="absolute  bottom-40 left-0"
          loading="eager"
          width={0}
          height={78}
          layout="responsive"
        />
    </div>
  );
}

export default StoryComponent;