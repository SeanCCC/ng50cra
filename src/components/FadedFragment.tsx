'use client';

import { useSpring, animated } from 'react-spring';
import { easeCubicInOut } from 'd3-ease';

interface IUseFadedFragmentProps {
  children: React.ReactNode;
  onNextPage: () => void;
  fading: boolean;
  style?: any;
  className?: string;
}

const FadedFragment = ({ children, fading, onNextPage, style = {}, className = "" }: IUseFadedFragmentProps) => {
  const fadedAnimation = useSpring({
    from: { opacity: 1 },
    to: { opacity: fading ? 0 : 1 },
    config: { duration: 300, easing: easeCubicInOut },
    onRest: onNextPage
  });

  return <animated.div className={className} style={{ ...fadedAnimation, ...style }}>
    {children}
  </animated.div>
}

export default FadedFragment;