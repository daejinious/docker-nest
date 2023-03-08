import React from 'react';
import styled from 'styled-components';
import Gnb from './Gnb';
import Header from './Header';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <Container>
      <Header />
      <Gnb />
      {children}
    </Container>
  );
}

const Container = styled.div`
  padding-top: 60px;
  padding-left: 160px;

  .page-inner {
    padding: 32px 60px 32px 40px;
  }

  .section-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    &-left,
    &-right {
      display: flex;
      align-items: center;
    }

    .section-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-right: 8px;
    }

    .section-count {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.palette.gray};
    }
  }
`;

export default Layout;
