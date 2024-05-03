import {
  useState,
  MutableRefObject,
} from "react";

import {useDebouncedCallback} from "use-debounce";
import {useResizeDetector} from "react-resize-detector";

import {useIsMounted} from "./useIsMounted";

export interface IUseResizeEventArgs {
  refreshRate?: number;     // Default is 500
  minRefreshRate?: number;  // Default is refreshRate
  skipOnMount?: boolean;    // Default is true
  leading?: boolean;        // Default is true
  trailing?: boolean;       // Default is true
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

interface IDimension {
  width: number;
  height: number;
}

export const useResizeEvent = <TElement>(
  {
    refreshRate = 500,
    minRefreshRate = refreshRate,
    skipOnMount = true,
    leading = true,
    trailing = true,
    onResize = () => undefined,
  }: IUseResizeEventArgs
  = {},
): IUseResizeEventAPI<TElement> => {
  const [mountEventCall, setMountEventCall] = useState<boolean>(false);
  const [dimension, setDimension] = useState<IDimension>({
    width: 0,
    height: 0,
  });

  const getIsMounted = useIsMounted();

  const getDimension = (width: number, height: number): IDimension => ({
    width,
    height,
  });

  const handleContainerResize = useDebouncedCallback(
    (width: number, height: number) => {
      const currentDimension = getDimension(width, height);
      if (width === 0 && height === 0) return; // Ignore this useDebouncedCallback's call

      if (!mountEventCall) {
        setMountEventCall(true);
        setDimension(currentDimension);
        if (!skipOnMount) {
          onResize({
            width,
            height,
            diffPercentage: 0,
          });
        }
        return;
      }

      const widthDiffPercentage = Math.abs(100 * (width - dimension.width) / dimension.width);
      const heightDiffPercentage = Math.abs(100 * (height - dimension.height) / dimension.height);
      const diffPercentage = (widthDiffPercentage + heightDiffPercentage) / 2;
      const sameDimension = diffPercentage === 0;

      setDimension(currentDimension);
      if (!sameDimension && getIsMounted()) {
        onResize({
          width,
          height,
          diffPercentage,
        });
      }
    },
    refreshRate,
    {
      leading,
      trailing,
      maxWait: minRefreshRate,
    },
  );

  const {ref} = useResizeDetector({
    skipOnMount: false,
    onResize: handleContainerResize,
  });

  return {
    ref: ref as any,
    ...dimension,
  };
};
