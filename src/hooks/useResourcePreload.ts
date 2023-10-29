import { useState, useEffect } from 'react';
import pLimit from 'p-limit';

type ResourceType = 'image' | 'audio' | 'video';

// 根据URL扩展名确定资源类型
const determineType = (url: string): ResourceType => {
  if (url.endsWith('.m4a')) return 'audio';
  if (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.svg')) return 'image';
  if (url.endsWith('.mp4')) return 'video'; // 新增对MP4的支持
  throw new Error(`Unsupported resource type for URL: ${url}`);
}

// 预加载资源的函数
const preloadResourceAsync = (url: string): Promise<string> => {
  const type = determineType(url);

  return new Promise((resolve, reject) => {
    if (type === 'image') {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = (errorEvent) => resolve(url);
      img.src = url;
    } else if (type === 'audio') {
      const audio = new Audio();
      audio.oncanplaythrough = () => resolve(url);
      audio.onerror = (errorEvent) => resolve(url);
      audio.src = url;
    } else if (type === 'video') { // 新增对视频的处理逻辑
      const video = document.createElement('video');
      video.oncanplaythrough = () => resolve(url);
      video.onerror = (errorEvent) => resolve(url);
      video.src = url;
    } else {
      reject(new Error(`Unsupported resource type: ${type}`));
    }
  });
}


const useResourcePreload = (urls: string[], concurrentLimit: number = 3): number => {
  const [progress, setProgress] = useState(0);
  const [forceout, setForceout] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setForceout(true)
    }, 15*1000)
  }, []);

  useEffect(() => {
    const limit = pLimit(concurrentLimit);

    const loadResources = async () => {
      try {
        await Promise.all(urls.map((url) => 
          limit(async () => {
            await preloadResourceAsync(url);
            setProgress((prevProgress) => {
              return prevProgress+1; // 保证进度值为整数
            });
          })
        ));
      } catch (error) {
        console.error(`Error preloading resources:`, error);
      }
    }

    loadResources();
  }, [urls, concurrentLimit]);
  if(forceout) {
    return 100
  }
  return Math.ceil((progress*100)/urls.length);
}

export default useResourcePreload;
