import * as React from "react";
import { CSSProperties } from "react";

import { cn } from "./cn";

import * as styles from "./DynaImage.module.less";

export interface IDynaImageProps {
  className?: string;
  src: string;
  mode?: EImageMode;    // Default: EImageMode.FIT
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
        />
      </div>
      <img
        hidden
        src={src}
        onLoad={onLoad}
        onError={onError}
      />
    </>
  );
};
