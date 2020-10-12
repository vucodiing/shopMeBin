import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import calender from "./calendar.svg";
import writer from "./write.svg";
import doc1 from "./doc1.jpg";
import doc2 from "./doc2.jpg";
import doc3 from "./doc3.jpg";
import "./Blog.css";
function Blog() {
  document.title = "BÀI VIẾT";
  return (
    <div>
      {/* <FilterMobile /> */}
      <div className="container" id="blog-content">
        <div className="text-link">
        <Link to="/">Trang chủ ›&nbsp;</Link>
          
          <div className="min-box">Bài viết</div>
        </div>
      </div>
      <div className="container">
        <div className="zone-doc">
          <div className="doc">
            <div className="img-doc">
              <img src={doc1} alt="ảnh bài viết" />
            </div>
            <div className="title-doc">
              <div className="title-main">
                <p>Những lưu ý quan trọng khi mua sắm đồ sơ sinh cho bé</p>
              </div>
              <div className="title-note">
                <div className="note">
                  <img src={calender} alt="icon lịch" />
                  <span>07/06/2020</span>
                </div>
                <div className="note">
                  {" "}
                  <img src={writer} alt="icon bút" />
                  <span>Admin</span>
                </div>
              </div>
            </div>
            <div className="content-doc">
              <p>
                Chuẩn bị đồ sơ sinh là việc làm vô cùng tỉ mỉ, quan trọng, những
                người chưa từng sinh con, các ông bố thì nghĩ nó đơn giản, cứ
                đưa tiền cho vợ là có thể xong việc. Nhưng cũng ít người hiểu
                được những khó khăn vất vả mà các mẹ gặp phải khi mua đồ sơ sinh
                cho con. Đặc biệt các mẹ còn bận công việc trên cơ quan lại
                kiêng khem kỹ không dám mua sớm...
              </p>
            </div>
            <Link to="/blog1/Nhung-luu-y-quan-trong-khi-mua-sam-do-so-sinh-cho-be">
              <button>Đọc tiếp »</button>
            </Link>
          </div>
          <hr />
          <div className="doc">
            <div className="img-doc">
              <img src={doc2} alt="ảnh bài viết" />
            </div>
            <div className="title-doc">
              <div className="title-main">
                <p>Cách chọn đồ cho bé trai thông minh nhất</p>
              </div>
              <div className="title-note">
                <div className="note">
                  <img src={calender} alt="icon lịch" />
                  <span>25/10/2020</span>
                </div>
                <div className="note">
                  {" "}
                  <img src={writer} alt="icon bút" />
                  <span>Admin wife</span>
                </div>
              </div>
            </div>
            <div className="content-doc">
              <p>
                Mẹ nên lựa chọn những bộ quần áo có chất liệu tốt. Điển hình
                nhất là các sản phẩm được làm từ chất liệu cotton 100% hoặc sợi
                len mềm, vải sợi trẻ. Những chất liệu này sẽ mang lại cảm giác
                thoải mái, dễ chịu êm ái khi mặc. Đặc biệt, chúng còn giúp bảo
                vệ làn da cho trẻ không bị kích ứng khi diện những trang phục
                được làm từ chất liệu tốt...
              </p>
            </div>
            <Link to="/blog/Cach-chon-do-cho-be-trai-thong-minh-nhat">
              <button>Đọc tiếp »</button>
            </Link>
          </div>
          <hr />
          <div className="doc">
            <div className="img-doc">
              <img src={doc3} alt="ảnh bài viết" />
            </div>
            <div className="title-doc">
              <div className="title-main">
                <p>Lời khuyên hữu ích khi chọn mua đầm bé gái 1 tuổi</p>
              </div>
              <div className="title-note">
                <div className="note">
                  <img src={calender} alt="icon lịch bieu" />
                  <span>07/11/2020</span>
                </div>
                <div className="note">
                  {" "}
                  <img src={writer} alt="icon bút" />
                  <span>Admin</span>
                </div>
              </div>
            </div>
            <div className="content-doc">
              <p>
                Là bố mẹ chắc chắn ai cũng muốn những điều tốt nhất cho con
                mình. Không ít gia đình có điều kiện đầu tư khá nhiều vào mảng
                trang phục làm điệu cho con, đặc biệt là bé gái. Những chiếc đầm
                bé gái 1 tuổi hiện nay có mẫu mã và kiểu dáng đa dạng không kém
                đầm người lớn....
              </p>
            </div>
            <Link to="/blog/Loi-khuyen-huu-ich-khi-chon-mua-dam-be-gai-1-tuoi">
              <button>Đọc tiếp »</button>
            </Link>
          </div>
        </div>
        <div className="next-page">
          <button id="btn1">1</button>
          <button id="btn2">2</button>
          <button id="btn3">3</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Blog;
