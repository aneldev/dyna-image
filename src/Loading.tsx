import * as React from "react";

import {CircularProgress} from "@material-ui/core";

import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

export interface ILoadingProps {
  className?: string;
  style?: React.CSSProperties;
  isLoading: boolean;
  showCircularIcon?: boolean; // Default: true
  children: any;
}

export const Loading = (props: ILoadingProps) => {
  const {
    className,
    style,
    isLoading,
    showCircularIcon = true,
    children,
  } = props;
  const classes = useStyles({});

  return (
    <div
      className={[classes.root, className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
      {isLoading && (
        <div className={classes.loadingContainer}>
          {showCircularIcon && (
            <CircularProgress
              className={classes.loader}
              variant="indeterminate"
              color="primary"
            />
          )}
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles(() => {
  return createStyles({
    root: {position: 'relative'},
    loadingContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    loader: {
      position: 'absolute',
      top: 'calc(50% - 20px)',
      left: 'calc(50% - 20px)',
    },
  });
});

