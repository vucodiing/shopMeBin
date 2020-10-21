import React, { useRef } from "react";
import { Link } from "react-router-dom";
import close from "./close.svg";
import "./Account.css";
import eye from "./eye.svg";
import { useForm } from "react-hook-form";
function RegisterAccount({
  registerAc,
  mask,
  btn,
  buttonRegister,
  buttonLogin,
  hideAccount,
}) {
  const { register, errors, handleSubmit, watch } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  const password = useRef({});
  password.current = watch("password", "");
  return (
    registerAc && (
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
          <form onSubmit={handleSubmit(onSubmit)} id="register">
            <div className="login-facebook">
              <button className="btn btn-primary">ĐĂNG KÝ BẰNG FACEBOOK</button>
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
              {errors.numberMobile && <p>Số điện thoại 9-10 chữ số</p>}
            </div>
            <div className="login-use">
              <label>Email</label>
              <input
                name="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />

              {errors.email?.type === "required" && (
                <p>Email không được để trống</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>Email không đúng định dạng</p>
              )}
            </div>
            <div className="login-use repo">
              <label>Mật khẩu</label>
              <input
                type="password"
                name="password"
                ref={register({ required: true })}
              />
              <img src={eye} alt="show password" />
              {errors.password && <p>Mật khẩu không được để trống</p>}
            </div>
            <div className="login-use repo">
              <label>Nhập lại mật khẩu</label>
              <input
                type="password"
                name="passwordConfirm"
                ref={register({
                  validate: (value) => value === password.current|| "Nhập lại mật khẩu"
                })}
              />
              <img src={eye} alt="show password" />
              {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
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
        <div id="mask-page" mask={mask} />
      </div>
    )
  );
}

export default RegisterAccount;
