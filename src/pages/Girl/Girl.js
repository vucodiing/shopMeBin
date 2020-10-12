import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterDesktop from "../../FilterDesktop/FilterDesktop";
import FilterMobile from "../../FilterMobile/FilterMobile";
import Footer from "../../Footer/Footer";
import ItemsGirl from "../../Items/ItemsGirl";
import filter from "../Boy/filter.svg";
import "../Boy/Boy.css";
import { Button } from "react-bootstrap";
function Girl() {
  document.title = "BÉ GÁI";
  const [showFilterMobile, setFilterMobile] = useState({ right: "-184px" });
  function ShowFilterMobile() {
    setFilterMobile({ right: "0px" });
  }
  function CloseFilterMobile() {
    setFilterMobile({ right: "-184px" });
  }
  const [girlItems, setGirls] = useState([]);
  useEffect(() => {
    async function getGirls() {
      const response = await fetch("https://data-shopmebin.herokuapp.com/girls");
      const girlItems = await response.json();
      setGirls(girlItems);
      setLoad(false);
    }
    getGirls();
  }, []);
  const [load, setLoad] = useState(true);
  async function filterType(e) {
    if (e.target.checked) {
      const response = await fetch(
        "https://data-shopmebin.herokuapp.com/girls?" + e.target.value
      );
      const filterType = await response.json();
      setGirls(filterType);
      setLoad(false);
    } else {
      const response = await fetch("https://data-shopmebin.herokuapp.com/girls");
      const filterType = await response.json();
      setGirls(filterType);
    }
  }
  async function order(e) {
    const response = await fetch(
      "https://data-shopmebin.herokuapp.com/girls?" + e.target.value
    );
    const order = await response.json();
    setGirls(order);
  }
  async function clearCheck(e) {
    const response = await fetch("https://data-shopmebin.herokuapp.com/girls");
    const check = await response.json();
    setGirls(check);
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
          <div className="min-box">Bé gái</div>
        </div>
        <div className="filter-zone">
          <div className="filter-text">
            <span>Sắp xếp:</span>
            <div className="filter-az">
              <select id="az" onChange={order}>
                <option value="">Lựa chọn...</option>
                <option value="freeShip=true">Free ship</option>
                {/* <option value="Giảm giá">Hàng mới</option> */}
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
            <div className="title-del">
              <span>Bỏ lọc</span>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row">
            <div className="col-md-3 col-lg-2">
              <FilterDesktop filterType={filterType}/>
            </div>
            <div className="col-md-9 col-lg-10">
            {load ? (
                <div className="loader"></div>
              ) : girlItems.length > 0 ? (
                <ItemsGirl girlItems={girlItems} />
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

              <div className="out-off">
                <span>Bạn đã xem hết sản phẩm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Girl;
