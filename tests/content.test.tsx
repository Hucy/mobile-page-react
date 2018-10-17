import 'jest-styled-components';
import React from 'react';

import { mount } from 'enzyme';

import { FixedContent, MainContent, MaxHeightContent } from '../src';

test('should render correctly', () => {
  const FixedWrapper = mount(<FixedContent />);
  expect(FixedWrapper).toMatchSnapshot();
  const MainWrapper = mount(<MainContent />);
  expect(MainWrapper).toMatchSnapshot();

  const MaxHeightContentWrapper = mount(<MaxHeightContent />);
  expect(MaxHeightContentWrapper).toMatchSnapshot();
});
