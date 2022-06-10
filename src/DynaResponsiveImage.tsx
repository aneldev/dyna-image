import * as React from "react";
import {useRef} from "react";

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

  alt?: string;
  content?: JSX.Element;

  horizontalMirror?: boolean;
  verticalMirror?: boolean;

  blackAndWhite?: boolean;

  zoom?: {
    percentageX: number;  // Default is 50%. Examples: 0& 20% 100%
    percentageY: number;  // Default is 50%. Examples: 0& 20% 100%
    zoom: number;         // Default is 1. 1 1.2 1.5
  };

  onLoad?: () => void;
  onError?: (error: any) => void;
}

export enum EImageMode {
  ACTUAL = "ACTUAL",
  FIT = "FIT",
  FILL = "FILL",
}

export const DynaResponsiveImage = (props: IDynaResponsiveImageProps): JSX.Element => {
  const {
    className,
    imgStyle = {},
    srcSet,
    alt,
    content,
    horizontalMirror,
    verticalMirror,
    blackAndWhite,
    zoom,
    onLoad,
    onError,
  } = props;

  const refImage = useRef<HTMLImageElement>(null);

  if (zoom && (verticalMirror || horizontalMirror)) {
    return (
      <div>
        DynaImage: <code>zoom</code> cannot work with <code>horizontalMirror</code> or <code>verticalMirror</code>.
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <picture>
        {Object.keys(srcSet)
          .filter(set => set !== 'main')
          .map((set, index) => (
            <source
              key={index}
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
          style={{
            transform: [
              horizontalMirror ? 'scaleX(-1)' : '',
              verticalMirror ? 'scaleY(-1)' : '',
              zoom ? `scale(${zoom.zoom})` : '',
            ].filter(Boolean).join(' '),
            transformOrigin: zoom ? `${zoom.percentageX}% ${zoom.percentageY}%` : undefined,
            filter: blackAndWhite ? 'grayscale(100%)' : undefined,
            ...imgStyle,
          }}
          onLoad={onLoad}
          onError={onError}
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
