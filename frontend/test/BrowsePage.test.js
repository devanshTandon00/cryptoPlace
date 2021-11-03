import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import BrowsePage from '../src/Pages/BrowsePage';
import OptionsDropdown from '../src/Components/OptionsDropdown';

describe('<BrowsePage />', () => {
  const wrapper = mount(<BrowsePage />);

  it('should render one BrowsePage component', () => {
    expect(wrapper.find('.BrowsePage')).toHaveLength(1);
  });

  it('should render two <OptionsDropdown /> components', () => {
    expect(wrapper.find(OptionsDropdown)).toHaveLength(2);
  });

  it('should render one browse-options component', () => {
    expect(wrapper.find('.browse-options')).toHaveLength(1);
  });

  it('should render one browse-main component', () => {
    expect(wrapper.find('.browse-main')).toHaveLength(1);
  });

});
