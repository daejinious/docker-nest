import React from 'react';
import styled from 'styled-components';
import iconSearch from '../../../assets/images/icon_search.png';

interface IProps {
  width?: string;
  placeholder?: string;
}

function SearchInput({ width = '200px', placeholder }: IProps) {
  return (
    <Container width={width}>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
}

const Container = styled.div<{ width?: string }>`
  input {
    width: ${({ width }) => width};
    height: 40px;
    box-sizing: border-box;
    padding-left: 48px;
    background: url(${iconSearch}) 16px 50% no-repeat;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.palette.lightGray};
    color: ${({ theme }) => theme.palette.black};

    &::placeholder {
      color: ${({ theme }) => theme.palette.gray};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.palette.lightBlue};
    }
  }
`;

export default SearchInput;
