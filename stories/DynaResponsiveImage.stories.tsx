import * as React from 'react';
import {useState} from "react";

import {Meta} from '@storybook/react/types-6-0';

import {DynaResponsiveImage} from "../src";

import {ISrcSet} from "../src";

const meta: Meta = {
  title: 'DynaResponsiveImage',
  component: DynaResponsiveImage,
  argTypes: {},
  decorators: [
    (Component: any) => <Component/>,
  ],
};

export default meta;

const srcSetA: ISrcSet = {
  main: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.jpg',
  W192: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W192.jpg',
  W384: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W384.jpg',
  W768: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W768.jpg',
  W1024: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W1024.jpg',
  W2048: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W2048.jpg',
  W4096: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W4096.jpg',
};
const srcSetB: ISrcSet = {
  main: 'https://dyna-cms.s3.amazonaws.com/adore-gr--fashion/2023-03/17bcc140223a90af3c4955eb7b3541d216.jpg',
  W192: 'https://dyna-cms.s3.amazonaws.com/adore-gr--fashion/2023-03/17bcc140223a90af3c4955eb7b3541d216.W192.jpg',
  W384: 'https://dyna-cms.s3.amazonaws.com/adore-gr--fashion/2023-03/17bcc140223a90af3c4955eb7b3541d216.W384.jpg',
  W768: 'https://dyna-cms.s3.amazonaws.com/adore-gr--fashion/2023-03/17bcc140223a90af3c4955eb7b3541d216.W768.jpg',
  W1024: 'https://dyna-cms.s3.amazonaws.com/adore-gr--fashion/2023-03/17bcc140223a90af3c4955eb7b3541d216.W1024.jpg',
  W2048: 'https://dyna-cms.s3.amazonaws.com/adore-gr--fashion/2023-03/17bcc140223a90af3c4955eb7b3541d216.W2048.jpg',
  W4096: 'https://dyna-cms.s3.amazonaws.com/adore-gr--fashion/2023-03/17bcc140223a90af3c4955eb7b3541d216.W4096.jpg',
};

export const ImagesInARowByScreen = () => (
  <div style={{display: 'flex'}}>
    <div style={{flex: '1 1'}}>
      <DynaResponsiveImage srcSet={srcSetA}/>
    </div>
    <div style={{flex: '1 1'}}>
      <DynaResponsiveImage srcSet={srcSetA}/>
    </div>
  </div>
);
export const ImagesInARowByContainer = () => (
  <div style={{display: 'flex'}}>
    <div style={{flex: '1 1'}}>
      <DynaResponsiveImage
        srcSet={srcSetA}
        relation="container"
      />
    </div>
    <div style={{flex: '1 1'}}>
      <DynaResponsiveImage
        srcSet={srcSetA}
        relation="container"
      />
    </div>
  </div>
);
export const ToggleSrcSet = () => {
  const [srcSet, setSrcSet] = useState<ISrcSet>(srcSetA);

  const handleToggle = () => {
    setSrcSet(
      srcSet.main === srcSetA.main
        ? srcSetB
        : srcSetA,
    );
  };

  return (
    <div>
      <div>
        <button onClick={handleToggle}>Toggle src set</button>
      </div>
      <DynaResponsiveImage
        srcSet={srcSet}
        relation="container"
      />
    </div>
  );
};
