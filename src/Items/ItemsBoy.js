import React from "react";
import { Link } from "react-router-dom";
import freeShip from "./free-ship.svg";

function ItemsBoy({ boyItems, cart }) {
  
  function addToCart(item){

  }
  return (
    <div className="row" id="item-boy">
      {boyItems.map((boys) => (
        <div className="col-6 col-md-4 col-lg-3" key={boys.id}>
          <div className="item-box">
            <Link to={"/boys/" + boys.slug}>
              <img src={boys.image} alt={"ảnh sản phẩm " + boys.name} />
            </Link>
            <div id="item-mask" />
            <Link to={"/boys/" + boys.slug}>
              <div id="item-view">Chi tiết</div>
            </Link>
          </div>
          <div className="item-info">
            <div className="item-info1">
              <div className="item-name">
                <Link to={"/boys/" + boys.slug}>
                  <span>{boys.name}</span>
                </Link>
              </div>
              <div className="item-price">
                <span>{boys.priceNew} VNĐ</span>{" "}
                <span className="span-off">| - {boys.percent}</span>
              </div>
            </div>
            <div className="item-info2">
              <div className="item-sell">
                <img src={freeShip} alt="Miễn phí vận chuyển" />
              </div>
            </div>
            <div className="item-addCart">
              <button className="addCart" onClick={addToCart(boys)}>
                {" "}
                <Link to="/cart">Mua ngay</Link>
              </button>
              <button className="addCart-icon">
                <svg
                  className="bi bi-cart2"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ItemsBoy;
