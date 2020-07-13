import "jest";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {DynaImage} from '../../src';

// help: https://facebook.github.io/jest/docs/expect.html

describe('Simple unit test', () => {
  it('should import the component', () => {
    expect(DynaImage).not.toBe(undefined);
  });
});
