import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import CreateCollectiblePage from '../src/Pages/CreateCollectiblePage';
import Button from '../src/Components/Button';
import Input from '../src/Components/Input';

describe('<CreateCollectiblePage />', () => {
  const wrapper = mount(<CreateCollectiblePage />);

  it('should render one CreateCollectiblePage component', () => {
    expect(wrapper.find('.CreateCollectiblePage')).toHaveLength(1);
  });

  it('should render three <Input /> components', () => {
    expect(wrapper.find(Input)).toHaveLength(3);
  });

  it('should render one <Button /> component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
