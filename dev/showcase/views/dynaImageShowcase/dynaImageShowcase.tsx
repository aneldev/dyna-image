import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {DynaImage, EImageMode, IDynaImageProps} from "../../../../src";

import * as styles from "./dynaImageShowcase.module.less";

const smallImage = 'https://i.gifer.com/8Gkn.gif';
const largeImage = 'https://media.istockphoto.com/photos/3d-text-of-demo-picture-id869939818';

export const dynaImageShowcase: IShowcaseView = {
  slug: 'dyna-image',
  faIconName: 'circle-o-notch',
  title: 'Dyna Image',
  center: true,
  component: (
    <DynaImage
      className={styles.imageBackgroundColor}
      src={null as any}
    />
  ),
  wrapperStyle: {
    width: '100%',
    height: '100%',
  },
  props: [
    {
      slug: 'fit-small',
      title: 'Fit, Small Image',
      props: {
        src: smallImage,
        mode: EImageMode.FIT,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'fill-small',
      title: '  let wrapper;\n, Small Image',
      props: {
        src: smallImage,
        mode: EImageMode.FILL,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'fit-big',
      title: 'Fit, Big Image',
      props: {
        src: largeImage,
        mode: EImageMode.FIT,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'fill-big',
      title: 'Fill, Big Image',
      props: {
        src: largeImage,
        mode: EImageMode.FILL,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'crop-fit-big',
      title: 'Crop and Fit, Big Image',
      props: {
        src: largeImage,
        mode: EImageMode.FIT,
        showLoadingSpinner: true,
        crop: {
          percentageX1: 10,
          percentageY1: 10,
          percentageX2: 90,
          percentageY2: 90,
        },
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'mirror-horizontal',
      title: 'Mirror horizontal',
      props: {
        src: largeImage,
        mode: EImageMode.FIT,
        showLoadingSpinner: true,
        horizontalMirror: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'mirror-vertical',
      title: 'Mirror vertical',
      props: {
        src: largeImage,
        mode: EImageMode.FIT,
        showLoadingSpinner: true,
        verticalMirror: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'mirror-horizontal-vertical',
      title: 'Mirror horizontal && vertical',
      props: {
        src: largeImage,
        mode: EImageMode.FIT,
        showLoadingSpinner: true,
        horizontalMirror: true,
        verticalMirror: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'black-and-white',
      title: 'Black and white',
      props: {
        src: largeImage,
        mode: EImageMode.FIT,
        showLoadingSpinner: true,
        blackAndWhite: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'error-loading',
      title: 'Load error',
      props: {
        src: 'https://www.example.com/no-exist-jpg',
        mode: EImageMode.FILL,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'fill-big-with-content',
      title: 'Fill, Big Image with content red inset shadow',
      props: {
        src: largeImage,
        mode: EImageMode.FILL,
        content:
          <div
            style={{
              width: '100%',
              height: '100%',
              boxShadow: 'red 0px 0px 32px 3px inset',
            }}
          />,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
  ],
};

