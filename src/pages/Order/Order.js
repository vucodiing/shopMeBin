import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
export default function Order({ cart, subTotal, order }) {
  return (
    <div className="container" id="order-content">
      <div className="text-link">
        <Link to="/order">Trang chủ ›&nbsp;</Link>
        <div className="min-box">Tiến hành đặt hàng</div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 col-lg-4">
          <div className="list-pay">
            <div className="list-title">ĐƠN HÀNG</div>
            <hr></hr>
            {cart.map((item) => (
              <div key={item.id}>
                <div className="item-pay">
                  <div className="item-nam">
                    {item.quantity}&nbsp;×&nbsp;{item.name}
                  </div>
                  <div className="item-money">
                    {item.priceNew
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                      })
                      .replace(".", ",")}{" "}
                    vnđ
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}

            <div className="item-sum">
              <div className="sum-name">TỔNG CỘNG</div>
              <div className="sum-money">
                {subTotal
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })
                  .replace("₫", "")}{" "}
                vnđ
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8">
          <div className="address-pay">
            <div className="address-title">THÔNG TIN GIAO HÀNG</div>
            <hr />
            <div id="new-zone" action="thanhtoan-datmua.html">
              <div className="login-use-new">
                <label htmlFor>
                  Họ và tên
                  <span style={{ color: "red", fontStyle: "normal" }}>
                    &nbsp;(*)
                  </span>
                </label>
                <input id="name-new" type="text" name="nameNew" />
              </div>
              <div className="login-use-new">
                <label htmlFor>
                  Số điện thoại
                  <span style={{ color: "red", fontStyle: "normal" }}>
                    &nbsp;(*)
                  </span>
                </label>
                <input type="text" name="phoneNew" id="phone-new" />
              </div>
              <div className="login-use-new">
                <label htmlFor>Email</label>
                <input type="text" name="emailNew" id="email-new" />
              </div>
              <div className="login-use-new">
                <label htmlFor>
                  Tỉnh/Thành phố
                  <span style={{ color: "red", fontStyle: "normal" }}>
                    &nbsp;(*)
                  </span>
                </label>
                <select id="input-user-city-province" name="city-province">
                  <option value={0}>&nbsp;Chọn Tỉnh/Thành Phố...</option>
                  <option value={1}>&nbsp;Thành phố Hà Nội</option>
                  <option value={79}>&nbsp;Thành phố Hồ Chí Minh</option>
                  <option value={31}>&nbsp;Thành phố Hải Phòng</option>
                  <option value={48}>&nbsp;Thành phố Đà Nẵng</option>
                  <option value={92}>&nbsp;Thành phố Cần Thơ</option>
                  <option value={2}>&nbsp;Tỉnh Hà Giang</option>
                  <option value={4}>&nbsp;Tỉnh Cao Bằng</option>
                  <option value={6}>&nbsp;Tỉnh Bắc Kạn</option>
                  <option value={8}>&nbsp;Tỉnh Tuyên Quang</option>
                  <option value={10}>&nbsp;Tỉnh Lào Cai</option>
                  <option value={11}>&nbsp;Tỉnh Điện Biên</option>
                  <option value={12}>&nbsp;Tỉnh Lai Châu</option>
                  <option value={14}>&nbsp;Tỉnh Sơn La</option>
                  <option value={15}>&nbsp;Tỉnh Yên Bái</option>
                  <option value={17}>&nbsp;Tỉnh Hoà Bình</option>
                  <option value={19}>&nbsp;Tỉnh Thái Nguyên</option>
                  <option value={20}>&nbsp;Tỉnh Lạng Sơn</option>
                  <option value={22}>&nbsp;Tỉnh Quảng Ninh</option>
                  <option value={24}>&nbsp;Tỉnh Bắc Giang</option>
                  <option value={25}>&nbsp;Tỉnh Phú Thọ</option>
                  <option value={26}>&nbsp;Tỉnh Vĩnh Phúc</option>
                  <option value={27}>&nbsp;Tỉnh Bắc Ninh</option>
                  <option value={30}>&nbsp;Tỉnh Hải Dương</option>
                  <option value={33}>&nbsp;Tỉnh Hưng Yên</option>
                  <option value={34}>&nbsp;Tỉnh Thái Bình</option>
                  <option value={35}>&nbsp;Tỉnh Hà Nam</option>
                  <option value={36}>&nbsp;Tỉnh Nam Định</option>
                  <option value={37}>&nbsp;Tỉnh Ninh Bình</option>
                  <option value={38}>&nbsp;Tỉnh Thanh Hóa</option>
                  <option value={40}>&nbsp;Tỉnh Nghệ An</option>
                  <option value={42}>&nbsp;Tỉnh Hà Tĩnh</option>
                  <option value={44}>&nbsp;Tỉnh Quảng Bình</option>
                  <option value={45}>&nbsp;Tỉnh Quảng Trị</option>
                  <option value={46}>&nbsp;Tỉnh Thừa Thiên Huế</option>
                  <option value={49}>&nbsp;Tỉnh Quảng Nam</option>
                  <option value={51}>&nbsp;Tỉnh Quảng Ngãi</option>
                  <option value={52}>&nbsp;Tỉnh Bình Định</option>
                  <option value={54}>&nbsp;Tỉnh Phú Yên</option>
                  <option value={56}>&nbsp;Tỉnh Khánh Hòa</option>
                  <option value={58}>&nbsp;Tỉnh Ninh Thuận</option>
                  <option value={60}>&nbsp;Tỉnh Bình Thuận</option>
                  <option value={62}>&nbsp;Tỉnh Kon Tum</option>
                  <option value={64}>&nbsp;Tỉnh Gia Lai</option>
                  <option value={66}>&nbsp;Tỉnh Đắk Lắk</option>
                  <option value={67}>&nbsp;Tỉnh Đắk Nông</option>
                  <option value={68}>&nbsp;Tỉnh Lâm Đồng</option>
                  <option value={70}>&nbsp;Tỉnh Bình Phước</option>
                  <option value={72}>&nbsp;Tỉnh Tây Ninh</option>
                  <option value={74}>&nbsp;Tỉnh Bình Dương</option>
                  <option value={75}>&nbsp;Tỉnh Đồng Nai</option>
                  <option value={77}>&nbsp;Tỉnh Bà Rịa - Vũng Tàu</option>
                  <option value={80}>&nbsp;Tỉnh Long An</option>
                  <option value={82}>&nbsp;Tỉnh Tiền Giang</option>
                  <option value={83}>&nbsp;Tỉnh Bến Tre</option>
                  <option value={84}>&nbsp;Tỉnh Trà Vinh</option>
                  <option value={86}>&nbsp;Tỉnh Vĩnh Long</option>
                  <option value={87}>&nbsp;Tỉnh Đồng Tháp</option>
                  <option value={89}>&nbsp;Tỉnh An Giang</option>
                  <option value={91}>&nbsp;Tỉnh Kiên Giang</option>
                  <option value={93}>&nbsp;Tỉnh Hậu Giang</option>
                  <option value={94}>&nbsp;Tỉnh Sóc Trăng</option>
                  <option value={95}>&nbsp;Tỉnh Bạc Liêu</option>
                  <option value={96}>&nbsp;Tỉnh Cà Mau</option>
                </select>
              </div>
              <div className="login-use-new">
                <label htmlFor>
                  Quận/Huyện
                  <span style={{ color: "red", fontStyle: "normal" }}>
                    &nbsp;(*)
                  </span>
                </label>
                <select id="input-user-district" name="district">
                  <option value={0}>&nbsp;Chọn Quận/Huyện...</option>
                </select>
              </div>
              <div className="login-use-new">
                <label htmlFor>
                  Phường/Xã
                  <span style={{ color: "red", fontStyle: "normal" }}>
                    &nbsp;(*)
                  </span>
                </label>
                <select id="input-user-commune" name="commune">
                  <option value={0}>&nbsp;Chọn Phường/Xã... </option>
                </select>
              </div>
              <div className="login-use-new">
                <label htmlFor>
                  Địa chỉ
                  <span style={{ color: "red", fontStyle: "normal" }}>
                    &nbsp;(*)
                  </span>
                </label>
                <textarea
                  name="addressNew"
                  id="address-zone-new"
                  defaultValue={""}
                />
              </div>
              <div className="this-add" onClick={order}>
                <button onClick={order}>GIAO ĐẾN ĐỊA CHỈ NÀY</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
