import React from "react";
function FilterDesktop({filterType}) {

  return (
    <div id="filter-desktop">
      <div className="category" onChange={filterType}>
        <span>Theo thể loại</span>
        <div className="check-category">
          <input className="check-desktop"  id="desktop01" type="checkbox" value="tuyp=Bodysuit bộ rời"/>
          <label htmlFor="desktop01">Bodysuit bộ rời</label>
        </div>
        <div className="check-category">
          <input className="check-desktop" id="desktop02" type="checkbox" value="tuyp=Bodysuit bộ liền"/>
          <label htmlFor="desktop02">Bodysuit bộ liền</label>
        </div>
        <div className="check-category">
          <input className="check-desktop" id="desktop03" type="checkbox" value="tuyp=Set quần áo"/>
          <label htmlFor="desktop03">Set quần áo</label>
        </div>
        <div className="check-category">
          <input className="check-desktop" id="desktop04" type="checkbox" value="tuyp=Áo, Quần"/>
          <label htmlFor="desktop04">Áo, Quần</label>
        </div>
        <div className="check-category">
          <input className="check-desktop" id="desktop05" type="checkbox" value="tuyp=Váy, Đầm"/>
          <label htmlFor="desktop05">Váy, Đầm</label>
        </div>
        <div className="check-category">
          <input className="check-desktop"  id="desktop06" type="checkbox" value="tuyp=Đồ ngủ"/>
          <label htmlFor="desktop06">Đồ ngủ</label>
        </div>
        <div className="check-category">
          <input className="check-desktop" id="desktop07" type="checkbox" value="tuyp=Đồ bơi"/>
          <label htmlFor="desktop07">Đồ bơi</label>
        </div>
        <hr />
      </div>
      <div className="category" >
        <span>Theo giá tiền</span>
        <div className="input-cart">
          <div className="input-cart-line">
            <span>Từ</span>
            <input className="cart-desktop" type="text" placeholder={1.0} />
          </div>
          <div className="input-cart-line">
            <span>Đến</span>
            <input
              className="cart-desktop"
              type="text"
              placeholder="1.000.000"
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="category" onChange={filterType}>
        <span>Theo kích cỡ</span>
        <div className="check-category">
          <input className="check-desktop" id="desktop08" type="checkbox" value="age=Trẻ sơ sinh"/>
          <label htmlFor="desktop08">Trẻ sơ sinh</label>
        </div>
        <div className="check-category">
          <input className="check-desktop" id="desktop09" type="checkbox" value="age=Trẻ 3 tháng"/>
          <label htmlFor="desktop09">Trẻ 3 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-desktop"  id="desktop10" type="checkbox" value="age=Trẻ 6 tháng"/>
          <label htmlFor="desktop10">Trẻ 6 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-desktop"  id="desktop11" type="checkbox" value="age=Trẻ 9 tháng"/>
          <label htmlFor="desktop11">Trẻ 9 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-desktop"  id="desktop12" type="checkbox" value="age=Trẻ 12 tháng"/>
          <label htmlFor="desktop12">Trẻ 12 tháng</label>
        </div>
        <div className="check-category">
          <input className="check-desktop"  id="desktop13" type="checkbox" value="age=Từ 2 đến 4 tuổi"/>
          <label htmlFor="desktop13">Từ 2 đến 4 tuổi</label>
        </div>
        <div className="check-category">
          <input className="check-desktop" id="desktop14" type="checkbox" value="age=Từ 4 đến 6 tuổi"/>
          <label htmlFor="desktop14">Từ 4 đến 6 tuổi</label>
        </div>
      </div>
    </div>
  );
}
export default FilterDesktop;
