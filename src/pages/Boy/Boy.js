import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterDesktop from "../../FilterDesktop/FilterDesktop";
import FilterMobile from "../../FilterMobile/FilterMobile";
import Footer from "../../Footer/Footer";
import ItemsBoy from "../../Items/ItemsBoy";
import filter from "./filter.svg";
import "./Boy.css";
import { Button } from "react-bootstrap";

function Boy() {
  document.title = "BÉ TRAI";
  const [showFilterMobile, setFilterMobile] = useState({ right: "-184px" });
  function ShowFilterMobile() {
    setFilterMobile({ right: "0px" });
  }
  function CloseFilterMobile() {
    setFilterMobile({ right: "-184px" });
  }

  const [boyItems, setBoys] = useState([]);
  useEffect(() => {
    async function getBoys() {
      const response = await fetch("https://data-shopmebin.herokuapp.com/boys");
      const boyItems1 = await response.json();
      setBoys(boyItems1);
      setLoad(false);
    }
    getBoys();
  }, []);

  let response = "";
  const [load, setLoad] = useState(true);
  async function filterType(e) {
    if (e.target.checked) {
      response = await fetch(
        "https://data-shopmebin.herokuapp.com/boys?" + e.target.value
      );
      const filterType = await response.json();
      setBoys(filterType);
      setLoad(false);
    } else {
      response = await fetch("https://data-shopmebin.herokuapp.com/boys");
      const filterType = await response.json();
      setBoys(filterType);
    }
  }

  async function order(e) {
    response = await fetch(
      "https://data-shopmebin.herokuapp.com/boys?" + e.target.value
    );
    const order = await response.json();
    setBoys(order);
  }

  async function clearCheck(e) {
    response = await fetch("https://data-shopmebin.herokuapp.com/boys");
    const check = await response.json();
    setBoys(check);
  }

  return (
    <div>
      <FilterMobile
        showFilterMobile={showFilterMobile}
        closeFilterMobile={CloseFilterMobile}
      />
      <div className="container" id="betrai-content">
        <div className="text-link">
          <Link to="/">Trang chủ ›&nbsp;</Link>
          <div className="min-box">Bé trai</div>
        </div>
        <div className="filter-zone">
          <div className="filter-text">
            <span>Sắp xếp:</span>
            <div className="filter-az">
              <select id="az" onChange={order}>
                <option value="">Lựa chọn...</option>
                <option value="freeShip=true">Free ship</option>
                <option value="_sort=percent&_order=desc">Giảm giá</option>
                <option value="_sort=topSale&_order=desc">Bán chạy</option>
                <option value="_sort=priceNew&_order=asc">Giá thấp</option>
                <option value="_sort=priceNew&_order=desc">Giá cao</option>
              </select>
            </div>
          </div>
          <div className="filter-btn" onClick={ShowFilterMobile}>
            <img src={filter} alt="Lọc sản phẩm" />
            <span>Lọc</span>
          </div>
          <div className="filter-title">
            <div className="title-text">
              <span>Lọc sản phẩm</span>
            </div>
            <div className="title-del" onClick={clearCheck}>
              <span>Bỏ lọc</span>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row">
            <div className="col-md-3 col-lg-2">
              <FilterDesktop filterType={filterType} />
            </div>
            <div className="col-md-9 col-lg-10">
              {load ? (
                <div className="loader"></div>
              ) : boyItems.length > 0 ? (
                <ItemsBoy boyItems={boyItems} />
              ) : (
                <div style={{ textAlign: "center" }}>
                  <div>
                    <img
                      style={{ width: "80%" }}
                      src="https://i.imgur.com/1HhbOaG.png"
                      alt="Không tìm thấy sản phẩm"
                    />
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <h3>KHÔNG TÌM THẤY SẢN PHẨM</h3>
                    <Button onClick={clearCheck} variant="warning">
                      Quay lại
                    </Button>{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Boy;
