import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import MyCarousel from "../../Carousel/Carousel";
import Footer from "../../Footer/Footer";

function Home() {
  document.title = "Bin's Mother";
  return (
    <div>
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <MyCarousel />
        <section>
          <div className="boy-girl">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="boy-zone">
                    <Link to="/boys">
                      <img src="boy-img.jpg" alt="Sản phẩm bé trai" />
                      <section>
                        <div className="button-boy">
                          <div className="flip">
                            <div className="front-face">
                              <div className="text">Bé trai</div>
                            </div>
                            <div className="back-face">
                              <div className="text">Xem ngay</div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="girl-zone">
                    <Link to="/girls">
                      <img src="girl-img.jpg" alt="Sản phẩm bé gái" />
                      <section>
                        <div className="button-girl">
                          <div className="flip">
                            <div className="front-face">
                              <div className="text">Bé gái</div>
                            </div>
                            <div className="back-face">
                              <div className="text">Xem ngay</div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sale-off">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="sale-zone">
                    <Link to="/sale">
                      <img src="banner-sale.jpg" alt="Giảm giá siêu khủng" />
                      <section>
                        <div className="button-sale">
                          <div className="flip">
                            <div className="front-face">
                              <div className="text">Sale sốc</div>
                            </div>
                            <div className="back-face">
                              <div className="text">Xem ngay</div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="new-order">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="sp-new">
                    <Link to="/boys">
                      <img src="new.jpg" alt="Sản phẩm mới về" />
                      <div className="button-new">Xem ngay </div>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="sp-order">
                    <Link to="/boys">
                      <img src="sp.jpg" alt="Sản phẩm bán chạy" />
                      <div className="button-order">Xem ngay</div>
                    </Link>
                    <Link to="/boys">
                      <img src="number1.jpg" alt="Cam kết bán hàng" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
