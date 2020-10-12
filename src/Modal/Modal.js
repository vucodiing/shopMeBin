import React from "react";
import { Button } from "react-bootstrap";
import "./Modal.css";
export default function Modal({ isVisible, handleCancel, nameItem, removeCart }) {
  return (
    isVisible && (
      <div className="modalShow">
        <div>
          <img
            src="https://i.imgur.com/dhb6jZR.png"
            alt="Có chắc chắn muốn xoá"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <h2>XOÁ SẢN PHẨM</h2>
          <br />
          <h4 style={{ color: "red" }}>{nameItem}</h4>
          <h5>sẽ xoá khỏi giỏ hàng</h5>
          <br />
          <div className="btnModal">
            <Button variant="primary" className="btnOk" onClick={removeCart}>
              ĐỒNG Ý
            </Button>{" "}
            <Button
              variant="secondary"
              className="btnCancel"
              onClick={handleCancel}
            >
              HUỶ{" "}
            </Button>{" "}
          </div>
        </div>
      </div>
    )
  );
}
