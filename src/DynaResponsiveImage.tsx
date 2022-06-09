import * as React from "react";
import {
  CSSProperties,
  useRef,
} from "react";

import {cropImage} from "./utils/cropDivBackgroundImage";

export interface IDynaResponsiveImageProps {
  className?: string;
  imgStyle?: React.CSSProperties;   // Image style (is div with background image)

  srcSet: {
    main: string;
    W192: string;
    W384: string;
    W768: string;
    W1024: string;
    W2048: string;
    W4096: string;
  };

  mode?: EImageMode;                // Default: EImageMode.FIT
  alt?: string;
  content?: JSX.Element;

  crop?: {
    percentageX1: number;           // 0..100 position
    percentageY1: number;           // 0..100 position
    percentageX2: number;           // 0..100 position
    percentageY2: number;           // 0..100 position
  };
  horizontalMirror?: boolean;
  verticalMirror?: boolean;
  blackAndWhite?: boolean;

  onLoad?: () => void;
  onError?: (error: any) => void;
}

export enum EImageMode {
  ACTUAL = "ACTUAL",
  FIT = "FIT",
  FILL = "FILL",
}

let done = false;

export const DynaResponsiveImage = (props: IDynaResponsiveImageProps): JSX.Element => {
  const {
    className,
    imgStyle = {},
    srcSet,
    mode = EImageMode.FIT,
    alt,
    content,
    crop,
    horizontalMirror,
    verticalMirror,
    blackAndWhite,
    onLoad,
    onError,
  } = props;
  mode;

  const refImage = useRef<HTMLImageElement>(null);

  const style: CSSProperties = {
    transform: [
      horizontalMirror ? 'scaleX(-1)' : '',
      verticalMirror ? 'scaleY(-1)' : '',
    ].filter(Boolean).join(' '),
    filter: blackAndWhite ? 'grayscale(100%)' : undefined,
    ...imgStyle,
  };

  const handleLoad = (): void => {
    console.debug('LOADED');
    if (crop && refImage.current) {
      if (done) return;
      done = true;
      console.debug('Cropping');
      cropImage(
        refImage.current,
        crop.percentageX1,
        crop.percentageY1,
        crop.percentageX2,
        crop.percentageY2,
      );
    }
    onLoad && onLoad();
  };
  const handleError = (e: any): void => {
    onError && onError(e);
  };

  return (
    <div
      className={className}
      style={{position: 'relative'}}
    >
      <picture>
        {Object.keys(srcSet)
          .filter(set=>set !== 'main')
          .map(set=>(
            <source
              media={`(max-width: ${set.substring(1)}px)`}
              srcSet={`${srcSet[set]} ${set.substring(1)}w`}
              sizes="100vw"
            />
          ))
        }
        <img
          width="100%"
          ref={refImage}
          alt={alt}
          src={srcSet.main}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {content}
      </div>
    </div>
  );
};
