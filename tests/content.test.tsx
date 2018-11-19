import 'jest-styled-components';
import React from 'react';

import { mount } from 'enzyme';

import { Content, FixedContent, MaxHeightContent } from '../src';

test('should render correctly', () => {
  const FixedWrapper = mount(<FixedContent />);
  expect(FixedWrapper).toMatchSnapshot();
  const MainWrapper = mount(<Content />);
  expect(MainWrapper).toMatchSnapshot();

  const MaxHeightContentWrapper = mount(<MaxHeightContent />);
  expect(MaxHeightContentWrapper).toMatchSnapshot();
});
