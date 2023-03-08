import React, { useState } from 'react';
import styled from 'styled-components';
import iconSelectboxArrow from '../../../assets/images/icon_selectbox_arrow.png';

type Option = {
  id: number;
  text: string;
};

interface IProps {
  outline?: boolean;
  optionAlign?: 'left' | 'right';
  selectedItem: string;
  optionList: Option[];
}

function SelectBox({
  outline = true,
  optionAlign = 'left',
  selectedItem,
  optionList,
}: IProps) {
  const [visibleOptions, setVisibleOptions] = useState(false);

  const onClickSelectBox = () => {
    setVisibleOptions(visible => !visible);
  };

  const onClickOption = () => {
    setVisibleOptions(false);
  };

  return (
    <Container className={`${outline ? '' : 'no-outline'}`}>
      <div className="selected-item">
        <button
          type="button"
          onClick={onClickSelectBox}
          className={visibleOptions ? 'active' : ''}
        >
          <span>{selectedItem}</span>
          <span className="icon-selectbox-arrow"></span>
        </button>
      </div>
      <ul
        className={`option-list ${visibleOptions ? 'visible' : ''} ${
          optionAlign === 'right' ? 'align-right' : ''
        }`}
      >
        {optionList.map(option => (
          <li key={option.id}>
            <button type="button" onClick={onClickOption}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: inline-block;

  .selected-item {
    button {
      height: 3.4rem;
      display: inline-flex;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.palette.lightGray};
      border-radius: 6px;
      padding: 0 12px;
      cursor: pointer;

      span {
        display: inline-block;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.palette.darkGray};

        &.icon-selectbox-arrow {
          width: 20px;
          height: 20px;
          background: url(${iconSelectboxArrow});
          margin-left: 10px;
        }
      }

      &:hover {
        border: 1px solid ${({ theme }) => theme.palette.lightBlue};
      }

      &.active {
        border: 1px solid ${({ theme }) => theme.palette.lightBlue};
      }
    }
  }

  .option-list {
    padding: 15px 0;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 36px;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: all 0.1s ease;
    pointer-events: none;

    li {
      min-width: 140px;

      button {
        width: 100%;
        line-height: 40px;
        padding: 0 15px;
        text-align: left;

        &:hover {
          background-color: ${({ theme }) => theme.palette.lightGray2};
        }
      }
    }

    &.align-right {
      left: auto;
      right: 0;
    }

    &.visible {
      display: block;
      top: 46px;
      opacity: 1;
      z-index: 10;
      pointer-events: auto;
    }
  }

  &.no-outline {
    .selected-item {
      button {
        height: 24px;
        border-color: transparent;
        padding: 0;
      }
    }

    .option-list {
      top: 24px;

      &.visible {
        top: 34px;
      }
    }
  }
`;

export default SelectBox;
