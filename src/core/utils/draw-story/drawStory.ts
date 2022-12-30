import { getDimensionsText } from './getDimensionsText';

export const drawStory = (
  imgSrc: string,
  { width, height }: { width: number; height: number },
  callback: (base64: string) => void,
  elements?: {
    x: number | 'center';
    y: number;
    text: string | number;
    fontSize: number;
    color: string;
    fontFamily: string;
  }[],
) => {
  try {
    const image = new Image();

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    image.onload = () => {
      console.log('image storys load successfull', image);
      ctx.drawImage(image, 0, 0);
      if (elements) {
        elements.forEach(e => {
          ctx.fillStyle = e.color;
          ctx.font = `${e.fontSize}px ${e.fontFamily}`;
          if (e.x === 'center') {
            ctx.fillText(
              String(e.text),
              (width - getDimensionsText(String(e.text), e.fontFamily, `${e.fontSize}px`).width) / 2,
              e.y,
            );
          } else {
            ctx.fillText(String(e.text), e.x, e.y);
          }
        });
      }
      callback(canvas.toDataURL('image/webp'));
    };
    image.src = imgSrc;
  } catch (e) {
    console.log(e);
  }
};
