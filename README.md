# Dyna Image

Render image in Fit or Fill mode. Render responsive images.

# Demo

```
git clone http://github.com/aneldev/dyna-image
cd dyna-image
yarn install
yarn start

```

# Package

This package comes with two components:

- `DynaImage` that renders an image in the given width & height space
- `DynaResponsiveImage` renders an image in the given width. The height is auto

The main difference is that the `DynaImage` uses the whole parent's available space, width, and height,
while the `DynaResponsiveImage` uses only the width, the height is auto.

Also, note that the `DynaImage` is not SEO friendly! Use it for decoration only.
The `DynaReposniveImage` is SEO friendly and supports multiple versions of an image for responsive representation.

## DynaImage

Render image in Fit or Fill mode.

Create a `<div>` width some `width` and `height` and inside the `<DynaImage>`. The `<DynaImage>` will occupy the full width and height of the parent `<div>`.
It will render the image in Fit or Fill mode.

The `<div>`'s `width` and `height` would also be obtained by `flex boxes` or `grid system`.

### Modes

The `EImageMode` would be:

#### FIT

In Fit mode, the image will fit in the parent div, which means that we will have horizontal or vertical empty spaces.

#### FILL

In Fill mode, the image will cover the whole area of the parent div, which means that the image will be cropped vertically or horizontally.

### Examples

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


### Props

Render image in Fit or Fill mode.

```
IDynaImageProps {
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

#### `content` property

Allows rendering above the image. The container has the entire width and height of the image.

#### `showLoadingSpinner` property

On loading, it shows the Material UI CircularProgress animated icon.

#### `showBrokenImageOnFail` property

On failed load, it shows the Material UI BrokenImage icon.

## DynaResponsiveImage

### Props

```
IDynaResponsiveImageProps {
  className?: string;
  imgStyle?: React.CSSProperties;   // Image style (is div with background image)

  srcSet: {
    main: string;         // Use it as default image
    W192?: string;
    W384?: string;
    W768?: string;
    W1024?: string;
    W2048?: string;
    W4096?: string;
  };

  alt?: string;
  content?: JSX.Element;

  horizontalMirror?: boolean;
  verticalMirror?: boolean;

  blackAndWhite?: boolean;

  zoom?: {
    percentageX: number;  // Default is 50%. Examples: 0& 20% 100%
    percentageY: number;  // Default is 50%. Examples: 0& 20% 100%
    zoom: number;         // Default is 1. 1 1.2 1.5
  };

  onLoad?: () => void;
  onError?: (error: any) => void;
}
```

### `srcSet` property

Main is required, but all other resolutions are optional.

### `content` property

Allows rendering above the image. The container has the full width and height.

### `content` property

Allows zooming into the image on a specific point on the picture by percentage x/y.
This has a crop effect.

# Change log

## 1.2.3

- First version.
- Works with React 16

## 2.0.0

- Works with React 17

## 3.0.0

- Change: `<DynaImage>`'s `ACTUAL` mode is omitted.
- New: `<DynaResponseveImage>` SEO friendly and supports multiple responsive image versions.

## 4.0.0

- Switch to React V18