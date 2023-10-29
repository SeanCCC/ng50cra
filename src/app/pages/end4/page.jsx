'use client'

import React, {useState} from "react";
import AnimatedButton from "@/components/AnimatedButton"
import FadedFragment  from "@/components/FadedFragment"
import { useRouter } from '@/hooks/useLocation';
import { useSpring } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import Image from "@/components/Image"



const style = {
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.04em',
  textAlign: 'justify',  // 注意：CSS 中的 "justified" 应为 "justify"
  marginRight: '32px',
  marginLeft: '32px',
  marginTop: '24px',
  marginBottom: '32px',
};


export default function End2() {
  const router = useRouter();
  const [fading, setFading] = useState(false);

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400, easing: easeCubicInOut },
  });


  return (
    <div className="flex pt-5 items-center flex-col h-full pb-40">
      <Image
        loading="eager"
        layout="intrinsic"
        width={30}
        height={0}
        src="/images/logo2.png"
        alt=""
      />
      <FadedFragment
        className="flex flex-col justify-center flex-grow mt-[-68px]"  // 修改了這裡
        fading={fading}
        onNextPage={() => router.push("/pages/end5")}
      >
        <div style={style}>
          故事完成了，你正靜候佳音。<br/>消息出來前<br/>導演李安捎來一段訊息
        </div>
        <AnimatedButton text="他說..." style={textAnimation} onClick={() => setFading(true)}/>
      </FadedFragment>
    </div>
  );
}
