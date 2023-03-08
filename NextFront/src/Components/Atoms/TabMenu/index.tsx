import React from 'react';
import styled from 'styled-components';

type Menu = {
  id: number;
  text: string;
  count?: number;
};

interface IProps {
  selectedTab: string;
  menus: Menu[];
}

function TabMenu({ selectedTab, menus }: IProps) {
  return (
    <Container>
      {menus.map(menu => (
        <li
          key={menu.id}
          className={selectedTab === menu.text ? 'selected' : ''}
        >
          <button type="button">
            <span>{menu.text}</span>
            {menu.count && <span className="count">{menu.count}</span>}
          </button>
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  border-bottom: 1px solid #e5e7eb;

  li {
    position: relative;

    button {
      padding: 0 15px;
      height: 48px;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.palette.darkGray};
    }

    .count {
      display: inline-block;
      font-size: 1.2rem;
      padding: 4px 8px;
      border-radius: 4px;
      margin-left: 4px;
      background-color: ${({ theme }) => theme.palette.lightGray2};
      margin-left: 7px;
    }

    &.selected {
      button {
        color: ${({ theme }) => theme.palette.blue};
      }

      .count {
        background-color: #e7f1ff;
        color: ${({ theme }) => theme.palette.blue};
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.palette.blue};
      }
    }
  }
`;

export default TabMenu;
