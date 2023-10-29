import React, { useRef, useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/context/store';
import { uploadBlob } from '@/common/firebaseDB'
import { computeSHA256 } from '@/common/utils';

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}.${month}.${day}`;
}


function ShareImage() {
  const canvasRef = useRef(null);
  const uploaded = useRef(false)
  const { award, username, name: workName, setShareImage1, userId } = useGlobalContext()
  const [isImageReady, setImageReady] = useState(false);


  // 載入圖片的函數，返回一個 Promise
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  useEffect(() => {
    if(award === null) return;

    const drawImages = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      const backgroundImage = await loadImage('/images/share-image-base.png'); // 替換為您的背景圖 URL
      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
      ctx.drawImage(backgroundImage, 0, 0);

      const dogImage = await loadImage(`/images/title_${award.award}.png`); // 替換為您的狗狗圖片 URL
      const x = (canvas.width - dogImage.width) / 2;
      const y = 280;
      ctx.drawImage(dogImage, x, y);

      ctx.font = '800 16px Inter';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#F92C16'; // 文字顏色，可以按需要修改
      const text = getCurrentDate();
      ctx.fillText(text, 72, 40);

      ctx.font = '800 32px Inter';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#F92C16'; // 文字顏色，可以按需要修改
      const nameText = username + '出品';
      ctx.fillText(nameText, 72, 82);

      ctx.font = '800 32px Inter';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#F92C16'; // 文字顏色，可以按需要修改
      const workText = `《 ${workName} 》`;
      ctx.fillText(workText, 72, 124);

      if(award.reason.length === 2) {
        ctx.font = '400 28px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFF'; // You can change this color if needed
        // NOTE: Canvas doesn't support letterSpacing property directly, but you can manually implement it if necessary.
        const textToAdd = award.reason[1]; 
        ctx.fillText(textToAdd, canvas.width / 2, 1040);
  
        ctx.font = '400 28px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFF'; // You can change this color if needed
        // NOTE: Canvas doesn't support letterSpacing property directly, but you can manually implement it if necessary.
        const text2ToAdd = award.reason[0]; 
        ctx.fillText(text2ToAdd, canvas.width / 2, 990);
      }

      if(award.reason.length === 1) {
        ctx.font = '400 28px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFF'; // You can change this color if needed
        // NOTE: Canvas doesn't support letterSpacing property directly, but you can manually implement it if necessary.
        const textToAdd = award.reason[0]; 
        ctx.fillText(textToAdd, canvas.width / 2, 1040);
      }
      setImageReady(true);
    };
    drawImages();
  }, []);

  useEffect(() => {
    if (isImageReady && uploaded.current === false) {
      // Do anything you want after the image is ready
      if(!userId) {
        alert('LINE Login失敗，無法上傳圖片')
        return
      }
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            const fileNane = await computeSHA256(userId+"1");
            const link = await uploadBlob(blob, fileNane+".png");
            setShareImage1(link);
            uploaded.current = true;
            console.log('Image1 successfully uploaded!');
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        }
      }, 'image/png');

    }
  }, [isImageReady]);

  if(award === null) return null;

    

  return (
    <div style={{display: "none"}} key="si1">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default ShareImage;
