import React from 'react';
import { mount } from 'enzyme';

import CalcButton from '../calcbutton';

it('can assign extra class to button', () => {
  const element = mount(
    <CalcButton
      className="extra"
    >
      1
    </CalcButton>
  );

  expect(element.find('div').prop('className')).toMatch(/extra/);
});

it('call props.onClick when button be clicked', () => {
  const onClick = jest.fn();
  const element = mount(
    <CalcButton
      onClick={onClick}
    >
      1
    </CalcButton>
  );

  const button = element.find('div');
  button.simulate('click');

  expect(onClick).toBeCalled();
});
