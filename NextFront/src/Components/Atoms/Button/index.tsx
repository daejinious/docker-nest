import React from 'react';
import styled, { css, CSSProperties, DefaultTheme } from 'styled-components';
import { Colors } from '../../../fixture/theme';

type ButtonSize = 'large' | 'medium' | 'small';

interface IProps {
  width?: string;
  size?: ButtonSize;
  color?: Colors;
  outline?: Colors;
  style?: CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({
  width = '130px',
  size = 'medium',
  color = 'blue',
  outline,
  style,
  onClick = () => {},
  children,
}: IProps) {
  return (
    <Container
      width={width}
      size={size}
      color={color}
      outline={outline}
      style={style}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

const sizes = {
  large: {
    height: '4.4rem',
    fontSize: '1.6rem',
  },
  medium: {
    height: '4rem',
    fontSize: '1.4rem',
  },
  small: {
    height: '3.2rem',
    fontSize: '1.4rem',
  },
};

const Container = styled.button<{
  width: string;
  size: ButtonSize;
  color: Colors;
  outline?: Colors;
  style?: CSSProperties;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  width: ${({ width }) => width};

  ${({ theme, color }: { theme: DefaultTheme; color: Colors }) => {
    const buttonColor = theme.palette[color];
    const fontColor =
      color === 'lightGray'
        ? theme.palette.black
        : color === 'lightGray2'
        ? theme.palette.gray
        : '#fff';

    return css`
      background-color: ${buttonColor};
      border-color: ${buttonColor};
      color: ${fontColor};
    `;
  }}

  ${({ size }: { size: ButtonSize }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}

  ${({ theme, outline }: { theme: DefaultTheme; outline?: Colors }) => {
    if (!outline) return null;

    const borderColor = theme.palette[outline];
    const fontColor =
      outline === 'lightGray' || outline === 'lightGray2'
        ? theme.palette.black
        : borderColor;

    return css`
      border-color: ${borderColor};
      color: ${fontColor};
    `;
  }}

  .icon {
    width: 24px;
  }

  span {
    margin-left: 4px;
  }
`;

export default Button;
