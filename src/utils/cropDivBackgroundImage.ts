import {Canvas2Image} from "./Canvas2Image";

export const cropImage = async (
  img: HTMLImageElement,
  percentageX1: number,
  percentageY1: number,
  percentageX2: number,
  percentageY2: number,
) => {
  try {
    img.src = "url(" + cropImageCore(img, percentageX1, percentageY1, percentageX2, percentageY2) + ")";
  }
  catch (e) {
    console.error('Dyna Image: crop error: ' + e.message, e);
  }
};

export const cropDivBackgroundImage = async (
  divWithBackgroundImage: HTMLDivElement,
  percentageX1: number,
  percentageY1: number,
  percentageX2: number,
  percentageY2: number,
) => {
  try {
    const imageURL = divWithBackgroundImage.style.backgroundImage.split('"')[1];
    const croppedImage = await cropImageByUrl(
      imageURL,
      percentageX1,
      percentageY1,
      percentageX2,
      percentageY2,
    );
    divWithBackgroundImage.style.backgroundImage = "url(" + croppedImage + ")";
  }
  catch (e) {
    console.error('Dyna Image: crop error: ' + e.message, e);
  }
};

const cropImageByUrl = (
  imageURL: string,
  percentageX1: number,
  percentageY1: number,
  percentageX2: number,
  percentageY2: number,
) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageURL;
    image.setAttribute('crossorigin', 'anonymous');

    image.onload = (() => {
      resolve(cropImageCore(image, percentageX1, percentageY1, percentageX2, percentageY2));
    });
    image.onerror = reject;
  });
};

const cropImageCore = (
  image: HTMLImageElement,
  percentageX1: number,
  percentageY1: number,
  percentageX2: number,
  percentageY2: number,
) => {
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
  return newImage?.src;
};

const getPxValue = (percentage: number, size: number): number => size * percentage / 100;
