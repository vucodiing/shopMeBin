import React from "react";
// import Iframe from 'react-iframe';
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="hide-foot">
      <div className="register">
        <div className="container-fluid">
          <div className="text">
            <span>ĐĂNG KÝ NHẬN KHUYẾN MẠI</span>
          </div>
          <div className="input-btn">
            <form id="email-footer">
              <input
                type="text"
                name="eMail"
                placeholder="Địa chỉ email của bạn"
              />
              <button type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="title">
                <span>Thông tin cửa hàng</span>
              </div>
              <div className="title-text">
                <span>Địa chỉ: Tầng 402, tòa nhà M5, Mipec City View</span>
                <span>
                  {" "}
                  120 Đường Lê Xuân Điệp, Kiến Hưng, Hà Đông, Hà Nội{" "}
                </span>
              </div>
              <div className="title-text">
                <span>Giờ mở cửa: Từ 8h00 đến 22h00</span>
              </div>
              <div className="title-text">
                <span>Số điện thoại: 096.765.2510 / 0375.685.191</span>
              </div>
              <div className="title-text">
                <span>Email: shopmebin@gmail.com</span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="title">
                <span>Hỗ trợ khách hàng</span>
              </div>
              <div className="title-text">
                <Link to="/contact">Các câu hỏi thường gặp</Link>
              </div>
              <div className="title-text">
                <Link to="/contact">Gửi yêu cầu hỗ trợ</Link>
              </div>
              <div className="title-text">
                <Link to="/contact">Hướng dẫn đặt hàng</Link>
              </div>
              <div className="title-text">
                <Link to="/contact">Hướng dẫn đổi trả</Link>
              </div>
              <div className="title-text">
                <Link to="/contact">Phương thức vận chuyển</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="title">
                <span>Phương thức thanh toán</span>
              </div>
              <div className="img">
                <img src="../../zalo-icon.png" alt="thanh toán zalo" />
                <Link to="/contact">Thanh toán qua Zalo Pay</Link>
              </div>
              <div className="img">
                <img src="../../momo-icon.png" alt="thanh toán momo" />
                <Link to="/contact">Thanh toán qua Momo</Link>
              </div>
              <div className="img">
                <img src="../../bank.svg" alt="thanh toán ngân hàng" />
                <Link to="/contact">Thanh toán bằng chuyển khoản</Link>
              </div>
              <div className="img">
                <img src="../../money.svg" alt="thanh toán tiền mặt" />
                <Link to="/contact">Thanh toán bằng tiền mặt</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="title">
                <span>Facebook của chúng tôi</span>
              </div>
              <div>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthuydungwinter.cubin%2F&tabs=timeline&width=360&height=150&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width={360}
                  height={150}
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder={0}
                  allowTransparency="true"
                  allow="encrypted-media"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
