import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ModalOrder.css";
import tick from "./tick.svg";
export default function ModalOrder({ isModalOrder, cart, subTotal, closeOrder }) {
  return (
    isModalOrder && (
      <div>
        <div className="modalOrder">
          <div>
            <div className="head">
              <img id="tick-success" src={tick} alt="tick thành công" />
              <br />
              <span style={{ fontWeight: "bold", fontSize: 16 }}>
                Đặt hàng thành công
              </span>
            </div>
            <hr />
            <div className="body">
              <div className="body-use">
                <span style={{ fontWeight: "bold" }}>Mai Long Vũ</span>
                <br />
                <span>
                  Tầng 402, tòa nhà M5, Mipec City View, 120 Đường Lê Xuân Điệp,
                  Kiến Hưng, Hà Đông, Hà Nội
                </span>
                <br />
                <span>Số điện thoại: 096.765.2510 </span>
              </div>
              <div className="body-use">
                <span style={{ fontWeight: "bold" }}>Đơn hàng</span>
                <br />
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
                  </div>
                ))}
              </div>
              <hr />
              <div className="body-sum">
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
          </div>
          <div style={{ textAlign: "center", marginTop:"15px" }} onClick={closeOrder}>
            <Link to="/">
              <Button variant="success" style={{ width: "100px"}}>Đồng ý</Button>{" "}
            </Link>
          </div>
        </div>
        <div id="mask-page" />
      </div>
    )
  );
}
