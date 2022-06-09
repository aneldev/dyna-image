import * as React from 'react';
import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import {dynaImageShowcase} from "./views/dynaImageShowcase/dynaImageShowcase";
import {dynaResponsiveImageShowcase} from "./views/dynaImageShowcase/dynaResponsiveImageShowcase";

import "./style.less";

export default {
  logo: <Logo/>,
  views: [
    dynaImageShowcase,
    dynaResponsiveImageShowcase
  ],
}as IShowcase;
