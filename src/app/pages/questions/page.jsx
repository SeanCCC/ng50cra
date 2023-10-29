'use client'

import React, { useEffect, useState } from "react";
import BrandComponent from "@/components/BrandComponent";
import { useRouter } from '@/hooks/useLocation';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import { innerTextStyle } from "@/common/fontStyle"
import { useGlobalContext } from "@/app/context/store"
import FadedFragment  from "@/components/FadedFragment"
import {useGetActor} from "./useGetActor"
import useAudioPlayer from "@/hooks/useAudioPlayer"
import Image from "@/components/Image"


const AvatarImg = ({src}) => {
  const selectAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500, easing: easeCubicInOut } // Ease out easing function
  }); 
  
  return <animated.img
    style={selectAnimation}
    loading="eager"
    layout="fixed"
    className="mb-2"
    width={100}
    height={100}
    src={src}
    alt=""
  />
}

const AvatarBtn = ({actor}) => {
  const { firstSelected, setFirstSelected, stage, secondSelected, setSecondSelected, thirdSelected, setThirdSelected } = useGlobalContext();

  const setSelcted = [setFirstSelected, setSecondSelected, setThirdSelected][stage]

  const selected = [firstSelected, secondSelected, thirdSelected][stage]

  const active = selected?.name === actor?.name
  return (
    <div className="text-center">
      <div className="h-100px" onClick={() => setSelcted(actor)}>
        {
          active? <AvatarImg src={`/images/photo_${actor.name}_txt.png`}/>:<AvatarImg src={`/images/photo_${actor.name}.png`}/>
        }
      </div>
      <div className="mt-[7px]">{actor.name}</div>
    </div>
  )
}

const ActiveBtn = ({actor, setFading}) => {
  const audio = useAudioPlayer(
		{
		 src: `/audio/${actor.name}_MIX.m4a`,
		 onFinish: () =>{ 
      setFading(true)
     }
		}
	 )

  return <Image
    onClick={() => {
      setFading(true)
      audio.play(500)
    }}
    width={76}
    height={76}
    alt="earphone"
    loading="eager"
    src="/images/btn-action.png"
    className="object-cover object-left shrink-0 active:bg-gray-300 rounded-[50px]"
  />
}

export default function Question1() {
  const { firstSelected, stage, secondSelected, thirdSelected } = useGlobalContext();
  const router = useRouter();
  const [fading, setFading] = useState(false);
  const [ready, setReady] = useState(false);
  const actors = useGetActor()


  useEffect(() => {
    if(stage === 2 && thirdSelected!==null) setReady(true)
    if(stage === 1 && secondSelected!==null) setReady(true)
    if(stage === 0 && firstSelected!==null) setReady(true)
  }, [firstSelected,secondSelected, thirdSelected, stage])


  const lineAnimation = useSpring({
    from: { width: 0 },
    to: { width: 303 },
    config: { duration: 400, easing: easeCubicInOut } // Ease out easing function
  });

  const title1Animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500, easing: easeCubicInOut } // Ease out easing function
  });  
  const title2Animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
    config: { duration: 500, easing: easeCubicInOut } // Ease out easing function
  });

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 400, easing: easeCubicInOut } // Ease out easing function
  });

  const avatarAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    config: { duration: 500, easing: easeCubicInOut } // Ease out easing function
  });

  const btnAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400, easing: easeCubicInOut } // Ease out easing function
  });

  const qText = [
    <>選擇你的引路人吧！<br/>他將帶你穿越至一個特別的時代 ...</>,
    <>在這個時空下，你想邀請誰，<br/>成為你電影裡的主角？</>,
    <>第一個關鍵劇情即將來臨，<br/>你想跟誰一起定調這個故事？</>
  ]

  const actor = [firstSelected, secondSelected, thirdSelected][stage]
  console.log({actor})

  if(actors === null) return null

  return (
      <div className="flex justify-center pt-5 items-center flex-col h-full">
        <BrandComponent active={stage} fadeIn={stage===0}/>
        <FadedFragment
          fading={fading}
          className="flex pt-[50px] pb-[30px] justify-between items-center flex-col h-full"
          onNextPage={() => router.push('/pages/questions2')}
        >
          <div className="flex pb-[10px] justify-center  flex-col  items-start w-303px">
            <animated.div className="h-px bg-red-600" style={{ ...lineAnimation, backgroundColor: '#F92C16'}}/>
            <animated.img 
                style={title1Animation}
                alt="earphone"
                loading="eager"
                srcSet={`/images/q${stage}-title1.png`}
                className="object-cover object-left h-6 shrink-0"
              />
            <animated.div className="h-px bg-red-600" style={{ ...lineAnimation, backgroundColor: '#F92C16'}}/>
            <animated.img 
              style={title2Animation}
              alt="earphone"
              loading="eager"
              srcSet={`/images/q${stage}-title2.png`}
              className="object-cover object-left h-6 shrink-0"
            />
            <animated.div className="h-px bg-red-600" style={{ ...lineAnimation, backgroundColor: '#F92C16'}}/>
            <div className="mt-[11px]" style={innerTextStyle}>
              <animated.div  className="text-left" style={textAnimation}>
                {qText[stage]}
              </animated.div>
            </div>
          </div>
          <animated.div className="grid grid-cols-2 gap-x-[38px] gap-y-[13px] mb-40" style={avatarAnimation}>
              {actors.map(actor => <AvatarBtn actor={actor} key={actor.name}/> )}
          </animated.div>
          {actor === null ? <animated.img 
            onClick={() => {
              if(ready ) {
                setFading(true)
              }
            }}
            style={btnAnimation}
            width={76}
            height={76}
            alt="earphone"
            loading="eager"
            srcSet="/images/btn-action.png"
            className="object-cover object-left shrink-0 active:bg-gray-300 rounded-[50px]"
          /> : <ActiveBtn actor={actor} setFading={setFading} />}
        </FadedFragment>
      </div>
  );
}
