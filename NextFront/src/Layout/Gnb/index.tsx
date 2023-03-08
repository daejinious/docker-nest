import React from 'react';
import styled from 'styled-components';
import gnb from '../../fixture/gnb';
import iconGnb from '../../assets/images/icon_gnb.png';
import { Link, useLocation } from 'react-router-dom';

function Gnb() {
  const location = useLocation();

  return (
    <Container className="gnb-menu">
      <nav>
        <ul>
          {gnb.map(menu => (
            <li key={menu.id}>
              <Link to={menu.path}>
                <span
                  className={`icon-gnb ${
                    location.pathname === menu.path ? 'active' : ''
                  }`}
                ></span>
                <span>{menu.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.aside`
  width: 160px;
  height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.palette.lightGray2};
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 90;

  nav {
    padding: 12px 0;

    ul li {
      & + li {
        margin-top: 4px;
      }

      a {
        display: flex;
        align-items: center;
        padding-left: 20px;
        height: 48px;

        .icon-gnb {
          display: inline-block;
          width: 24px;
          height: 24px;
          background: url(${iconGnb});
          background-position-x: 0;
          background-position-y: 0;
          background-repeat: no-repeat;
          margin-right: 16px;

          &.active {
            background-position-y: -24px;
          }
        }

        span {
          font-size: 1.4rem;
          color: ${({ theme }) => theme.palette.darkGray};
        }
      }

      &:nth-child(1) .icon-gnb {
        background-position-x: 0;
      }
      &:nth-child(2) .icon-gnb {
        background-position-x: -24px;
      }
      &:nth-child(3) .icon-gnb {
        background-position-x: -48px;
      }
      &:nth-child(4) .icon-gnb {
        background-position-x: -72px;
      }
      &:nth-child(5) .icon-gnb {
        background-position-x: -96px;
      }
      &:nth-child(6) .icon-gnb {
        background-position-x: -120px;
      }
      &:nth-child(7) .icon-gnb {
        background-position-x: -144px;
      }
    }
  }
`;

export default Gnb;
