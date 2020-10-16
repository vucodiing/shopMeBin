import { Button } from "react-bootstrap";
import React from "react";
import Footer from "../../Footer/Footer";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart({
  quantity,
  cart,
  confirmRemove,
  handleChangeQuantity,
  subTotal,
  upItem,
  downItem,
}) {
  const list = cart.map((item) => (
    <div
      className="item-cart"
      style={{ boxShadow: "rgb(158, 158, 158) 1px 1px 7px 1px" }}
      key={item.id}
    >
      <div className="row">
        <div className="col-3">
          <img src={item.image} alt={"ảnh sản phẩm" + item.name} />
        </div>
        <div className="col-9">
          <div className="col-mobile">
            <div className="item-name-price">
              <div className="item-name">
                <span>{item.name}</span>
              </div>
              <div className="item-price">
                <input id="price1" type="hidden" />
                <span>{item.priceNew} VNĐ</span>
              </div>
            </div>
            <div className="item-detail-number">
              <div className="item-detail">
                <div className="item-msp">
                  <span>{"Mã sản phẩm: SMB" + Number(1000 + item.id)}</span>
                </div>
                <div className="item-madein">
                  <span>Xuất xứ: Thái Lan</span>
                </div>
              </div>
              <div className="line-cart">
                <div className="item-number">
                  <button
                    onClick={(event) => downItem(item.id, event)}
                    id="down-number1"
                  >
                    -
                  </button>
                  <input
                    className="number-zone"
                    id="number-zone-sp1"
                    value={item.quantity}
                    onChange={(event) => handleChangeQuantity(item.id, event)}
                  />
                  <button onClick={() => upItem(item.id)} id="up-number1">
                    +
                  </button>
                </div>
                <div
                  className="delete-mobile"
                  id="del1"
                  onClick={() => confirmRemove(item, item.id)}
                >
                  Xóa
                </div>
              </div>
            </div>
          </div>
          <div className="item-color-size">
            <div className="color-size-zone">
              <div className="item-color">
                <span>Màu sắc:</span>
                <div className="color-box-1" />
              </div>
              <div className="item-size">
                <span>Kích cỡ:</span>
                <div className="size-box">M</div>
              </div>
            </div>
            <div
              className="delete-desktop"
              id="del1"
              onClick={() => confirmRemove(item, item.id)}
            >
              Xóa
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container" id="cart-content">
        <div className="text-link">
          <a href="index.html">Trang chủ ›&nbsp;</a>
          <div className="min-box">Giỏ hàng</div>
        </div>
        <div className="title-cart">
          <div className="title-cart-1">
            <span>GIỎ HÀNG CỦA BẠN</span>
          </div>
          <div className="title-cart-2">
            <input
              id="number-cart"
              type="text"
              value={quantity}
              disabled="disabled"
            />
            <span>sản phẩm</span>
          </div>
        </div>
      </div>
      {cart.length === 0 ? (
        <div className="non-cart">
          <div>
            <img
              style={{ maxWidth: "100%", padding: "10px" }}
              src="https://i.imgur.com/L1BcT82.jpg"
              alt="shopping now"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Link to="/">
              <Button variant="warning">QUAY LẠI MUA SẮM</Button>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 col-xl-7">
              <div className="list-item">{list}</div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <div className="provisional">
                <div className="text-provisional">
                  <span>Tạm tính</span>
                </div>
                <div className="price-provisional">
                  <span>
                    {subTotal
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                      })
                      .replace("₫", "")}{" "}
                    VNĐ
                  </span>
                </div>
              </div>
              <div className="coupon">
                <input type="text" placeholder="Mã giảm giá" />
                <button>Áp dụng</button>
              </div>
              <div className="into-money">
                <div className="into-money-text">
                  <span>Thành tiền</span>
                </div>
                <div className="into-money-price">
                  <span>
                    {subTotal
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                      })
                      .replace("₫", "")}{" "}
                    VNĐ
                  </span>
                </div>
              </div>
              <div className="pay-toWin">
                <Link to="/order">
                  <button>TIẾN HÀNH ĐẶT HÀNG</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
export default Cart;
