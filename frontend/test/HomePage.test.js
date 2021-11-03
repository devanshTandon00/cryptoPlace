import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../src/Pages/HomePage';
import Button from '../src/Components/Button';

describe('<HomePage />', () => {
  const wrapper = mount(<HomePage />);

  it('should render one HomePage component', () => {
    expect(wrapper.find('.HomePage')).toHaveLength(1);
  });

  it('should render one main-component component', () => {
    expect(wrapper.find('.main-component')).toHaveLength(1);
  });

  it('should render two <Button /> components', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
