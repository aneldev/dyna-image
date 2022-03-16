import * as React from "react";
export interface ILoadingProps {
    className?: string;
    style?: React.CSSProperties;
    isLoading: boolean;
    showCircularIcon?: boolean;
    children: any;
}
export declare const Loading: (props: ILoadingProps) => JSX.Element;
