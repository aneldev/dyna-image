import * as React from "react";
import {CSSProperties, useEffect, useState} from "react";

import {cn} from "./cn";
import {Loading} from "./Loading";

import * as styles from "./DynaImage.module.less";
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

export interface IDynaImageProps {
  className?: string;
  src: string;
  mode?: EImageMode;                // Default: EImageMode.FIT
  alt?: string;
  content?: JSX.Element;
  showLoadingSpinner?: boolean;     // Default: false
  showBrokenImageOnFail?: boolean;  // Default: true
  onLoad?: () => void;
  onError?: (error: any) => void;
}

export enum EImageMode {
  ACTUAL = "ACTUAL",
  FIT = "FIT",
  FILL = "FILL",
}

export const DynaImage = (props: IDynaImageProps): JSX.Element => {
  const {
    className,
    src,
    mode = EImageMode.FIT,
    alt,
    content,
    showLoadingSpinner = false,
    showBrokenImageOnFail = true,
    onLoad,
    onError,
  } = props;

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
        case EImageMode.ACTUAL:
          return 'auto';
      }
    })(),
  };

  const handleLoad = (): void => {
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
        isLoading={showLoadingSpinner && isLoading}
      >
        <div
          className={styles.imageContainer}
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
