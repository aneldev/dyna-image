import {Canvas2Image} from "./Canvas2Image";

export const cropImage = (
  divWithBackgroundImage: HTMLDivElement,
  percentageX1: number,
  percentageY1: number,
  percentageX2: number,
  percentageY2: number,
) => {
  const imageURL = divWithBackgroundImage.style.backgroundImage.split('"')[1];

  const image = new Image();
  image.src = imageURL;
  image.setAttribute('crossorigin', 'anonymous');

  image.onload = (() => {
    const x1 = getPxValue(percentageX1, image.width);
    const x2 = getPxValue(percentageX2, image.width);
    const y1 = getPxValue(percentageY1, image.height);
    const y2 = getPxValue(percentageY2, image.height);

    const width = x2 - x1;
    const height = y2 - y1;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx?.drawImage(
      image,
      x1,     // Copy from x
      y1,     // Copy from y
      width,  // Copy width
      height, // Copy height
      0,      // Paste on x
      0,      // Paste on y
      width,  // Paste width
      height, // Paste height
    );
    const newImage = Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
    divWithBackgroundImage.style.backgroundImage = "url(" + newImage?.src + ")";
  });
};

const getPxValue = (percentage: number, size: number): number => size * percentage / 100;
