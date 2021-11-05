import 'jsdom-global/register';
import "@babel/polyfill";
import React from 'react';
import { mount } from 'enzyme';
import Register from '../src/Components/Authentication/Register';
import Button from '../src/Components/Button';
import Input from '../src/Components/Input';

describe('<Register />', () => {
  const wrapper = mount(<Register />);

  it('should render one Register component', () => {
    expect(wrapper.find('.Register')).toHaveLength(1);
  });

  it('should render three <Input /> components', () => {
    expect(wrapper.find(Input)).toHaveLength(3);
  });


  it('should render one <Button /> component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
