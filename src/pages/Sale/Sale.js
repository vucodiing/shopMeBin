import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterDesktop from "../../FilterDesktop/FilterDesktop";
import FilterMobile from "../../FilterMobile/FilterMobile";
import Footer from "../../Footer/Footer";
import ItemsSale from "../../Items/ItemsSale";
import filter from "../../icons/filter.svg";
import ResponsiveSale from "../../Carousel/CarouselSale";
import Timer from "../../CountDown/CountDown";
function Sale({ countDown }) {
  document.title = "GIẢM GIÁ";
  const [showFilterMobile, setFilterMobile] = useState({ right: "-184px" });
  function ShowFilterMobile() {
    setFilterMobile({ right: "0px" });
  }
  function CloseFilterMobile() {
    setFilterMobile({ right: "-184px" });
  }

  const [sale, setSale] = useState([]);
  useEffect(() => {
    async function getSale() {
      const response = await fetch("https://data-shopmebin.herokuapp.com/sale");
      const sale = await response.json();
      setSale(sale);
    }
    getSale();
  }, []);
  return (
    <div>
      <FilterMobile
        showFilterMobile={showFilterMobile}
        closeFilterMobile={CloseFilterMobile}
      />

      <div className="container" id="betrai-content">
        <div className="text-link">
          <Link to="/">Trang chủ ›&nbsp;</Link>
          <div className="min-box">Giảm giá</div>
        </div>
        <div className="filter-zone">
          <div className="filter-text">
            <span>Sắp xếp:</span>
            <div className="filter-az">
              <select id="az">
                <option value="Giảm giá">Free ship</option>
                <option value="Giảm giá">Hàng mới</option>
                <option value="Giảm giá">Giảm giá</option>
                <option value="Bán chạy">Bán chạy</option>
                <option value="Giá thấp">Giá thấp</option>
                <option value="Giá cao">Giá cao</option>
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
              <FilterDesktop />
            </div>
            <div className="col-md-9 col-lg-10">
              {sale.length > 0 ? (
                <div>
                  <div className="doing-now" id="doing-now">
                    <div className="doing-box1" />
                    <div className="doing-box2">
                      <span>Đang diễn ra</span>
                    </div>
                  </div>
                  <ItemsSale sale={sale} />
                  <div className="next-page">
                    <button id="btn1">1</button>
                  </div>
                  <div className="doing" id="doing-now">
                    <div>
                      <div className="doing-box1" />
                      <div className="doing-box2">
                        <span>Sắp diễn ra </span>
                      </div>
                    </div>

                    <Timer />
                  </div>
                  <section>
                    <ResponsiveSale />
                  </section>
                </div>
              ) : (
                <div className="loader"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Sale;
