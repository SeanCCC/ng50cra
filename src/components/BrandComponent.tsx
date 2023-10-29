'use client'

import React from 'react';
import Image from "@/components/Image"
; // 假设您使用的是 Next.js 的 Image 组件
import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';

interface BrandComponentProps {
    active: number;
    fadeIn?: boolean;
}

const items = ["時空", "角色", "事件"];  // 你可以根据需要替换这里的文字

const BrandComponent: React.FC<BrandComponentProps> = ({ active, fadeIn=false }) => {

    const logoAnimation = useSpring({
      from: { opacity: fadeIn?0:1 },
      to: { opacity: 1 },
      config: { duration: 500, easing: easeCubicInOut } // Ease out easing function
    });

    return (
        <animated.div className="flex items-center justify-center" style={logoAnimation}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className="text-gray-700 font-medium"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '11px',
                      fontWeight: 400,
                      lineHeight: '14px',
                      letterSpacing: '0.02em',
                      writingMode: 'vertical-lr',
                      color: index === active ? '#F92C16' : '#8C0E00'
                    }}
                  >
                    {item}
                  </div>
                  <div className="h-px bg-red-600 mx-2" style={{ backgroundColor: '#F92C16', width: "77px"}}></div>
                </React.Fragment>
            ))}
            <Image src="/images/logo2.png" alt="Brand Logo" width={30} height={0} />
        </animated.div>
    );
}

export default BrandComponent;
