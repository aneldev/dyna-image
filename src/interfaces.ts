import * as React from "react";

export interface IDynaResponsiveImageProps {
  className?: string;
  imgStyle?: React.CSSProperties;   // Image style (is div with background image)

  srcSet: ISrcSet;

  alt?: string;
  content?: JSX.Element;
  relation?:
    | 'screen'
    | 'container';

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

export interface ISrcSet {
  main: string;         // Use it as default image
  W192?: string;
  W384?: string;
  W768?: string;
  W1024?: string;
  W2048?: string;
  W4096?: string;
}

export interface ISrcSet {
  main: string;         // Use it as default image
  W192?: string;
  W384?: string;
  W768?: string;
  W1024?: string;
  W2048?: string;
  W4096?: string;
}
