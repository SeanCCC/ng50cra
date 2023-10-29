'use client'

import React, { useState } from "react";


interface ToggleImageButtonProps {
  defaultImage: string;
  activeImage: string;
  onClick?: () => void;
  width: number;
  height: number;
}

const ToggleImageButton: React.FC<ToggleImageButtonProps> = ({ defaultImage, activeImage, onClick, width, height }) => {
  const [isActive, setIsActive] = useState(false);

  const handleTouchStart = () => {
    setIsActive(true);
  };

  const handleTouchEnd = () => {
    setIsActive(false);
  };

  const imageUrl = isActive ? activeImage : defaultImage;

  return (
    <button 
      onTouchStart={handleTouchStart} 
      onTouchEnd={handleTouchEnd}
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px`, padding: 0, border: 'none', background: 'none' }}
    >
      <img src={imageUrl} alt="Toggle Image" width={width} height={height}  />
    </button>
  );
};
  
export default ToggleImageButton;