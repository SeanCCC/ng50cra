'use client'

import { useGlobalContext } from '@/app/context/store';
import { useState, useEffect, useRef } from 'react';

interface AudioPlayerProps {
  src: string;
  autoPlay?: boolean;
  delay?: number; // 延迟自动播放的时间，单位为毫秒
  onFinish?: () => void;
}

interface AudioPlayer {
  playing: boolean;
  initialized: boolean;
  firstPlayStarted: boolean;
  ended: boolean;
  play: () => void;
  pause: () => void;
  replay: () => void;
}

function useAudioPlayer({ src, autoPlay = false, delay = 0, onFinish }: AudioPlayerProps): AudioPlayer {
  const [playing, setPlaying] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);
  const [firstPlayStarted, setFirstPlayStarted] = useState<boolean>(false);  // 新的初始化状态
  const [initialized, setInitialized] = useState<boolean>(false);  // 新的初始化状态
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setBgAudio } = useGlobalContext()

  useEffect(() => {
    // 在浏览器端初始化 Audio 对象
    audioRef.current = new Audio(src);
    setBgAudio(audioRef.current)

    return () => {
      // 清除 Audio 对象
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (autoPlay && initialized) {
      const timerId = setTimeout(() => {
        play();
        if(!firstPlayStarted) {
          setFirstPlayStarted(true);
        }
      }, delay);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [autoPlay, delay, initialized]);

  // 开始播放函数
  const play = () => {
    if (!playing && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
      setEnded(false)
      setPlaying(true);
    }
  };

  // 暂停播放函数
  const pause = () => {
    if (playing && audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
      setPlaying(true);
    }
  };

  useEffect(() => {
      if (!audioRef.current) return;

      const handleEnded = () => {
        setPlaying(false);
        setEnded(true)
        onFinish && onFinish();
      };

      const handleLoadedData = () => {
        setInitialized(true);
      };

      const handleError = () => {
        console.error('Error loading the audio');
        // 您可以在此执行其他错误处理逻辑
      };

      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('loadeddata', handleLoadedData);
      audioRef.current.addEventListener('error', handleError);

      return () => {
        audioRef.current?.removeEventListener('ended', handleEnded);
        audioRef.current?.removeEventListener('loadeddata', handleLoadedData);
        audioRef.current?.removeEventListener('error', handleError);
      };
  }, []);

  return {
    playing,
    play,
    pause,
    replay,
    ended,
    initialized,
    firstPlayStarted
  };
}


export default function BackgroundMusic({ children }: any) {
  const [needReplay, setNeedReplay] = useState(false);
  const audio = useAudioPlayer(
   {
    src: "/audio/bg.m4a",
    delay: 0,
    onFinish: () => setNeedReplay(true)
   }
  )
  useEffect(() => {
    if(needReplay) {
      audio.replay();
      setNeedReplay(false);
    }
  }, [needReplay])
  return children
}
