import React, { Fragment, SFC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,body{
    margin:0;
    padding:0;
  }
`;

export const MaxHeightContent = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const PageStyle = styled(MaxHeightContent)`
  position: absolute;
  width: 100%;
`;

interface IPage {
  className?: string;
}

const Page: SFC<IPage> = ({ className, children }) => (
  <Fragment>
    <GlobalStyle />
    <PageStyle className={className}>{children}</PageStyle>
  </Fragment>
);

export default Page;

export const FixedContent = styled.div`
  position: absolute;
  z-index: 1000;
`;

export const MainContent = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  flex: 1;
  -webkit-overflow-scrolling: touch;
`;
