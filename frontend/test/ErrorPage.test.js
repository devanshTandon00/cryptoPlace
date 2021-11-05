import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import ErrorPage from '../src/Pages/ErrorPage';
import Button from '../src/Components/Button';

describe('<ErrorPage />', () => {
  const wrapper = mount(<ErrorPage />);

  it('should render one ErrorPage component', () => {
    expect(wrapper.find('.ErrorPage')).toHaveLength(1);
  });

  it('should render one main-component component', () => {
    expect(wrapper.find('.main-component')).toHaveLength(1);
  });

  it('should render two <Button /> components', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
