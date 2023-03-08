import React from 'react';
import styled, { css } from 'styled-components';
import iconRadio from '../../../assets/images/icon_radio.png';
import iconRadioCheck from '../../../assets/images/icon_radio_check.png';

interface IProps {
  type?: 'default' | 'check';
  name?: string;
  selected: boolean;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
}

function Radio({
  type = 'default',
  name,
  selected,
  onChange,
  label,
  disabled = false,
}: IProps) {
  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container type={type}>
      <input
        name={name}
        type="radio"
        onChange={onChangeCheckbox}
        disabled={disabled}
      />
      <span
        className={`icon-radio ${selected ? 'selected' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      ></span>
      {label && <span className="radio-label">{label}</span>}
    </Container>
  );
}

const Container = styled.label<{ type: 'default' | 'check' }>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .icon-radio {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: ${({ type }) =>
      `url(${type === 'default' ? iconRadio : iconRadioCheck})`};

    &.selected {
      background-position-y: -20px;
    }

    &.disabled {
      background-position-y: -40px;
    }
  }

  .radio-label {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.darkGray};
    margin-left: 8px;
  }
`;

export default Radio;
