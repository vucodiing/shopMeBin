import React from "react";
import { Link } from "react-router-dom";
import close from "./close.svg";
import "./Account.css";
import eye from "./eye.svg";
function RegisterAccount({
  register,
  mask,
  btn,
  buttonRegister,
  buttonLogin,
  hideAccount
}) {
  return (
    register && (
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
          <form id="register">
            <div className="login-facebook">
              <button className="btn btn-primary">ĐĂNG KÝ BẰNG FACEBOOK</button>
              <span>hoặc bằng cách khác</span>
              <hr />
            </div>
            <div className="login-use">
              <label>Số điện thoại</label>
              <input type="text" name="phonenumber" id="name-register" />
              <span id="name-register-span" />
            </div>
            <div className="login-use">
              <label>Email</label>
              <input type="text" name="email" id="email" />
              <span id="email-span"></span>
            </div>
            <div className="login-use repo">
              <label>Mật khẩu</label>
              <input type="text" name="passWord" id="password-register" />
              <img src={eye} alt="show password" />
              <span id="password-register-span" />
            </div>
            <div className="login-use repo">
              <label>Nhập lại mật khẩu</label>
              <input type="text" name="passwordAgain" id="pass-again" />
              <img src={eye} alt="show password" />
              <span id="pass-again-span"> </span>
            </div>
            <div className="login-submit">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ marginTop: 5 }}
              >
                TẠO TÀI KHOẢN
              </button>
            </div>
            <div className="login-law">
              <span>
                Khi bấm TẠO TÀI KHOẢN, bạn đã đồng ý với các{" "}
                <Link to="/" style={{ color: "red" }}>
                  Quy định
                </Link>{" "}
                và{" "}
                <Link to="/" style={{ color: "red" }}>
                  Chính sách
                </Link>{" "}
                của Cửa hàng
              </span>
            </div>
          </form>
        </div>
        <div id="mask-page" mask={mask}/>
      </div>
    )
  );
}

export default RegisterAccount;
