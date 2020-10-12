import React from "react";
import "./FilterMobile.css";
import filterCancel from "./img/filter-cancel.svg";
import filterClose from "./img/filter-close.svg";
function FilterMobile({showFilterMobile,closeFilterMobile}) {
  return (
    <div id="filter-mobile" style={showFilterMobile}>
      <div className="filter-cancel">
        <img
          id="filter-cancel"
          src={filterCancel}
          alt="filter cancel"
        />
      </div>
      <div className="filter-close" onClick={closeFilterMobile}>
        <img
          id="close-filter"
          src={filterClose}
          alt="filter close"
        />
      </div>
      <div className="category">
        <span>Theo thể loại</span>
        <div className="check-category">
          <input className="check-mobile" id="input01" type="checkbox" />
          <label htmlFor="input01">Bodysuit bộ rời</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input02" type="checkbox" />
          <label htmlFor="input02">Bodysuit bộ liền</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input03" type="checkbox" />
          <label htmlFor="input03">Set quần áo</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input04" type="checkbox" />
          <label htmlFor="input04">Áo, Quần</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input05" type="checkbox" />
          <label htmlFor="input05">Váy, Đầm</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input06" type="checkbox" />
          <label htmlFor="input06">Đồ ngủ</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input07" type="checkbox" />
          <label htmlFor="input07">Đồ bơi</label>
        </div>
        <hr />
      </div>
      <div className="category">
        <span>Theo giá tiền</span>
        <div className="input-cart">
          <div className="input-cart-line">
            <span>Từ</span>
            <input className="cart-mobile" type="text" placeholder={1.0} />
          </div>
          <div className="input-cart-line">
            <span>Đến</span>
            <input
              className="cart-mobile"
              type="text"
              placeholder="1.000.000"
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="category">
        <span>Theo kích cỡ</span>
        <div className="check-category">
          <input className="check-mobile" id="input08" type="checkbox" />
          <label htmlFor="input08">Trẻ sơ sinh</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input09" type="checkbox" />
          <label htmlFor="input09">Trẻ 3 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input10" type="checkbox" />
          <label htmlFor="input10">Trẻ 6 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input11" type="checkbox" />
          <label htmlFor="input11">Trẻ 9 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input12" type="checkbox" />
          <label htmlFor="input12">Trẻ 12 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input13" type="checkbox" />
          <label htmlFor="input13">Từ 2 đến 4 tuổi</label>
        </div>
        <div className="check-category">
          <input className="check-mobile" id="input14" type="checkbox" />
          <label htmlFor="input14">Từ 4 đến 6 tuổi</label>
        </div>
      </div>
    </div>
  );
}

export default FilterMobile;
