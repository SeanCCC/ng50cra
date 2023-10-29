'use client'

import React, {useState, useEffect} from "react";
import Image from "@/components/Image"

import Lottie from 'lottie-react';
import { useSpring } from 'react-spring';
import BackgroundVideo from "@/components/BackgroundVideo"
import AnimatedButton from "@/components/AnimatedButton"
import {Intro2Logo}  from "@/assets/lottie"
import { useRouter } from '@/hooks/useLocation';
import { easeCubicInOut } from 'd3-ease';
import FadedFragment  from "@/components/FadedFragment"
import { useGlobalContext } from '@/app/context/store';

function StoryComponent() {
	const router = useRouter();
	const { setBgPlaying } = useGlobalContext()
  useEffect(() => {
    setBgPlaying(true)
  }, [])
  const [fading, setFading] = useState(false);
	const animation = useSpring({
		from: { opacity: 0 },
		to: async (next) => {
			// 首先执行 appear 动画
			await next({ opacity: 1, delay: 500, config: { duration: 400, easing: easeCubicInOut } });
			// 然后循环执行 blink 动画
			while (1) {
			await next({ opacity: 0, delay: 3000, config: { duration: 500, easing: easeCubicInOut } });
			await next({ opacity: 1, delay: 500, config: { duration: 500, easing: easeCubicInOut } });
			}
		}
	});

  return (
      <BackgroundVideo backgroundVideo="/video/bg-video.mp4">
				<FadedFragment
					onNextPage={() => router.push('/pages/intro3')}
					fading={fading}
					className="flex flex-col justify-center items-center w-100dvw h-full"
				>
					<Lottie
						animationData={Intro2Logo}
						style={{ width: '120px', height: 'auto', marginBottom: "100px" }}
						loop={false}
						autoPlay
					/>
					<AnimatedButton text="共創故事" showArrow onClick={() => setFading(true)} style={animation}/>
					<Image
						loading="eager"
						layout="intrinsic"
						width={48}
						height={0}
						src="/images/logo.png"
						alt=""
						className="mt-50"
					/>
				</FadedFragment>
      </BackgroundVideo>
  );
}

export default StoryComponent;