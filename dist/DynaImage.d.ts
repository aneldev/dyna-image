import * as React from "react";
export interface IDynaImageProps {
    className?: string;
    style?: React.CSSProperties;
    src: string;
    mode?: EImageMode;
    alt?: string;
    content?: JSX.Element;
    showLoadingSpinner?: boolean;
    showBrokenImageOnFail?: boolean;
    onLoad?: () => void;
    onError?: (error: any) => void;
}
export declare enum EImageMode {
    ACTUAL = "ACTUAL",
    FIT = "FIT",
    FILL = "FILL"
}
export declare const DynaImage: (props: IDynaImageProps) => JSX.Element;
