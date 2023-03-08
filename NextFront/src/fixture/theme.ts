export type Colors =
  | 'white'
  | 'blue'
  | 'lightBlue'
  | 'red'
  | 'black'
  | 'darkGray'
  | 'gray'
  | 'lightGray'
  | 'lightGray2';

// eslint-disable-next-line no-unused-vars
export const palette: { [key in Colors]: string } = {
  white: '#fff',
  blue: '#1367f4',
  lightBlue: '#A1C2FB',
  red: '#EB5656',
  black: '#353d4a',
  darkGray: '#6d7683',
  gray: '#AEB3BA',
  lightGray: '#e5e7eb',
  lightGray2: '#f5f5f5',
};
