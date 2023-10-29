import React, { useRef,
  useEffect,
  useState } from 'react';
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


function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let lineCount = 1
  let line = '';

  for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + '';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
          lineCount++
          ctx.fillText(line, x, y);
          line = words[n] + '';
          y += lineHeight;
      }
      else {
          line = testLine;
      }
  }
  ctx.fillText(line, x, y);
  return lineCount * lineHeight;
}

const drawText = (ctx, firstSelected, secondSelected, thirdSelected) => {
  // Set font properties
  ctx.font = '400 32px Inter';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = '#F92C16';
  const text = "本段故事";
  ctx.fillText(text, 72, 110);

  // Draw the first part of the text in red
  ctx.fillStyle = '#F92C16';
  const firstText = "由";
  ctx.fillText(firstText, 72, 149); // Setting starting position to (10, 50)

  // Calculate the width of the first text to determine where to start drawing the second text
  const firstTextWidth = ctx.measureText(firstText).width;

  // Draw the second part of the text in blue
  ctx.fillStyle = '#FFF'; // Blue color
  const secondText = ` ${firstSelected.name}、${secondSelected.name}、${thirdSelected.name} `;
  ctx.fillText(secondText, 72 + firstTextWidth, 149); // Draw the second text immediately after the first text

  // Calculate the width of the second text to determine where to start drawing the third text
  const secondTextWidth = ctx.measureText(secondText).width;

  // Draw the third part of the text in red again
  ctx.fillStyle = '#F92C16';
  const thirdText = "出演";
  ctx.fillText(thirdText, 72 + firstTextWidth + secondTextWidth, 149); // Draw the third text immediately after the second text
}

const drawDate = (ctx, name) => {
  // Set font properties
  ctx.font = '400 30px Inter';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#F92C16';
  const firstText = `《${name}》初稿`;
  ctx.fillText(firstText, 650, 1190); // Setting starting position to (10, 50)

  ctx.font = 'italic 400 30px Inter'; 
  const text = getCurrentDate();
  ctx.fillText(text, 650, 1240);
}

function ShareImage2() {
  const canvasRef = useRef(null);
  const uploaded = useRef(false)
  const {
    firstSelected,
    secondSelected,
    thirdSelected,
    setShareImage2,
    name,
    userId
  } = useGlobalContext()
  const [isImageReady, setImageReady] = useState(false);


  // 載入圖片的函數，返回一個 Promise
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }

  const drawPhotoScript = async (ctx, x, y, actor) => {
    // Set font properties
    const actorImg = await loadImage(`/images/photo_${actor.name}.png`);
    const halfWidth = actorImg.width / 2;
    const halfHeight = actorImg.height / 2;
    ctx.drawImage(actorImg, 0, 0, actorImg.width, actorImg.height, x, y, halfWidth, halfHeight);
    ctx.font = '200 30px Inter';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFF';
    const height = wrapText(ctx, actor.subtitle.join('').split('').join(' '), 200, y+10, 500, 40);
    return Math.max(height, halfHeight)+60
  }

  useEffect(() => {
    if(name === null || firstSelected === null || secondSelected === null || thirdSelected === null) return;

    const drawImages = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      const backgroundImage = await loadImage('/images/share-image-base2.png'); // 替換為您的背景圖 URL
      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
      ctx.drawImage(backgroundImage, 0, 0);

      drawText(ctx, firstSelected, secondSelected, thirdSelected)
      const height1 = await drawPhotoScript(ctx, 64, 280, firstSelected)
      const height2 = await drawPhotoScript(ctx, 64, 280 + height1, secondSelected)
      await drawPhotoScript(ctx, 64, 280 + height2 + height2, thirdSelected)
      drawDate(ctx, name)
      setImageReady(true);
    };
    drawImages();
  }, []);

  useEffect(() => {
    if (isImageReady && uploaded.current === false) {
      if(!userId) {
        alert('LINE Login失敗，無法上傳圖片')
        return
      }
      // Do anything you want after the image is ready
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            const fileNane = await computeSHA256(userId+"2");
            const link = await uploadBlob(blob, fileNane+".png");
            setShareImage2(link);
            uploaded.current = true;
            console.log('Image2 successfully uploaded!');
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        }
      }, 'image/png');

    }
  }, [isImageReady]);

  if(firstSelected === null || secondSelected === null || thirdSelected === null) return;

  return (
    <div style={{display: "none"}} key="si2">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default ShareImage2;
