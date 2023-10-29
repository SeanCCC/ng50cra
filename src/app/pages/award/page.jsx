'use client'

import React, {useEffect, useState} from "react";
import AnimatedButton from "./AnimatedButton"
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import Image from "@/components/Image"

import { useGlobalContext } from "@/app/context/store"
import { getAwardNominees } from "@common/data"
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { useUpsertData } from "@/hooks/useUpsertData";
import ShareImage from "./ShareImage";
import ShareImage2 from "./ShareImage2";
import * as liff from "@/app/liff";

const style = {
  fontFamily: 'Inter',
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: '19.5px',
  textAlign: 'center',
};

const titleStyle = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '22.3px',
  letterSpacing: '1px',
  color: '#F92C16'
};

const dateStyle = {
  fontFamily: 'Inter',
  fontSize: '8px',
  fontWeight: 400,
  lineHeight: '12.8px',
  color: '#F92C16'
};

const body_txt1_style = {
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '1px',
  textAlign: 'center'
};

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

const Trophy = () => {
  const { award } = useGlobalContext();

  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 400, easing: easeCubicInOut },
  });
  const trophyAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 700, easing: easeCubicInOut },
  });
  const rotateTrophyAnimation = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 8000 },
    loop: true
  });
  const emergeTrophyAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400 },
  });
  return (
    <div className="relative w-full flex flex-col items-center" style={{ minHeight: "340px" }}>
      <div className="flex flex-col items-center gap-24px relative z-30">
        <animated.img
          style={titleAnimation}
          loading="eager"
          width={210}
          height={120}
          src={`/images/title_${award.award}.png`}
          alt=""
        />
        <animated.img
          style={trophyAnimation}
          loading="eager"
          width={101}
          height={0}
          src="/images/award.png"
          alt=""
        />
      </div>
      <animated.img
        style={{ ...rotateTrophyAnimation, ...emergeTrophyAnimation }}
        className="absolute top-7 z-20"
        loading="eager"
        width={260}
        height={260}
        src="/images/award-circle.png"
        alt=""
      />
    </div>
  )
}


export default function Page() {
  const { username, award, shareImage1, shareImage2, bgAudio } = useGlobalContext();
  const { saveAward } = useUpsertData()
  const [saveImage, setSaveImage] = useState(false)

  useEffect(() => {
    bgAudio && bgAudio.pause()
  }, [])
  
  useEffect(() => {
    saveAward().then(() => liff.closeWindow())
  }, [shareImage1, shareImage2])

  const audio = useAudioPlayer(
    {
      src: "/audio/award.m4a",
      onFinish: () => audio.replay(),
      autoPlay: true
    }
  )
  


  const headerAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400, easing: easeCubicInOut },
  });


  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500, easing: easeCubicInOut },
  });

  if (award === null) return null;

  const nominees = getAwardNominees(award?.award ?? "");

  return (
    <div className="flex pt-5  items-center flex-col h-full pb-40 px-8">
      {saveImage && <ShareImage/>}
      {saveImage && <ShareImage2/>}
      <animated.div style={headerAnimation} className="flex flex-col w-full pb-8">
        <div style={dateStyle}>{getCurrentDate()}</div>
        <div className="flex flex-row items-center justify-center w-full">
          <div style={{ paddingRight: "14px" }} className="w-full">
            <div className="bg-red-600" style={{ backgroundColor: '#F92C16', height: '2px' }} />
            <div style={titleStyle}>恭喜你！</div>
            <div className="bg-red-600" style={{ backgroundColor: '#F92C16', height: '2px' }} />
            <div style={titleStyle}>{username}</div>
            <div className="bg-red-600" style={{ backgroundColor: '#F92C16', height: '2px' }} />
            <div style={titleStyle}>你初試啼聲的作品入圍了</div>
            <div className="bg-red-600" style={{ backgroundColor: '#F92C16', height: '2px' }} />
          </div>
          <Image
            loading="eager"
            layout="intrinsic"
            width={45}
            height={0}
            src="/images/logo2.png"
            alt=""
          />
        </div>
      </animated.div>
      <Trophy />
      <animated.div style={{ ...style, ...textAnimation }} className="pb-4">
        金馬 60 誠摯邀請您<br />
        前往信義香堤大道〈Golden Flow - 金馬 60〉<br />
        與獎盃合影，留下雋永回憶
      </animated.div>
      <AnimatedButton text="將邀請卡寄給我" onClick={() => setSaveImage(true)} />
      <div className="flex flex-col items-center gap-1 mt-5">
        <div style={titleStyle}>
          看更多金馬 60 入圍名單
        </div>
        <Image src="/images/arrow-down.png" width={8} height={10} alt="buttonArrow" layout="intrinsic" />
      </div>
      <div className="flex flex-col items-center gap-1 mt-5">
        <div style={body_txt1_style} className="pb-2">
          和你的電影同樣入圍<br />【{award.award}】的有⋯
        </div>
        <Image src="/images/dot-line.png" width={1} height={230} alt="buttonArrow" layout="intrinsic" />
      </div>
      <div className="flex flex-col items-center">
        <div style={{
          fontFamily: 'Inter',
          fontSize: '20px',
          fontWeight: 700,
          lineHeight: '35px',
          letterSpacing: '0.12em',
          textAlign: 'center'
        }}>{nominees?.award?.zh}入圍</div>
        <div style={{
          marginBottom: "18px",
          fontFamily: 'Inter',
          fontSize: '11px',
          fontWeight: 400,
          lineHeight: '13px',
          letterSpacing: '0em',
          textAlign: 'center'
        }}>{nominees?.award?.en}</div>
      </div>
      <div className="flex flex-col items-center gap-6">
        {
          nominees?.nominees?.map(({ title, subtitle }, idx) => {
            return <div key={idx} className="flex flex-col items-center">
              <div style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.06em',
                textAlign: 'center',
                paddingBottom: "4px"
              }}>{title}</div>
              <div style={{
                fontFamily: 'Inter',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: '#F92C16'
              }}>{subtitle}</div>
            </div>
          })
        }
      </div>
      <div className="flex flex-col items-center pt-6 text-center">
        恭喜以上入圍者<br />
        11 月 25 日，敬請收看<br />
        第 60 屆金馬獎頒獎典禮！
      </div>
      <Image
        className="pt-7 pb-10"
        loading="eager"
        layout="intrinsic"
        width={45}
        height={0}
        src="/images/logo3.png"
        alt=""
      />
    </div>
  );
}
