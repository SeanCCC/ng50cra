'use client'

import React, {useState} from "react";
import AnimatedButton from "@/components/AnimatedButton"
import FadedFragment  from "@/components/FadedFragment"
import { useRouter } from '@/hooks/useLocation';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import Image from "@/components/Image"

import { useGlobalContext } from "@/app/context/store"


const style = {
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.04em',
  textAlign: 'justify',  // 注意：CSS 中的 "justified" 应为 "justify"
  marginRight: '32px',
  marginLeft: '32px',
  flexGrow: '1',
  marginTop: '24px'
};

const promptTitleStyle = {
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.03em',
  textAlign: 'center',
  color: '#F92C16'
};

const promptStyle = {
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '26px',
  letterSpacing: '0.02em',
  textAlign: 'right'
};


const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}.${month}.${day}`;
}


export default function End2() {
  const router = useRouter();
  const { name, firstSelected, secondSelected, thirdSelected } = useGlobalContext();
  const [fading, setFading] = useState(false);

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400, easing: easeCubicInOut },
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
          className="flex flex-col flex-grow"
          fading={fading}
          onNextPage={() => router.push("/pages/end3")}
        >
          <div style={style} className="flex-grow">
            {firstSelected?.subtitle?.join("")}
            <br/><br/>
            {secondSelected?.subtitle?.join("")}
            <br/><br/>
            {thirdSelected?.subtitle?.join("")}
          </div>
          <animated.div style={{...promptTitleStyle, ...textAnimation}} className="flex flex-row w-full items-center px-8 align-middle pb-40">
            <div className="flex-grow h-px bg-red-600 self-center" style={{backgroundColor: '#FF0000', alignSelf: 'baseline', marginTop: '12px'}} />
            <div className="text-right ml-4" style={promptStyle}>
                《{name}》初稿
                <br/>
                <div style={{"fontStyle": "italic"}}>{getCurrentDate()}</div>
            </div>
          </animated.div>
          <AnimatedButton text="闔上腳本" style={textAnimation} onClick={() => setFading(true)}/>
        </FadedFragment>
      </div>
  );
}
