# Dyna Image

Render image in Fit, Fill, or Actual mode.

Create a `<div>` and inside the `<DynaImage>`. The `<DynaImage>` will occupy the full width and height of the parent `<div>`.
It will render the image in Fit / Fill or Actual mode.

- In Actual mode, the image as it is, in physical dimensions.
- In Fit mode, the image will fit in the parent div, which means that we will have horizontal or vertical spaces.
- In Fill mode, the image will cover the whole area of the parent div, which means that the image will be cropped vertically or horizontally. 

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

# Properties

```
export interface IDynaImageProps {
  className?: string;
  src: string;
  mode?: EImageMode;                // Default: EImageMode.FIT
  alt?: string;                     // For the image tag
  content?: JSX.Element;
  showLoadingSpinner?: boolean;     // Default: false
  showBrokenImageOnFail?: boolean;  // Default: true
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
