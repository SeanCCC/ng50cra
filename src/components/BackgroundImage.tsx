import React, { ReactNode } from 'react';
import Image from "@/components/Image"
;

interface BackgroundImageProps {
  children: ReactNode;
  backgroundImage: string;
  style?: React.CSSProperties;
}
const BackgroundImage = ({ children, backgroundImage, style }: BackgroundImageProps) => {
  // 設置背景圖片的樣式
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  // 這會使圖片填充容器，同時保持它的寬高比
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',  // 使容器的寬度與螢幕的寬度相匹配
    height: 'auto',  // 根據圖片的寬高比自動設置高度
  };

  return children
};


export default BackgroundImage;
