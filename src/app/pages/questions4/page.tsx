'use client'

import React, {useState, useEffect} from "react";
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import { useRouter } from '@/hooks/useLocation';
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


const AudioControl = ({setFading} : { setFading: any}) => {
  const router = useRouter();

  const btnAnimations = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    config: { duration: 400, easing: easeCubicInOut },
  })

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

const StoryComponent = () => {
  const { stage, firstSelected, secondSelected, thirdSelected } = useGlobalContext();
  const [fading, setFading] = useState(false);
  const actor = [firstSelected, secondSelected, thirdSelected][stage]

  const textLines= actor?.subtitle??[""]


  return (
      actor && <div className="flex flex-col w-100dvw h-100dvh pt-5">
        <BrandComponent active={stage}/>
        <FadedFragment
          className="flex flex-grow flex-col justify-between items-center pb-50"
          fading={fading}
          onNextPage={() => {}}
        >
          <div></div>
          <div className="flex flex-col gap-10px">
            <div style={titleStyle}>
              △ {actor.title[0]}<br/>{actor.title[1]}
            </div>
            <div className="text-center" style={textStyle}>
              {textLines.map((line: string, index: number) => (
                <animated.div key={index}>
                  {line}
                  <br />
                </animated.div>
              ))}
            </div>
          </div>
          <AudioControl key="pg4" setFading={()=> setFading(true)}/>
        </FadedFragment>
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
};

export default StoryComponent