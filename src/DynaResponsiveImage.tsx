import * as React from "react";
import {IDynaResponsiveImageProps} from "./interfaces";

import {DynaResponsiveImageByScreen} from "./DynaResponsiveImageByScreen";
import {DynaResponsiveImageByContainer} from "./DynaResponsiveImageByContainer";

export const DynaResponsiveImage = (props: IDynaResponsiveImageProps): JSX.Element => {
  const {relation} = props;

  return relation === "screen"
    ? <DynaResponsiveImageByScreen {...props} />
    : <DynaResponsiveImageByContainer {...props} />;
};
