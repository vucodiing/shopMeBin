import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import close from "./close.svg";
import eye from "./eye.svg";
function LoginAccount({
  login,
  mask,
  btn,
  buttonRegister,
  buttonLogin,
  hideAccount
}) {
  return (
    login && (
      <div>
        <div id="header-account">
          <img
            src={close}
            alt="icon close popup"
            id="account-close"
            onClick={hideAccount}
          />
          <div className="box-btn">
            <button id="btn-run" style={btn} />
            <button
              className="toggle-btn"
              id="login-btn"
              type="button"
              onClick={buttonLogin}
            >
              ĐĂNG NHẬP
            </button>
            <button
              className="toggle-btn"
              id="register-btn"
              type="button"
              onClick={buttonRegister}
            >
              ĐĂNG KÝ
            </button>
          </div>
          <form id="login">
            <div className="login-facebook">
              <button className="btn btn-primary">
                ĐĂNG NHẬP BẰNG FACEBOOK
              </button>
              <span>hoặc bằng cách khác</span>
              <hr />
            </div>
            <div className="login-use">
              <label>Số điện thoại</label>
              <input type="text" name="phoneNumber" id="name" />
              <span id="name-span" />
            </div>
            <div className="login-use repo">
              <label>Mật khẩu</label>
              <input type="text" name="password" id="password" />
              <img src={eye} alt="show password" />
              <span id="password-span" />
            </div>
            <div className="login-use-checkbox">
              <input id="checkbox" type="checkbox" />
              <label className="remember" htmlFor="checkbox">
                Ghi nhớ tài khoản{" "}
              </label>
            </div>
            <div className="login-submit">
              <button className="btn btn-primary" type="submit">
                ĐĂNG NHẬP
              </button>
            </div>
            <div className="login-law">
              <span>Bạn quên mật khẩu?</span>
              <Link to="/" style={{ color: "#007bff" }}>
                Lấy lại mật khẩu
              </Link>
            </div>
          </form>
        </div>
        <div id="mask-page" mask={mask}/>
      </div>
    )
  );
}

export default LoginAccount;
