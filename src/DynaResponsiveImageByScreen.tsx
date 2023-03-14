import * as React from "react";

import {IDynaResponsiveImageProps} from "./interfaces";

export const DynaResponsiveImageByScreen = (props: IDynaResponsiveImageProps): JSX.Element => {
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
        <source
          media="(max-width: 767px)"
          srcSet={
            [
              `${srcSet.W192} 128w`,
              `${srcSet.W384} 240w`,
              `${srcSet.W384} 320w`,
              `${srcSet.W768} 640w`,
            ]
              .join(', ')
          }
          sizes="100vw"
        />
        <source
          media="(min-width: 768px)"
          srcSet={
            [
              `${srcSet.W192} 128w`,
              `${srcSet.W384} 240w`,
              `${srcSet.W384} 320w`,
              `${srcSet.W768} 640w`,
              `${srcSet.W1024} 960w`,
              `${srcSet.W2048} 2048w`,
              `${srcSet.W4096} 4096w`,
            ]
              .join(', ')
          }
          sizes="50vw"
        />
        <img
          width="100%"
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
