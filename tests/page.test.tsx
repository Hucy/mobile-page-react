import 'jest-styled-components';
import React from 'react';

import { mount, shallow } from 'enzyme';

import Page, { GlobalStyle, PageStyle } from '../src';

test('should render correctly', () => {
  const wrapper = mount(<Page />);
  expect(wrapper).toMatchSnapshot();
});

test('page child should be exist', () => {
  const wrapper = shallow(<Page />);
  expect(wrapper.children().length).toBe(2);
  expect(wrapper.find(PageStyle).exists()).toBe(true);
  expect(wrapper.find(GlobalStyle).exists()).toBe(true);
});
test('custom className should succeed', () => {
  const wrapper = shallow(<Page className="custom-class-name" />);
  expect(wrapper.find(PageStyle).hasClass('custom-class-name')).toBe(true);
});

test('page child should not be null', () => {
  const wrapper = shallow(<Page>ll</Page>);
  expect(wrapper.find(PageStyle).children().length).toBe(1);
});
