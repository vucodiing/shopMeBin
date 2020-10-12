import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Contact.css";
function Contact() {
  document.title = "LIÊN HỆ";
  return (
      <div>
      {/* <FilterMobile /> */}
        <div className="container" id="about-content">
          <div className="text-link">
              <Link to="/">Trang chủ ›&nbsp;</Link>
            
            <div className="min-box">Liên hệ</div>
          </div>
        </div>
        <div className="container">
          <div className="title-top">
            <p className="mobile">BinMother</p>
            <p className="mobile">ĐẸP CHO BÉ, TỐT CHO MẸ</p>
            <p className="desktop">BinMother - ĐẸP CHO BÉ, TỐT CHO MẸ</p>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0373932398034!2d105.78919617008782!3d20.951013432666763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adb298ee59bd%3A0x699b8daf626f4564!2zTWlwZWMgS2nhur9uIEjGsG5nIEjDoCDEkMO0bmc!5e0!3m2!1svi!2s!4v1595555524707!5m2!1svi!2s"
                width={600}
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen="allowfullscreen"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="contact">
                <div className="title-head">
                  <p>Địa chỉ</p>
                </div>
                <div className="title-body">
                  <p>Tầng 402, tòa nhà M5, Mipec City View</p>
                  <p>120 Đường Lê Xuân Điệp, Kiến Hưng, Hà Đông, Hà Nội</p>
                </div>
              </div>
              <div className="contact">
                <div className="title-head">
                  <p>Giờ mở cửa</p>
                </div>
                <div className="title-body">
                  <p>Từ 8h đến 22h hàng ngày</p>
                  <p>Làm việc cả Thứ 7 và Chủ Nhật</p>
                </div>
              </div>
              <div className="contact">
                <div className="title-head">
                  <p>Số điện thoại</p>
                </div>
                <div className="title-body">
                  <p>096.765.2510</p>
                  <p>0375.685.191</p>
                </div>
              </div>
              <div className="contact">
                <div className="title-head">
                  <p>Email</p>
                </div>
                <div className="title-body">
                  <p>binmother@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="title-bottom">
            <p>
              BinMother xin chân thành cảm ơn Khách hàng đã tin yêu và ủng hộ
            </p>
          </div>
        </div>
        <Footer />
      </div>
 
  );
}
export default Contact;
