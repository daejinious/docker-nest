import React from 'react';
import styled, { css } from 'styled-components';
import iconCheckbox from '../../../assets/images/icon_checkbox.png';

interface IProps {
  id: number;
  checked: boolean;
  onChange: (id: number, isChecked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

function CheckBox({ id, checked, onChange, label, disabled = false }: IProps) {
  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.checked);
  };

  return (
    <Container>
      <input type="checkbox" onChange={onChangeCheckbox} disabled={disabled} />
      <span
        className={`icon-checkbox ${checked ? 'checked' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      ></span>
      {label && <span className="checkbox-label">{label}</span>}
    </Container>
  );
}

const Container = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .icon-checkbox {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(${iconCheckbox});

    &.checked {
      background-position-y: -16px;
    }

    &.disabled {
      background-position-y: -32px;
    }
  }

  .checkbox-label {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.darkGray};
    margin-left: 8px;
  }
`;

export default CheckBox;
