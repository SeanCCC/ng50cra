
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";
// import * as liff from '@/app/liff';
// import { authWithLine } from "@/common/firebaseAuth";
import { useUpsertData } from "@/hooks/useUpsertData";

interface IActor {
    name: string;
    title: string[];
    subtitle: string[];
    subtitleTimeline: number[];
}
interface ContextProps {
    firstSelected: null | IActor
    secondSelected: null | IActor
    thirdSelected: null | IActor
    setFirstSelected: Dispatch<SetStateAction<null | IActor>>
    setSecondSelected: Dispatch<SetStateAction<null | IActor>>
    setThirdSelected: Dispatch<SetStateAction<null | IActor>>
    stage: number
    setStage: Dispatch<SetStateAction<number>>
    name: string
    setName: Dispatch<SetStateAction<string>>
    topic: string
    setTopic: Dispatch<SetStateAction<string>>
    bgPlaying: boolean
    setBgPlaying: Dispatch<SetStateAction<boolean>>
    award: any
    setAward: Dispatch<SetStateAction<any>>,
    userId: string | null,
    username: string,
    shareImage1: string,
    setShareImage1: Dispatch<SetStateAction<string>>,
    shareImage2: string,
    setShareImage2: Dispatch<SetStateAction<string>>,
    bgAudio: HTMLAudioElement | null
    setBgAudio: Dispatch<SetStateAction<HTMLAudioElement | null>>
}

const GlobalContext = createContext<ContextProps>({
    firstSelected: null,
    secondSelected: null,
    thirdSelected: null,
    setFirstSelected: () => { },
    setSecondSelected: () => { },
    setThirdSelected: () => { },
    setStage: () => { },
    stage: 0,
    name: "",
    setName: () => { },
    topic: "",
    setTopic: () => { },
    bgPlaying: false,
    setBgPlaying: () => { },
    award: null,
    setAward: () => { },
    userId: null,
    username: '',
    shareImage1: '',
    setShareImage1: () => { },
    shareImage2: '',
    setShareImage2: () => { },
    bgAudio: null,
    setBgAudio: () => { },
})

// @ts-ignore
export const GlobalContextProvider = ({ children }) => {
    const [firstSelected, setFirstSelected] = useState<IActor | null>(null);
    const [secondSelected, setSecondSelected] = useState<IActor | null>(null);
    const [thirdSelected, setThirdSelected] = useState<IActor | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [shareImage1, setShareImage1] = useState<string>('');
    const [shareImage2, setShareImage2] = useState<string>('');
    const [username, setUserName] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [stage, setStage] = useState<number>(0);
    const [topic, setTopic] = useState<string>("");
    const [bgPlaying, setBgPlaying] = useState<boolean>(false);
    const [award, setAward] = useState<any>(null);
    const [bgAudio, setBgAudio] = useState<HTMLAudioElement | null>(null);
    const [fading, setFading] = useState<boolean>(false);

    // const { upsertUser } = useUpsertData()
    // console.log(userId, username)

    // useEffect(() => {
    //     async function initSystem() {
    //         await liff.init();
    //         const [idToken, profile] = await Promise.all([liff.getIDToken(), liff.getProfile()]);
    //         if (!idToken) throw new Error('ID token not found');
    //         await authWithLine(idToken);
    //         setUserId(profile.userId)
    //         setUserName(profile.displayName)
    //         await upsertUser(profile.userId, profile.displayName)
    //     }

    //     try {
    //         initSystem();
    //     } catch (error) {
    //         console.error(error);
    //     }

    //     window.oncontextmenu = function (event) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         return false;
    //     };

    //     // ref: https://tools.wingzero.tw/article/sn/1463
    //     const windowHeight = () => {
    //         const doc = document.documentElement
    //         doc.style.setProperty('--window-height', `${window.innerHeight}px`)
    //     }
    //     windowHeight()
    //     window.addEventListener('resize', windowHeight)

    //     return () => {
    //         window.removeEventListener('resize', windowHeight)
    //     }
    // }, [])
    return (
        <GlobalContext.Provider
            value={{
                firstSelected,
                secondSelected,
                thirdSelected,
                setFirstSelected,
                setSecondSelected,
                setThirdSelected,
                stage,
                setStage,
                name,
                setName,
                topic,
                setTopic,
                bgPlaying,
                setBgPlaying,
                award,
                setAward,
                userId,
                username,
                shareImage1,
                setShareImage1,
                shareImage2,
                setShareImage2,
                bgAudio,
                setBgAudio,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);