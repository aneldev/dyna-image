/**
 * Covert canvas to image
 * and save the image file
 * Credits: https://www.npmjs.com/package/canvas-to-image
 */
export declare const Canvas2Image: {
    saveAsImage: (canvas: any, width: any, height: any, type: any, fileName: any) => void;
    saveAsPNG: (canvas: any, width: any, height: any, fileName: any) => void;
    saveAsJPEG: (canvas: any, width: any, height: any, fileName: any) => void;
    saveAsGIF: (canvas: any, width: any, height: any, fileName: any) => void;
    saveAsBMP: (canvas: any, width: any, height: any, fileName: any) => void;
    convertToImage: (canvas: any, width: any, height: any, type: any) => HTMLImageElement | undefined;
    convertToPNG: (canvas: any, width: any, height: any) => HTMLImageElement | undefined;
    convertToJPEG: (canvas: any, width: any, height: any) => HTMLImageElement | undefined;
    convertToGIF: (canvas: any, width: any, height: any) => HTMLImageElement | undefined;
    convertToBMP: (canvas: any, width: any, height: any) => HTMLImageElement | undefined;
};
//# sourceMappingURL=Canvas2Image.d.ts.map