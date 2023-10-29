'use client'

import React, {useState} from "react";
import Image from "@/components/Image"

import AnimatedButton from "@/components/AnimatedButton"
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';
import { innerTextStyle } from "@/common/fontStyle"
import { useRouter } from '@/hooks/useLocation';
import FadedFragment  from "@/components/FadedFragment"
import useAudioPlayer from "@/hooks/useAudioPlayer";

const textLines = [
  "是構成電影的三大要素",
	"",
  "寫下故事之前",
  "讓我們邀請金馬 60 的主席：",
  "資深攝影師李屏賓",
  "為你的電影揭開序幕",
];

function StoryComponent() {
  const audio = useAudioPlayer(
		{
		 src: "/audio/賓哥_MIX.m4a",
		 onFinish: () =>{ 
      setFading(true)
     }
		}
	 )
	
  const [fading, setFading] = useState(false);
  const router = useRouter();
	const logoTitleAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500, easing: easeCubicInOut },
  });

	const textAnimations = textLines.map((_, index) => useSpring({
    from: { opacity: 0, transform: "translateY(1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400 * index + 400, // 淡入间隔 0.4 秒
    config: { duration: 400, easing: easeCubicInOut }
  }));

	const btnAnimations = useSpring({
    from: { opacity: 0, transform: "translateY(1em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 2800, // 淡入间隔 0.4 秒
    config: { duration: 400, easing: easeCubicInOut }
  });


  return (
		<div  className="flex flex-col justify-between items-center w-100dvw h-100dvh pb-10 pt-10">
			<animated.img
				style={logoTitleAnimation}
				loading="eager"
				layout="intrinsic"
				width={30}
				height={0}
				src="/images/logo2.png"
				alt=""
			/>
			<FadedFragment
				fading={fading}
				onNextPage={() => router.push('/pages/intro4')}
				className="flex-1 flex flex-col justify-between items-center w-100dvw pb-10 pt-10"
			>
				<div></div>
				<div>
					<animated.div className="flex flex-row gap-8 pb-2.5" style={logoTitleAnimation}>
						<Image
							loading="eager"
							layout="intrinsic"
							width={44}
							height={0}
							src="/images/intro3-title1.png"
							alt=""
						/>
						<Image
							loading="eager"
							layout="intrinsic"
							width={44}
							height={0}
							src="/images/intro3-title2.png"
							alt=""
						/>
						<Image
							loading="eager"
							layout="intrinsic"
							width={44}
							height={0}
							src="/images/intro3-title3.png"
							alt=""
						/>
					</animated.div>
					<div className="text-center" style={innerTextStyle}>
						{textLines.map((line, index) => (
							<animated.div key={index} style={textAnimations[index]}>
								{line}
								<br />
							</animated.div>
						))}
					</div>
				</div>
				<AnimatedButton text="掌聲歡迎賓哥" style={btnAnimations} onClick={() => {
					audio.play(900)
					setFading(true)
				}}/>
			</FadedFragment>
		</div>
  );
}

export default StoryComponent;