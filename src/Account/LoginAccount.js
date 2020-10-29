import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import close from "./close.svg";
import eye from "./eye.svg";
import { useForm } from "react-hook-form";
function LoginAccount({
  login,
  mask,
  btn,
  buttonRegister,
  buttonLogin,
  hideAccount,
}) {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);}
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
          <form onSubmit={handleSubmit(onSubmit)} id="login">
            <div className="login-facebook">
              <button className="btn btn-primary">
                ĐĂNG NHẬP BẰNG FACEBOOK
              </button>
              <span>hoặc bằng cách khác</span>
              <hr />
            </div>
            <div className="login-use">
              <label>Số điện thoại</label>
              <input
                type="tel"
                name="numberMobile"
                ref={register({ required: true, maxLength: 11, minLength: 8 })}
              />
              {errors.numberMobile && <p className="error-messenger">Số điện thoại 9-10 chữ số</p>}
            </div>
            <div className="login-use repo">
              <label>Mật khẩu</label>
              <input
                type="tel"
                name="password"
                ref={register({ required: true})}
              />
              {/* <input type="text" name="password" id="password" /> */}
              <img src={eye} alt="show password" />
              {errors.password && <p className="error-messenger">Mật khẩu không được để trống</p>}
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
        <div id="mask-page" mask={mask} />
      </div>
    )
  );
}

export default LoginAccount;
