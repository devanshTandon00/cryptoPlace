import 'jsdom-global/register';
import "@babel/polyfill";
import React from 'react';
import { mount } from 'enzyme';
import Login from '../src/Components/Authentication/Login';
import Button from '../src/Components/Button';
import Input from '../src/Components/Input';

describe('<Login />', () => {
  const wrapper = mount(<Login />);

  it('should render one Login component', () => {
    expect(wrapper.find('.Login')).toHaveLength(1);
  });

  it('should render two <Input /> components', () => {
    expect(wrapper.find(Input)).toHaveLength(2);
  });


  it('should render one <Button /> component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
