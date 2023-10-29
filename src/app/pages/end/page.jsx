'use client'

import React, {useState} from "react";
import AnimatedButton from "@/components/AnimatedButton";
import { useRouter } from '@/hooks/useLocation';
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import { useGlobalContext } from "@/app/context/store"
import FadedFragment  from "@/components/FadedFragment"

const randomList = [
  "致電影",
  "未命名的故事",
  "狂想",
  "故事 01-1",
  "我所看見的世界",
  "在當下",
  "故事之城",
  "親愛的我們",
  "命運與偶然",
  "消失的那一天",
  "沒說出口的事",
  "心得報告",
  "未完待續",
  "每一天",
  "無眠",
  "關於我曾說的那個故事",
  "時時刻刻"
]

const getRandomTitle = () => {
  const idx = Math.floor(Math.random() * randomList.length);
  return randomList[idx];
}


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

const inputStyle = {
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.03em',
  textAlign: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'inherit'
};

const TextInput = ({ value, onChange }) => {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="px-8 w-full">
        <div style={promptTitleStyle} className="mb-2">
          電影有了雛形，你在角落寫上故事名稱：
        </div>
        <input
          className="w-full"
          placeholder="點擊輸入文字，10個字以內"
          type="text"
          value={value}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <div className="h-px bg-red-600" style={{backgroundColor: '#FFFFFF', width: '100%'}}/>
    </div>
  );
}

export default function End1() {
  const router = useRouter();
  const { name, setName, firstSelected, secondSelected, thirdSelected } = useGlobalContext();
  const [fading, setFading] = useState(false);

  const logoAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500, easing: easeCubicInOut },
  });

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400, easing: easeCubicInOut },
  });


  return (
      <div className="flex py-5 items-center flex-col h-full pb-40">
        <animated.img
          style={logoAnimation}
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
          onNextPage={() => router.push("/pages/end2")}
        >
          <animated.div style={{...style, ...logoAnimation}}>
            {firstSelected?.subtitle?.join("")}
            <br/><br/>
            {secondSelected?.subtitle?.join("")}
            <br/><br/>
            {thirdSelected?.subtitle?.join("")}
          </animated.div>
          <animated.div style={textAnimation} className="flex flex-col items-center gap-8">
            <TextInput
              value={name}
              onChange={setName}
            />
            <div className="w-180px">
              <AnimatedButton text="找找靈感" onClick={() => {
                setName(getRandomTitle())
              }}/>
              <div className="mb-5"></div>
              <AnimatedButton text="確定" onClick={() => {
                setFading(true);
              }}/>
            </div>
          </animated.div>
        </FadedFragment>
      </div>
  );
}
