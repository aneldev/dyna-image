export interface IDynaImageProps {
    className?: string;
    src: string;
    mode?: EImageMode;
    alt?: string;
    onLoad?: () => void;
    onError?: (error: any) => void;
}
export declare enum EImageMode {
    ACTUAL = "ACTUAL",
    FIT = "FIT",
    FILL = "FILL"
}
export declare const DynaImage: (props: IDynaImageProps) => JSX.Element;
