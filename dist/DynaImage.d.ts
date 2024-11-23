import * as React from "react";
export interface IDynaImageProps {
    className?: string;
    style?: React.CSSProperties;
    imgStyle?: React.CSSProperties;
    src: string;
    mode?: EImageMode;
    alt?: string;
    content?: JSX.Element;
    showLoadingSpinner?: boolean;
    showBrokenImageOnFail?: boolean;
    crop?: {
        percentageX1: number;
        percentageY1: number;
        percentageX2: number;
        percentageY2: number;
    };
    horizontalMirror?: boolean;
    verticalMirror?: boolean;
    blackAndWhite?: boolean;
    onLoad?: () => void;
    onError?: (error: any) => void;
}
export declare enum EImageMode {
    FIT = "FIT",
    FILL = "FILL"
}
export declare const DynaImage: (props: IDynaImageProps) => JSX.Element;
//# sourceMappingURL=DynaImage.d.ts.map