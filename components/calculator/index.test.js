import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './index';

describe('Calculator', () => {
  let component;

  const requiredProps = overrides => {
    const props = {
      oneRM: () => {},
      ...overrides
    };

    return props;
  };

  beforeEach(() => {
    component = shallow(<Calculator {...requiredProps()} />);
  });

  it('should exist as a <View>', () => {
    expect(component.exists()).toBe(true);
  });
});
