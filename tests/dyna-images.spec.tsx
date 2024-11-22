import {render} from '@testing-library/react';

import {
  DynaImage,
  EImageMode,
  DynaResponsiveImage,
} from "../src";

describe('Home', () => {
  it('rendered with minimum set of props', () => {
    const {asFragment} = render(
      (
        <DynaImage src="https://www.example.com/eifel.jpg"/>
      ),
      {},
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('render DynaImage', () => {
    const {asFragment} = render(
      (
        <DynaImage
          className="className"
          src="https://www.example.com/eifel.jpg"
          mode={EImageMode.FILL}
          alt="Profile photo"
          onLoad={() => undefined}
          onError={() => undefined}
        />
      ),
      {},
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('render DynaResponsiveImage', () => {
    const {asFragment} = render(
      (
        <DynaResponsiveImage
          className="className"
          srcSet={{main: "https://www.example.com/eifel.jpg"}}
          alt="Profile photo"
          onLoad={() => undefined}
          onError={() => undefined}
        />
      ),
      {},
    );
    expect(asFragment).toMatchSnapshot();
  });
});
