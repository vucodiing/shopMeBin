import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginAccount from "../Account/LoginAccount";
import RegisterAccount from "../Account/RegisterAccount";
import Hotline from "../Search/Hotline";
import Search from "../Search/Search";
import "./Header.css";
function Header({ quantity }) {
  const [search, setSearch] = useState(false);
  const [hotline, setHotline] = useState(true);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [mask, setMask] = useState(false);
  const [btn, setBtn] = useState({ left: "0px" });
  const [menuMobile, setMenuMobile] = useState({ left: "-170px" });
  function showSearch() {
    setSearch((value) => !value);
    setHotline((value) => !value);
  }
  function showAccount() {
    setLogin(true);
    setRegister(false);
    setBtn({ left: "0px" });
    setMask(true);
  }
  function hideAccount() {
    setLogin(false);
    setRegister(false);
    setBtn({ left: "0px" });
    setMask(false);
  }
  function buttonRegister() {
    setBtn({ left: "125px" });
    setRegister(true);
    setLogin(false);
    setMask(true);
  }
  function buttonLogin() {
    setBtn({ left: "0px" });
    setRegister(false);
    setLogin(true);
    setMask(true);
  }
  function showMenuMobile() {
    setMenuMobile({ left: "0px" });
  }
  function hideMenuMobile() {
    setMenuMobile({ left: "-170px" });
  }

  return (
    <div className="header">
      <div className="header-top">
        <div className="container-fluid">
          <div className="container">
            <Hotline hotline={hotline} />
            <Search search={search} />
            <div className="icon">
              <div className="icon-gr-search" onClick={showSearch}>
                <div className="icon-search">
                  <svg
                    className="bi bi-search"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                  <span>Tìm kiếm</span>
                </div>
              </div>
              <div className="icon-account" onClick={showAccount}>
                <svg
                  className="bi bi-person-circle"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path
                    fillRule="evenodd"
                    d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  />
                </svg>
                <span>Tài khoản </span>
              </div>
              <div className="icon-cart">
                <Link to="/cart">
                  <svg
                    className="bi bi-cart2"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                  </svg>
                  <span>{quantity}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container-fluid">
          <div className="container">
            <div className="logo">
              <div className="menu-btn">
                <div id="menu-btnID" onClick={showMenuMobile}>
                  <svg
                    className="bi bi-list"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </div>
              </div>
              <Link to="/">
                <img src="../../logo-web.png" alt="logo trang web" />
              </Link>
            </div>
            <div id="menu-list" style={menuMobile}>
              <div className="icon-account-mobile">
                <div className="account-mobile">
                  <svg
                    className="bi bi-person-circle"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path
                      fillRule="evenodd"
                      d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                    />
                  </svg>
                  <span>Tài khoản</span>
                </div>
                <div className="logout-mobile">
                  <img src="../../logout.svg" alt="logout" />
                </div>
              </div>
              <div className="title">
                <span>DANH MỤC</span>
                <div id="list-close" onClick={hideMenuMobile}>
                  <svg
                    className="bi bi-arrow-left-square"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="list">
                <div className="list-link">
                  <ul>
                    <li>
                      <Link to="/boys">BÉ TRAI</Link>
                    </li>
                    <li>
                      <Link to="/girls">BÉ GÁI</Link>
                    </li>
                    <li>
                      <Link to="/sale">GIẢM GIÁ</Link>
                    </li>
                    <li>
                      <Link to="/blog">BÀI VIẾT</Link>
                    </li>
                    <li>
                      <Link to="/contact">LIÊN HỆ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginAccount
        login={login}
        showAccount={showAccount}
        btn={btn}
        buttonRegister={buttonRegister}
        buttonLogin={buttonLogin}
        hideAccount={hideAccount}
        mask={mask}
      />
      <RegisterAccount
        register={register}
        hideAccount={hideAccount}
        btn={btn}
        buttonRegister={buttonRegister}
        buttonLogin={buttonLogin}
        mask={mask}
      />
      {/* <div id="mask-page" mask={mask}/> */}
      <img id="myBtn" src="../../top.svg" alt="go to top" title="Go to top" />
    </div>
  );
}
export default Header;
