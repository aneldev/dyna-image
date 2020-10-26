import * as React from "react";
import { CSSProperties } from "react";

import { cn } from "./cn";

import * as styles from "./DynaImage.module.less";

export interface IDynaImageProps {
  className?: string;
  src: string;
  mode?: EImageMode;    // Default: EImageMode.FIT
  alt?: string;
  content?: JSX.Element;
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
    onLoad,
    onError,
  } = props;

  const style: CSSProperties = {
    backgroundImage: `url(${src})`,
    backgroundSize: (() => {
      switch (mode) {
        case EImageMode.FIT: return 'contain';
        case EImageMode.FILL: return 'cover';
        case EImageMode.ACTUAL: return 'auto';
      }
    })(),
  };

  return (
    <>
      <div className={cn(styles.root, className)}>
        <div
          className={styles.imageContainer}
          style={style}
        >
          {!!content && (
            <div className={styles.contentContainer}>
              {content}
            </div>
          )}
        </div>
      </div>
      <img
        hidden
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />
    </>
  );
};
