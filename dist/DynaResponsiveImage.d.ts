import * as React from "react";
export interface IDynaResponsiveImageProps {
    className?: string;
    imgStyle?: React.CSSProperties;
    srcSet: {
        main: string;
        W192?: string;
        W384?: string;
        W768?: string;
        W1024?: string;
        W2048?: string;
        W4096?: string;
    };
    alt?: string;
    content?: JSX.Element;
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
export declare const DynaResponsiveImage: (props: IDynaResponsiveImageProps) => JSX.Element;
