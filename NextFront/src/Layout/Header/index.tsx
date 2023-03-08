import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import iconSearchGray from '../../assets/images/icon_search_gray.png';
import iconSelectboxArrow from '../../assets/images/icon_selectbox_arrow.png';

function Header() {
  const [searchText, setSearchText] = useState('');

  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const [visibleUserMenu, setVisibleUserMenu] = useState(false);

  return (
    <Container className="common-header">
      <Link to="/">
        <h1 className="logo">
          <img src={logo} alt="싱크사인 로고" />
        </h1>
      </Link>
      <div className="user-wrap">
        <div className="search-input">
          <div className="search-input-wrap">
            <input
              onChange={onChangeSearchText}
              type="text"
              placeholder="search"
              title="검색어 입력"
            />
          </div>
          {searchText && (
            <div className="search-list">
              <h6>최근검색</h6>
              <button className="item" type="button">
                뉴브랜드
              </button>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="user">
          <div
            className="name"
            onClick={() => setVisibleUserMenu(visible => !visible)}
          >
            <div className="photo"></div>
            <p>뉴브랜드</p>
          </div>
          {visibleUserMenu && (
            <div className="user-menu">
              <Link className="item" to="/">
                회원정보 변경
              </Link>
              <Link className="item" to="/">
                비밀번호 변경
              </Link>
              <button className="item" type="button">
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  box-shadow: 0 2px 1px rgb(0 0 0 / 4%);
  background-color: #fff;

  .logo {
    margin-left: 20px;
  }

  .user-wrap {
    padding-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-input {
      position: relative;

      &-wrap {
        position: relative;
        box-sizing: border-box;
        width: 200px;
        height: 32px;

        input {
          background: url(${iconSearchGray}) 10px 50% no-repeat;
          background-color: #f5f5f5;
          font-size: 1.4rem;
          font-weight: 400;

          padding: 0 28px 0 38px;
          width: 100%;
          height: 100%;
          line-height: 38px;
          border: 1px solid #e5e7eb;
          color: #353d4a;
          border-radius: 8px;
          box-sizing: border-box;
          transition: all 0.2s;

          &::placeholder {
            color: ${({ theme }) => theme.palette.gray};
          }
        }
      }

      .search-list {
        opacity: 1;
        position: absolute;
        top: 36px;
        left: 0;
        right: 0;
        z-index: 5;
        padding: 12px 0;
        border-radius: 8px;
        background: #fff;
        border: 1px solid #f5f5f5;
        transition: 0.2s;
        box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
        /* pointer-events: none; */

        h6 {
          padding: 4px 0 12px 16px;
          line-height: 20px;
          color: #6d7683;
          font-size: 1.2rem;
          font-weight: 400;
        }

        .item {
          display: block;
          width: 100%;
          padding: 0 20px;
          height: 40px;
          line-height: 40px;
          color: #6d7683;
          font-size: 1.4rem;
          font-weight: 500;
          text-align: left;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .focus .search-list {
        display: block;
      }
    }

    .divider {
      margin: 0 20px;
      width: 1px;
      height: 20px;
      background: #e5e7eb;
    }

    .user {
      position: relative;
      padding-right: 26px;
      background: url(${iconSelectboxArrow}) 100% 50% no-repeat;

      .name {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .photo {
          overflow: hidden;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #eee;
        }

        p {
          line-height: 32px;
          margin-left: 12px;
          font-size: 1.4rem;
          font-weight: 400;
        }
      }

      .user-menu {
        margin-top: 6px;
        transform: translateX(-50%);
        width: 140px;
        position: absolute;
        top: 36px;
        left: 50%;
        right: 0;
        z-index: 5;
        padding: 12px 0;
        border-radius: 8px;
        background: #fff;
        border: 1px solid #f5f5f5;
        transition: 0.2s;
        box-shadow: 0 4px 4px rgb(0 0 0 / 15%);

        .item {
          display: block;
          width: 100%;
          padding: 0 20px;
          height: 40px;
          line-height: 40px;
          color: #6d7683;
          font-size: 1.4rem;
          font-weight: 500;
          text-align: left;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          & + .item {
            margin-top: 4px;
          }
        }
      }
    }
  }
`;

export default Header;
