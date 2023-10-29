import React from 'react';

interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  unoptimized?: boolean;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const Image = ({ src, alt, width, height, objectFit, objectPosition, ...restProps }: ImageProps) => {
  const style: React.CSSProperties = {};

  if (objectFit) {
    style.objectFit = objectFit;
  }

  if (objectPosition) {
    style.objectPosition = objectPosition;
  }

  return <img src={src} alt={alt} width={width} height={height} style={style} {...restProps} />;
};

export default Image;
