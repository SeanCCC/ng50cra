import { useState, useEffect, useRef } from 'react';
import {useAudioContext} from "@/app/context/audioStore";


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
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
  play: (delay?: number) => void;
  pause: () => void;
  replay: () => void;
}

function useAudioPlayer({ src, autoPlay = false, delay = 0, onFinish }: AudioPlayerProps): AudioPlayer {
  
  const {
    audio,
    playing,
    ended,
    firstPlayStarted,
    initialized,
    setPlaying,
    setEnded,
    setFirstPlayStarted,
    setInitialized,
    setAudio
  } = useAudioContext();

  useEffect(() => {
    // 在浏览器端初始化 Audio 对象
    if(audio === null) {
      setAudio(new Audio(src))
    }
  }, [src]);

  useEffect(() => {
    if (autoPlay && initialized) {
      const timerId = setTimeout(() => {
        play(0);
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
  const play = async (delay=0) => {
    if (!playing && audio) {
      try{
        setPlaying(true);
        if(delay > 0) {
          audio.src = "/audio/30-seconds-of-silence.mp3"
          audio.play()
          audio.pause()
          await sleep(delay)
        }
        audio.src = src
        audio.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
        setEnded(false)
      } catch(error) {}
    }
  };

  // 暂停播放函数
  const pause = () => {
    console.log({playing, audio})
    if (playing && audio) {
      audio.pause();
      setPlaying(false);
    }
  };

  const replay = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
      setPlaying(true);
    }
  };


  useEffect(() => {
      if (!audio) return;

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

      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('error', handleError);

      return () => {
        audio?.removeEventListener('ended', handleEnded);
        audio?.removeEventListener('loadeddata', handleLoadedData);
        audio?.removeEventListener('error', handleError);
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

export default useAudioPlayer;
