import * as React from "react";

export interface ILoadingProps {
  className?: string;
  isLoading: boolean;
  showCircularIcon?: boolean; // default: true
  children: any;
}

import {CircularProgress} from "@material-ui/core";

import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

export const Loading = (props: ILoadingProps) => {
  const {
    className,
    isLoading,
    showCircularIcon = true,
    children,
  } = props;
  const classes = useStyles({});

  return (
    <div className={[classes.root, className].filter(Boolean).join(' ')}>
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
    root: {
      position: 'relative',
    },
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
      top: '50%',
      left: '50%',
    },
  });
});

