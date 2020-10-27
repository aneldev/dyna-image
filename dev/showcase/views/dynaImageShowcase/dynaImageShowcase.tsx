import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {DynaImage, EImageMode, IDynaImageProps} from "../../../../src";

import * as styles from "./dynaImageShowcase.module.less";

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
      slug: 'actual-small',
      title: 'Actual, Small Image',
      props: {
        src: 'https://i.gifer.com/8Gkn.gif',
        mode: EImageMode.ACTUAL,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'fit-small',
      title: 'Fit, Small Image',
      props: {
        src: 'https://i.gifer.com/8Gkn.gif',
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
        src: 'https://i.gifer.com/8Gkn.gif',
        mode: EImageMode.FILL,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'actual-big',
      title: 'Actual, Big Image',
      props: {
        src: 'https://sample1.djaana.com/sites/sample1.djaana.com/files/styles/gallery_1920x1080/public/Eiffeltower2.jpg?itok=6s-vmxZV',
        mode: EImageMode.ACTUAL,
        showLoadingSpinner: true,
        onLoad: () => console.log('Image loaded'),
        onError: (error) => console.error('Image load error', error),
      } as IDynaImageProps,
    },
    {
      slug: 'fit-big',
      title: 'Fit, Big Image',
      props: {
        src: 'https://sample1.djaana.com/sites/sample1.djaana.com/files/styles/gallery_1920x1080/public/Eiffeltower2.jpg?itok=6s-vmxZV',
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
        src: 'https://sample1.djaana.com/sites/sample1.djaana.com/files/styles/gallery_1920x1080/public/Eiffeltower2.jpg?itok=6s-vmxZV',
        mode: EImageMode.FILL,
        showLoadingSpinner: true,
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
        src: 'https://sample1.djaana.com/sites/sample1.djaana.com/files/styles/gallery_1920x1080/public/Eiffeltower2.jpg?itok=6s-vmxZV',
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

