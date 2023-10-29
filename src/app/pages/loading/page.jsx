'use client'

import Lottie from 'lottie-react';
import React, { useState, useEffect } from 'react';
import {LoadingLottie}  from "@/assets/lottie"
import { useRouter } from '@/hooks/useLocation';
import useResourcePreload from "@/hooks/useResourcePreload"
import FadedFragment  from "@/components/FadedFragment"
import preLoadList from "@/common/preload.json"

export default function Loading() {
  const progress = useResourcePreload(preLoadList, 100)
  const router = useRouter();
  const [fading, setFading] = useState(false);


  useEffect(() => {
    if (progress >= 100) {
      setFading(true)
    }
  }, [progress]);

  return (
    <div className="flex h-100dvh flex-col items-center justify-center bg-black">
      <FadedFragment
        onNextPage={() => router.push('/pages/intro1')}
        fading={fading}
      >
        <Lottie
          animationData={LoadingLottie}
          style={{ width: '120px', height: 'auto' }}
          loop
          autoPlay
        />
        <div className="text-white text-center text-sm self-center text-[13px] font-normal leading-[16px]">{progress}%</div>
      </FadedFragment>
    </div>
  )
}
