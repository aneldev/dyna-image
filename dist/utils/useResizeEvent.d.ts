import { MutableRefObject } from "react";
export interface IUseResizeEventArgs {
    refreshRate?: number;
    minRefreshRate?: number;
    skipOnMount?: boolean;
    leading?: boolean;
    trailing?: boolean;
    onResize?: (args: IResizeEventArgs) => void;
}
export interface IResizeEventArgs {
    width: number;
    height: number;
    diffPercentage: number;
}
export interface IUseResizeEventAPI<TElement> {
    ref: MutableRefObject<TElement | null>;
    width: number;
    height: number;
}
export declare const useResizeEvent: <TElement>({ refreshRate, minRefreshRate, skipOnMount, leading, trailing, onResize, }?: IUseResizeEventArgs) => IUseResizeEventAPI<TElement>;
//# sourceMappingURL=useResizeEvent.d.ts.map