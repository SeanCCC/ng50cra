'use client'

import React, {useState} from "react";
import AnimatedButton from "@/components/AnimatedButton"
import FadedFragment  from "@/components/FadedFragment"
import { useRouter } from '@/hooks/useLocation';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import Image from "@/components/Image"

import { useGlobalContext } from "@/app/context/store"
import {getAwardOption} from "@common/data"
import {useUpsertData} from "@/hooks/useUpsertData"

const whiteTextStyle = {
  fontFamily: "Inter",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.03em",
  textAlign: "center"
};


const optionStyle = {
  fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "34px",
  letterSpacing: "0.2em",
  textAlign: "center"
};

const OptionLeft = ({color="#fff"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={5}
    fill="none"
  >
    <path fill={color} d="M0 5V0l7 2.609L0 5Z" />
  </svg>
)

const OptionRight = ({color="#fff"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={5}
    fill="none"
  >
    <path fill={color} d="M7 0v5L0 2.391 7 0Z" />
  </svg>
)

const FadeInText = ({ text, delay = 0, leftImageSrc, rightImageSrc, award: _award }) => {
  const items = [leftImageSrc, ...text.split(''), rightImageSrc];
  const { award, setAward } = useGlobalContext()

  const selected = (award?.actor??"") === _award.actor
  
  return (
    <div
      onClick={() => setAward(_award)}
      style={{ display: 'flex', alignItems: 'center', color: selected ? 'White' : '#F92C16', ...optionStyle }}
    >
      {items.map((item, index) => {
        const style = useSpring({
          config: { duration: 600 },
          from: { opacity: 0, filter: 'blur(8px)' },
          to: { opacity: 1, filter: 'blur(0px)' },
          delay: delay + index * 60  // 增加一個基於字符位置的小延遲
        });

        if (index === 0) {
          return (
            <animated.div key="leftImage" style={style} className="pr-2">
              <OptionLeft color={selected ? 'White' : '#F92C16'}/>
            </animated.div>
          );
        }
        
        if (index === items.length - 1) {
          return (
            <animated.div key="rightImage" style={style} className="pl-2">
              <OptionRight color={selected ? 'White' : '#F92C16'}/>
            </animated.div>
          );
        }

        return (
          <animated.span key={index} style={style}>
            {item}
          </animated.span>
        );
      })}
    </div>
  );
}

export default function End3() {
  const router = useRouter();
  const { firstSelected, secondSelected, thirdSelected, award } = useGlobalContext();
  const [fading, setFading] = useState(false);
  const { saveAward } = useUpsertData()

  if(firstSelected === null || secondSelected === null || thirdSelected === null) return null
  console.log({firstSelected, secondSelected, thirdSelected, award})

  const firstAward = getAwardOption(firstSelected?.name??"")
  const secondAward = getAwardOption(secondSelected?.name??"")
  const thirdAward = getAwardOption(thirdSelected?.name??"")

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
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
          onNextPage={() => {
            saveAward()
            router.push("/pages/end4")
          }}
        >
          <animated.div style={{...whiteTextStyle, ...textAnimation}} className="flex flex-row w-full items-center px-8 align-middle">
            故事即將完成<br/>
            你準備為這部作品注入最重要的靈魂；<br/>
            這三個議題，你決定專心挖掘 ...<br/>
          </animated.div>
          <div className="flex flex-col items-center gap-40">
            <FadeInText
              award={firstAward}
              leftImageSrc="/images/option-left.svg"
              rightImageSrc="/images/option-right.svg"
              text={firstAward?.optionName??""}
              delay={500}/>
            <FadeInText
              award={secondAward}
              leftImageSrc="/images/option-left.svg"
              rightImageSrc="/images/option-right.svg"
              delay={1100} text={secondAward?.optionName??""}/>
            <FadeInText
              award={thirdAward}
              leftImageSrc="/images/option-left.svg"
              rightImageSrc="/images/option-right.svg"
              delay={1700} text={thirdAward?.optionName??""}/>
          </div>
          <AnimatedButton text="確定" style={btnAnimation} onClick={() => {
            if(award === null) return;
            setFading(true)
          }}/>
        </FadedFragment>
      </div>
  );
}
