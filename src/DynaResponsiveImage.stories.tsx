import * as React from 'react';

import {Meta} from '@storybook/react/types-6-0';

import {DynaResponsiveImage} from "./";

import {ISrcSet} from "./";

const meta: Meta = {
  title: 'DynaResponsiveImage',
  component: DynaResponsiveImage,
  argTypes: {},
  decorators: [
    (Component: any) => <Component/>,
  ],
};

export default meta;

const srcSet: ISrcSet = {
  main: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.jpg',
  W192: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W192.jpg',
  W384: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W384.jpg',
  W768: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W768.jpg',
  W1024: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W1024.jpg',
  W2048: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W2048.jpg',
  W4096: 'https://dyna-cms.s3.amazonaws.com/adore-gr--life/2023-02/1983898986ed98893c493b0a3affdd5843.W4096.jpg',
}

export const ImagesInARow = () => (
  <div style={{display: 'flex'}}>
    <div style={{flex: '1 1'}}>
      <DynaResponsiveImage srcSet={srcSet}/>
    </div>
    <div style={{flex: '1 1'}}>
      <DynaResponsiveImage srcSet={srcSet}/>
    </div>
  </div>
)
