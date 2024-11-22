import {
  useState,
  useEffect,
} from "react";

import {IDynaResponsiveImageProps} from "./interfaces";

import {useResizeEvent} from "./utils/useResizeEvent";

export const DynaResponsiveImageByContainer = (props: IDynaResponsiveImageProps): JSX.Element => {
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

  const imageVersions: { width: number; url: string }[] =
    Object.entries(srcSet)
      .filter(([width]) => width !== "main")
      .map(([_width, url]) => ({
        width: parseInt(_width.slice(1)),
        url,
      }))
      .sort((a, b) => a.width - b.width);

  const [imageUrl, setImageUrl] = useState<string>('');
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const {ref} = useResizeEvent<HTMLDivElement>({
    skipOnMount: false,
    onResize: ({width: containerWidth}) => setContainerWidth(containerWidth),
  });

  useEffect(() => {
    const imageVersion = imageVersions.find(version => version.width >= containerWidth);
    const url = imageVersion
      ? imageVersion.url
      : imageVersions[imageVersions.length - 1].url;
    setImageUrl(url);
  }, [containerWidth, srcSet.main]);

  if (zoom && (verticalMirror || horizontalMirror)) {
    return (
      <div>
        DynaResponsiveImage: <code>zoom</code> cannot work with <code>horizontalMirror</code> or <code>verticalMirror</code>.
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      data-component-name="DynaResponsiveImage"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!!imageUrl && (
        <>
          <img
            width="100%"
            alt={alt}
            src={imageUrl}
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
        </>
      )}
    </div>
  );
};
