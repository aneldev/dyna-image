# Dyna Image

Render image in Fit, Fill, or Actual mode.

Create a `<div>` and inside the `<DynaImage>`. The `<DynaImage>` will occupy the full width and height of the parent `<div>`.
It will render the image in Fit / Fill or Actual mode.

# Modes

The `EImageMode` would be:

## ACTUAL

In Actual mode, the image as it is, in physical dimensions.

If the image is bigger than the given space, the image is centered cropped.

## FIT

In Fit mode, the image will fit in the parent div, which means that we will have horizontal or vertical empty spaces.

## FILL

In Fill mode, the image will cover the whole area of the parent div, which means that the image will be cropped vertically or horizontally. 

# Examples

```
import {DynaImage, EImageMode} from "dyna-image";
...

<div style={{ height: '400px', backgroundColor: 'black' }}>
  <DynaImage src="https://www.example.com/eifel.jpg"/>
</div>
```
or 
```
<div style={{ height: '400px' }}>
  <DynaImage 
    src="https://www.example.com/eifel.jpg"
    mode={EImageMode.FILL}
  />
</div>
```


# Demo

```
git clone http://github.com/aneldev/dyna-image
cd dyna-image
yarn install
yarn start

```

# All Properties

```
export interface IDynaImageProps {
  className?: string;
  style?: React.CSSProperties;      // Container's style
  imgStyle?: React.CSSProperties;   // Image style (is div with background image)

  src: string;

  mode?: EImageMode;                // Default: EImageMode.FIT
  alt?: string;
  content?: JSX.Element;

  showLoadingSpinner?: boolean;     // Default is false
  showBrokenImageOnFail?: boolean;  // Default is true

  crop?: {
    percentageX1: number;           // 0..100 position
    percentageY1: number;           // 0..100 position
    percentageX2: number;           // 0..100 position
    percentageY2: number;           // 0..100 position
  };
  horizontalMirror?: boolean;
  verticalMirror?: boolean;
  blackAndWhite?: boolean;

  onLoad?: () => void;
  onError?: (error: any) => void;
}
```

# `content` property

Allows rendering above the image. The container has the full width and height.

# `showLoadingSpinner` property

On loading, shows the Material UI CircularProgress animated icon.

# `showBrokenImageOnFail` property

On failed load, shows the Material UI BrokenImage icon.

# Change log

## 1.2.3

First version.

Works with React 16

## 2.0.0

Works with React 17