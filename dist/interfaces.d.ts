import * as React from "react";
export interface IDynaResponsiveImageProps {
    className?: string;
    imgStyle?: React.CSSProperties;
    srcSet: ISrcSet;
    alt?: string;
    content?: JSX.Element;
    relation?: 'screen' | 'container';
    horizontalMirror?: boolean;
    verticalMirror?: boolean;
    blackAndWhite?: boolean;
    zoom?: {
        percentageX: number;
        percentageY: number;
        zoom: number;
    };
    onLoad?: () => void;
    onError?: (error: any) => void;
}
export interface ISrcSet {
    main: string;
    W192?: string;
    W384?: string;
    W768?: string;
    W1024?: string;
    W2048?: string;
    W4096?: string;
}
export interface ISrcSet {
    main: string;
    W192?: string;
    W384?: string;
    W768?: string;
    W1024?: string;
    W2048?: string;
    W4096?: string;
}
