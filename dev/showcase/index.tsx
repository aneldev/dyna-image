import * as React from 'react';
import {IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import {dynaImageShowcase} from "./views/dynaImageShowcase/dynaImageShowcase";

import "./style.less";

export default {
  logo: <Logo/>,
  views: [
    dynaImageShowcase,
  ],
}as IShowcase;
