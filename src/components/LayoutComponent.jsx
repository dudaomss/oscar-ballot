import React from 'react';
import { Layout } from 'antd';
import ImageOscar from './ImageOscar';
import ContentComponent from './ContentComponent';
import styled from 'styled-components';
const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {
  return (
    <LayoutStyle>
      <HeaderStyle>
        <ImageOscar />
      </HeaderStyle>
      <StyledContent>
        <ContentComponent />
      </StyledContent>
      {/* <Footer>
        ©{new Date().getFullYear()} Created by @minjimineira
      </Footer> */}
    </LayoutStyle>
  );
};

export default LayoutComponent;

const HeaderStyle = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const LayoutStyle = styled(Layout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled(Content)`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 100px;
`;