export interface ILoadingProps {
    className?: string;
    isLoading: boolean;
    showCircularIcon?: boolean;
    children: any;
}
export declare const Loading: (props: ILoadingProps) => JSX.Element;
