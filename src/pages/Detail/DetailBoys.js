import React, { useEffect, useState } from "react";
import tick from "../../icons/tick.png";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import InnerImageZoom from "react-inner-image-zoom";
import "./Detail.css";
import ResponsiveBoy from "../../Carousel/CarouselIBoy";
function DetailBoys({ addCart }) {
  document.title = "CHI TIẾT SẢN PHẨM";
  const [item, setItem] = useState([]);
  const { slug } = useParams();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function getItem() {
      const response = await fetch(
        "https://data-shopmebin.herokuapp.com/boys?slug=" + slug
      );
      const items = await response.json();
      setItem(items[0]);
      setLoad(false);
    }
    getItem();
  }, [slug]);

  return (
    <div>
      {load ? (
        <div className="loader"></div>
      ) : (
        <div className="container" style={{ minHeight: "1000px" }}>
          <div className="text-link">
            <Link to="/">Trang chủ ›&nbsp;</Link>
            <Link to="/boys">Bé trai ›&nbsp;</Link>

            <div className="min-box">Chi tiết sản phẩm</div>
          </div>
          <div className="item-view">
            <div className="row">
              <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div className="item-img">
                  <div className="item-img-desktop">
                    <div className="row">
                      <div className="col-2">
                        <div className="item-img-simple-desktop">
                          <img
                            id="sp-main-1"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                          <img
                            id="sp-main-2"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                          <img
                            id="sp-main-3"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                          <img
                            id="sp-main-4"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <InnerImageZoom
                          src={item.image}
                          zoomSrc={item.imageZoom}
                        />
                      </div>
                    </div>
                    <div className="video">
                      <div className="video-text">
                        <p>Video thực tế sản phẩm</p>
                      </div>
                      <iframe
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/_gfHLcMEXRc"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowfullscreen"
                      />
                    </div>
                  </div>
                  <div className="item-img-mobile">
                    <div className="item-img-main">
                      <img
                        id="sp-main-mobile"
                        src={item.image}
                        alt="ảnh sản phẩm"
                        xoriginal="img/detail/original/front-1.jpg"
                      />
                    </div>
                    <div className="item-img-simple-mobile">
                      <div className="row">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                          <img
                            id="sp-main-1"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                        </div>
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                          <img
                            id="sp-main-2"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                        </div>
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                          <img
                            id="sp-main-3"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                        </div>
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                          <img
                            id="sp-main-4"
                            src={item.image}
                            alt="ảnh sản phẩm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                <div className="item-detail">
                  <div className="detail-main">
                    <div className="detail-main-title">
                      <div className="detail-main-title text">
                        <hr />
                        <span>{item.name}</span>
                      </div>
                      <div className="detail-main-title cart">
                        <span>{item.priceNew} VNĐ</span>
                      </div>
                    </div>
                    <hr />
                    <div className="detail-main-content">
                      <div className="msp">
                        <span>
                          {"Mã sản phẩm: SMB" + Number(1000 + item.id)}
                        </span>
                        <div className="stocking">
                          <img src={tick} alt="tick chữ V" />
                          <span>Còn hàng</span>
                        </div>
                      </div>
                      <div className="origin">
                        <span>Xuất xứ: Nhập khẩu chính hãng Thái Lan</span>
                      </div>
                      <div className="color-size">
                        <div className="color">
                          <span>Màu sắc:</span>
                          <div className="color-btn-zone">
                            <label className="toggle" htmlFor="toggle-1">
                              <input id="toggle-1" type="checkbox" />
                              <div className="tick-1" />
                            </label>
                            <label className="toggle" htmlFor="toggle-2">
                              <input id="toggle-2" type="checkbox" />
                              <div className="tick-2" />
                            </label>
                            <label className="toggle" htmlFor="toggle-3">
                              <input id="toggle-3" type="checkbox" />
                              <div className="tick-3" />
                            </label>
                          </div>
                        </div>
                        <div className="size">
                          <span>Kích cỡ:</span>
                          <div className="size-btn-zone">
                            <label className="toggle" htmlFor="toggle-s">
                              <input id="toggle-s" type="checkbox" />
                              <div className="tick-s">S</div>
                            </label>
                            <label className="toggle" htmlFor="toggle-m">
                              <input id="toggle-m" type="checkbox" />
                              <div className="tick-m">M</div>
                            </label>
                            <label className="toggle" htmlFor="toggle-l">
                              <input id="toggle-l" type="checkbox" />
                              <div className="tick-l">L</div>
                            </label>
                            <label className="toggle" htmlFor="toggle-xl">
                              <input id="toggle-xl" type="checkbox" />
                              <div className="tick-xl">XL</div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="detail-main-btn">
                      <button onClick={() => addCart(item)}>
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </div>
                  </div>
                  <div className="detail-normal">
                    <div className="normal">
                      <div className="tick-line1">
                        <img src={tick} alt="tick chữ V" />
                        <span>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</span>
                      </div>
                      <div className="tick-line2">
                        {" "}
                        <span>Áp dụng cho đơn hàng từ 500.000 vnđ trở lên</span>
                      </div>
                    </div>
                    <div className="normal">
                      <div className="tick-line1">
                        <img src={tick} alt="tick chữ V" />
                        <span>ĐỔI TRẢ DỄ DÀNG</span>
                      </div>
                      <div className="tick-line2">
                        {" "}
                        <span>Sản phẩm đổi trả trong vòng 30 ngày*</span>
                      </div>
                    </div>
                    <div className="normal">
                      <div className="tick-line1">
                        <img src={tick} alt="tick chữ V" />
                        <span>GIẢM GIÁ ĐƠN HÀNG TIẾP THEO</span>
                      </div>
                      <div className="tick-line2">
                        {" "}
                        <span>Giảm giá lên tới 30% cho đơn hàng tiếp theo</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-use">
                    <div className="use">
                      <div className="use-title">
                        <span>Mô tả sản phẩm</span>
                      </div>
                      <div className="use-content">
                        <span>{item.content}</span>
                      </div>
                    </div>
                    <div className="use">
                      <div className="use-title">
                        <span>Chất liệu</span>
                      </div>
                      <div className="use-content">
                        <span>100% cotton</span>
                      </div>
                    </div>
                    <div className="use">
                      <div className="use-title">
                        <span>Hướng dẫn giặt là</span>
                      </div>
                      <div className="use-content">
                        <span>Giặt máy dưới 30 độ C</span>
                        <br />
                        <span>Sấy khô dưới 60 độ C</span>
                        <br />
                        <span>Không được sử dụng chất tẩy rửa</span>
                        <br />
                        <span>Được là hơi ở nhiệt độ không quá nóng</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="doing">
            <div className="doing-box1" />
            <div className="doing-box2">
              <span>Sản phẩm tương tự</span>
            </div>
          </div>
          <ResponsiveBoy />
        </div>
      )}

      <Footer />
    </div>
  );
}
export default DetailBoys;
