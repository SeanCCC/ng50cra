'use client'

import { createContext, useContext,useState } from 'react';

interface AudioContextState {
  audio: HTMLAudioElement | null;
  playing: boolean;
  ended: boolean;
  firstPlayStarted: boolean;
  initialized: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setFirstPlayStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialized: React.Dispatch<React.SetStateAction<boolean>>;
  setAudio: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
  onFinish: () => void;
  setOnFinish: React.Dispatch<React.SetStateAction<() => void>>;
}

const AudioContext = createContext<AudioContextState | undefined>(undefined);

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioContext must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }: any) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);
  const [firstPlayStarted, setFirstPlayStarted] = useState<boolean>(false);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [onFinish, setOnFinish] = useState<() => void>(() => {});

  return (
    <AudioContext.Provider
      value={{
        audio,
        playing,
        ended,
        firstPlayStarted,
        initialized,
        setPlaying,
        setEnded,
        setFirstPlayStarted,
        setInitialized,
        setAudio,
        onFinish,
        setOnFinish,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
