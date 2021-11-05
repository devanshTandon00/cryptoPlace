import 'jsdom-global/register';
import "@babel/polyfill";
import React from 'react';
import { mount } from 'enzyme';
import ManageAccountPage from '../src/Pages/ManageAccountPage';
import Button from '../src/Components/Button';
import Input from '../src/Components/Input';

describe('<ManageAccountPage />', () => {
  const wrapper = mount(<ManageAccountPage />);

  it('should render one ManageAccountPage component', () => {
    expect(wrapper.find('.ManageAccountPage')).toHaveLength(1);
  });

  it('should render two <Input /> components', () => {
    expect(wrapper.find(Input)).toHaveLength(2);
  });

  it('should render one <Button /> component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
