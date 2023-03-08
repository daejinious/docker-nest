import React from 'react';
import styled, { css } from 'styled-components';
import iconPaginatePrev from '../../../assets/images/icon_paginate_prev_24.png';
import iconPaginateNext from '../../../assets/images/icon_paginate_next_24.png';

function Paginate() {
  return (
    <Container>
      <a className="prev"></a>
      <a className="active">1</a>
      <a>2</a>
      <a>3</a>
      <a>4</a>
      <a>5</a>
      <a className="next"></a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;

  a {
    display: block;
    width: 24px;
    height: 24px;
    line-height: 2;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.gray};
    text-align: center;
    cursor: pointer;

    &.next,
    &.prev {
      border-radius: 4px;
      background-color: ${({ theme }) => theme.palette.lightGray2};

      &:hover {
        background-position: -24px 0;
      }
    }

    &.next {
      background-image: url(${iconPaginateNext});
    }

    &.prev {
      background-image: url(${iconPaginatePrev});
    }

    &.active {
      color: #1a1f27;
    }

    &:hover {
      color: ${({ theme }) => theme.palette.darkGray};
    }

    & + a {
      margin-left: 8px;
    }
  }
`;

export default Paginate;
