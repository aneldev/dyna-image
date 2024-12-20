import * as React from "react";
import {
  CSSProperties,
  useEffect,
  useState,
  useRef,
} from "react";

import objectHash from "object-hash";

import {Loading} from "./Loading";
import {cropDivBackgroundImage} from "./utils/cropDivBackgroundImage";

import * as styles from "./DynaImage.module.less";
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import {cn} from "./utils/cn";

export interface IDynaImageProps {
  className?: string;
  style?: React.CSSProperties;      // Container's style
  imgStyle?: React.CSSProperties;   // Image style (is div with background image)

  src: string;

  mode?: EImageMode;                // Default: EImageMode.FIT
  alt?: string;
  content?: JSX.Element;

  showLoadingSpinner?: boolean;     // Default is false
  showBrokenImageOnFail?: boolean;  // Default is true

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
  FIT = "FIT",
  FILL = "FILL",
}

export const DynaImage = (props: IDynaImageProps): JSX.Element => {
  const {
    className,
    style: userStyle,
    imgStyle = {},
    src,
    mode = EImageMode.FIT,
    alt,
    content,
    showLoadingSpinner = false,
    showBrokenImageOnFail = true,
    crop,
    horizontalMirror,
    verticalMirror,
    blackAndWhite,
    onLoad,
    onError,
  } = props;

  const refDivWithBackgroundImage = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadFailed, setLoadFailed] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setLoadFailed(false);
  }, [src]);

  const style: CSSProperties = {
    backgroundImage: `url(${src})`,
    backgroundSize: (() => {
      switch (mode) {
        case EImageMode.FIT:
          return 'contain';
        case EImageMode.FILL:
          return 'cover';
      }
    })(),
    transform: [
      horizontalMirror ? 'scaleX(-1)' : '',
      verticalMirror ? 'scaleY(-1)' : '',
    ].filter(Boolean).join(' '),
    filter: blackAndWhite ? 'grayscale(100%)' : undefined,
    ...imgStyle,
  };

  const key = objectHash({
    ...props,
    content: undefined,
  });

  const handleLoad = (): void => {
    if (crop && refDivWithBackgroundImage.current) {
      cropDivBackgroundImage(
        refDivWithBackgroundImage.current,
        crop.percentageX1,
        crop.percentageY1,
        crop.percentageX2,
        crop.percentageY2,
      );
    }
    setIsLoading(false);
    onLoad && onLoad();
  };
  const handleError = (e: any): void => {
    setIsLoading(false);
    setLoadFailed(true);
    onError && onError(e);
  };

  return (
    <>
      <Loading
        className={cn(styles.root, className)}
        style={userStyle}
        isLoading={showLoadingSpinner && isLoading}
      >
        <div
          key={key}
          className={styles.imageContainer}
          ref={refDivWithBackgroundImage}
          style={style}
        >
          {showBrokenImageOnFail && !!loadFailed && (
            <div className={styles.loadFailedContainer}>
              <BrokenImageIcon className={styles.brokenIcon}/>
            </div>
          )}
          {!!content && (
            <div className={styles.contentContainer}>
              {content}
            </div>
          )}
        </div>
      </Loading>
      <img
        hidden
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
};
