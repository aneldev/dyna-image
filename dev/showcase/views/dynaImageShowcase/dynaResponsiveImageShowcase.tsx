import * as React from "react";
import {IShowcaseView} from "dyna-showcase";

import {
  DynaResponsiveImage,
  EImageMode,
  IDynaResponsiveImageProps,
} from "../../../../src";


// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageWFull = require('../../assets/PhotoTestChart.full.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageW192 = require('../../assets/PhotoTestChart.W192.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageW384 = require('../../assets/PhotoTestChart.W384.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageW768 = require('../../assets/PhotoTestChart.W768.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageW1024 = require('../../assets/PhotoTestChart.W1024.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageW2048 = require('../../assets/PhotoTestChart.W2048.jpg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageW4096 = require('../../assets/PhotoTestChart.W4096.jpg');

const demoImages = {
  main: imageWFull,
  W192: imageW192,
  W384: imageW384,
  W768: imageW768,
  W1024: imageW1024,
  W2048: imageW2048,
  W4096: imageW4096,
};

export const dynaResponsiveImageShowcase: IShowcaseView = {
  slug: 'dyna-responsive-image',
  faIconName: 'circle-o-notch',
  title: 'Dyna Responsive Image',
  center: true,
  component: (
    <DynaResponsiveImage
      srcSet={{
        main: '',
        W192: '',
        W384: '',
        W768: '',
        W1024: '',
        W2048: '',
        W4096: '',
      }}
    />
  ),
  wrapperStyle: {
    width: '100%',
    height: '100%',
  },
  props: [
    {
      slug: 'simple',
      title: 'Responsive',
      props: {
        srcSet: demoImages,
        mode: EImageMode.ACTUAL,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaResponsiveImageProps,
    },
    {
      slug: 'with-overlay-container',
      title: 'With overlay container',
      props: {
        srcSet: demoImages,
        mode: EImageMode.ACTUAL,
        showLoadingSpinner: true,
        content: (
          <div
            style={{
              height: '100%',
              boxShadow: 'inset 0px 0px 10px 10px orange',
            }}
          />
        ),
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaResponsiveImageProps,
    },
    {
      slug: 'cropped',
      title: 'Cropped',
      props: {
        srcSet: demoImages,
        mode: EImageMode.ACTUAL,
        showLoadingSpinner: true,
        crop: {
          percentageX1: 10,
          percentageY1: 10,
          percentageX2: 90,
          percentageY2: 90,
        },
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaResponsiveImageProps,
    },
  ],
};

