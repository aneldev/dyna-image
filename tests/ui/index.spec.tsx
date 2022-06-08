import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as React from 'react';
import * as enzyme from 'enzyme';

import {
  DynaImage,
  EImageMode,
} from "../../src";

configure({adapter: new Adapter()});

describe('Home', () => {
  it('rendered with minimum set of props', () => {
    const wrapper = enzyme.shallow(
      (
        <DynaImage src="https://www.example.com/eifel.jpg"/>
      ),
      {},
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('rendered with all possible props', () => {
    const wrapper = enzyme.shallow(
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
    expect(wrapper).toMatchSnapshot();
  });
});
