import React from "react";
import { Link } from "react-router-dom";
import calender from "./calendar.svg";
import writer from "./write.svg";
import doc1 from "./doc1.jpg";
import doc2 from "./doc2.jpg";
import doc3 from "./doc3.jpg";
import doc4 from "./doc4.jpg";
import doc5 from "./doc5.jpg";
import "./Blog.css";
import Footer from "../../Footer/Footer";
function Blog1() {
  document.title = "BÀI VIẾT";
  return (
    <div>
      {/* <FilterMobile /> */}
      <div className="container">
        <div className="text-link">
          <a href="index.html">Trang chủ ›</a>
          <a href="bai-viet.html">&nbsp;Bài viết ›&nbsp;</a>
          <div className="min-box">
            Những lưu ý quan trọng khi mua sắm đồ sơ sinh cho bé
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-7 col-xl-7">
            <div className="zone-doc-one">
              <div className="doc">
                <div className="title-doc">
                  <div className="title-main">
                    <p>Những lưu ý quan trọng khi mua sắm đồ sơ sinh cho bé</p>
                  </div>
                  <div className="title-note">
                    <div className="note">
                      <img src={calender} alt="icon lịch" />
                      <span>07/06/2020</span>
                    </div>
                    <div className="note">
                      {" "}
                      <img src={writer} alt="icon bút" />
                      <span>Admin</span>
                    </div>
                  </div>
                </div>
                <div className="content-doc">
                  <p>
                    Chuẩn bị đồ sơ sinh là việc làm vô cùng tỉ mỉ, quan trọng,
                    những người chưa từng sinh con, các ông bố thì nghĩ nó đơn
                    giản, cứ đưa tiền cho vợ là có thể xong việc. Nhưng cũng ít
                    người hiểu được những khó khăn vất vả mà các mẹ gặp phải khi
                    mua đồ sơ sinh cho con. Đặc biệt các mẹ còn bận công việc
                    trên cơ quan lại kiêng khem kỹ không dám mua sớm. Tháng thứ
                    8 thai kỳ mới dám vác cái bụng to vượt mặt đi mua sắm, quả
                    là không dễ dàng gì chưa nói tới việc chọn đồ cho bé sơ sinh
                    vất vả hơn người lớn rất nhiều, vì bé còn rất non nớt, da bé
                    nhạy cảm nên việc đảm bảo chất lượng, đảm bảo vệ sinh và an
                    toàn cho bé là điều tối cần thiết.
                  </p>
                  <p>
                    Sức đề kháng của bé còn yếu, chưa được hoàn thiện, cơ thể bé
                    cực kỳ nhạy cảm với môi trường bên ngoài, đặc biệt là mùa
                    đông lạnh giá. Vậy bí quyết chọn đồ sơ sinh an toàn phù hợp
                    với bé là gì, hãy đọc kỹ 8 tiêu chí, kỹ năng cần có khi mua
                    quần áo sơ sinh cho con nhé!
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Danh sách đồ sơ sinh cần chuẩn bị cho mẹ và bé sơ sinh
                  </p>
                  <p>
                    Gợi ý danh sách đồ dùng sơ sinh cần thiết cho trẻ sơ sinh.
                    Bin's Mother sẽ giúp mẹ lựa chọn và chuẩn bị đầy đủ đồ sơ
                    sinh để sẵn sàng chào đón bé yêu.
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Chất lượng đồ sơ sinh là số một
                  </p>
                  <p>
                    Chất lượng luôn là ưu tiên số một khi các mẹ mua đồ sơ sinh
                    cho bé, Nên chọn các đồ có chất liệu tự nhiên nhất, tiêu chí
                    hàng đầu cần đặt ra là chất liệu an toàn, mềm mịn cho bé.
                    Chất liệu 100% cotton sẽ thông thoáng, thấm hút mồ hôi tốt,
                    không để mồ hôi thấm ngược vào trong khiến bé cảm lạnh hoặc
                    bị ốm. Các mẹ đừng nghĩ mùa đông thì không cần thoáng nhé,
                    đối với quần áo sơ sinh cho bé thì mùa nào cũng cần chọn
                    chất liệu thoáng, thấm hút mồ hôi tốt để tránh khi bé đổ mồ
                    hôi thấm ngược vào trong, đây là nguyên nhân gây bé ốm nhiều
                    nhất.
                  </p>
                  <img src={doc1} alt="ảnh bài viết" />
                  <p style={{ fontWeight: "bold" }}>
                    Màu sắc nên đơn giản, nên là màu trắng
                  </p>
                  <p>
                    Mua đồ sơ sinh cho trẻ không nên chọn những bộ đồ nhiều màu
                    sắc. Chắc hẳn sẽ có nhiều mẹ nghi vấn, thắc mắc tại sao lại
                    phải màu sắc đơn giản, tưởng trẻ con thường thích màu sắc
                    sặc sỡ. Các mẹ đều không sai, trẻ con thích màu sắc, nhưng
                    đồ mặc cho bé thì nên dùng quần áo ít màu sắc nhất, tránh
                    các phẩm màu nhuộm vải gây kích ứng, dị ứng da của bé. Đây
                    đều là các phẩm màu nhuộm bằng hóa chất, không tốt cho da và
                    sức khỏe của bé.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Chất lượng gia công</p>
                  <p>
                    Đường may, các đường viền, nơ, cúc hay các họa tiết phải
                    được làm một cách tỉ mỉ, không được có chỉ thừa, đường may
                    phải mềm mại tránh cào vào làm xước da bé. Nếu có thể chọn
                    quần áo có đường may lộn ra ngoài là tốt nhất.
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Nên chọn quần áo sơ sinh có cỡ to hơn cơ thể bé 1 cỡ
                  </p>
                  <p>
                    Bởi lẽ trẻ nhỏ rất hiếu động, nghịch ngợm và ngọ ngoạy liên
                    tục, mẹ nên mặc đồ rộng một chút, đặc biệt mùa đông để trẻ
                    có đủ không gian thoải mái và không bị gò bó khó chịu dẫn
                    tới quấy khóc.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Hạn chế áo ấm bằng len</p>
                  <img src={doc4} alt="ảnh bài viết" />
                  <p>
                    Mùa đông mẹ cần mua nhiều đồ sơ sinh ấm áp cho bé, tuy nhiên
                    nên hạn chế quần áo chất liệu len, những sợi len nhỏ rất dễ
                    bay vào mắt, mũi, mồm hiến bé khó chịu và thậm chí có thể
                    ngây nguy hiểm cho bé nữa. Mẹ nên chọn mua những chất liệu
                    như chất thun, chất dạ,…
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Quần áo Phù hợp khi ở nhà, ra ngoài
                  </p>
                  <p>
                    Luôn phải chuẩn bị sẵn 1 hoặc vài bộ body cho bé để bé ra
                    ngoài khi cần thiết như khi đi tiêm phòng, khi đi dạo, đi
                    tắm nắng… nên là những loại kín gió nhất có thể nhé các mẹ.
                  </p>
                  <p style={{ fontWeight: "bold" }}>Tránh lãng phí cho mẹ</p>
                  <p>
                    Trẻ sơ sinh thường lớn “nhanh như thổi”, cơ thể thay đổi
                    từng ngày nên không cần mua quá nhiều đồ cũng một lúc để
                    tránh tình trạng bé mặc chưa hết thì đồ đã chật và gây lãng
                    phí. Sau vài tháng, khi bé lớn hơn bạn có thể mua bổ sung.
                  </p>
                  <p>
                    Với các bé trong tháng hoặc 2 tháng thì không nên mua nhiều
                    quần, vì tháng đầu thường quấn tã cho bé chứ ít mặc quần.
                  </p>
                  <img src={doc5} alt="ảnh bài viết" />
                  <p style={{ fontWeight: "bold" }}>
                    Xin đồ sơ sinh cũ cho bé – nên cẩn thận
                  </p>
                  <p>
                    Nếu mẹ có người thân, hay bé có anh chị thì có thể cho bé
                    dùng đồ sơ sinh cũ nhưng cần biết rõ nguồn gốc, chọn những
                    đồ sạch sẽ, còn mới và giặt sạch rồi trùng qua nước sôi,
                    phơi chỗ có nắng. Không nên dùng đồ cũ vì đồ quá cũ sẽ cứng,
                    thô ráp, xù lông dễ gây tổn thương cho làn da non nớt của
                    bé.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl-5">
            <div className="doc-new-title">
              <p>BÀI VIẾT MỚI NHẤT</p>
            </div>
            <hr />
            <div className="doc-new">
              <div className="row">
                <div className="col-4">
                  <Link to="/blog/Loi-khuyen-huu-ich-khi-chon-mua-dam-be-gai-1-tuoi">
                    <img src={doc3} alt="ảnh bài viết" />
                  </Link>
                </div>
                <div className="col-8">
                  <div className="title-doc-new">
                    <div className="title-main-new">
                      <Link to="/blog/Loi-khuyen-huu-ich-khi-chon-mua-dam-be-gai-1-tuoi">
                        <p>Lời khuyên hữu ích khi chọn mua đầm bé gái 1 tuổi</p>
                      </Link>
                    </div>
                    <div className="title-note-new">
                      <div className="note-new">
                        <img src={calender} alt="icon lịch" />
                        <span>07/11/2020</span>
                      </div>
                      <div className="note-new">
                        {" "}
                        <img src={writer} alt="icon bút" />
                        <span id="one-line">|&nbsp;</span>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="doc-new">
              <div className="row">
                <div className="col-4">
                  <Link to="/blog/Loi-khuyen-huu-ich-khi-chon-mua-dam-be-gai-1-tuoi">
                    <img src={doc2} alt="ảnh bài viết" />
                  </Link>
                </div>
                <div className="col-8">
                  <div className="title-doc-new">
                    <div className="title-main-new">
                      <Link to="/blog/Loi-khuyen-huu-ich-khi-chon-mua-dam-be-gai-1-tuoi">
                        <p>Cách chọn đồ cho bé trai thông minh nhất</p>
                      </Link>
                    </div>
                    <div className="title-note-new">
                      <div className="note-new">
                        <img src={calender} alt="icon lịch" />
                        <span>25/10/2020</span>
                      </div>
                      <div className="note-new">
                        {" "}
                        <img src={writer} alt="icon bút" />
                        <span id="one-line">|&nbsp;</span>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="doc-new">
              <div className="row">
                <div className="col-4">
                  <Link to="/blog/Loi-khuyen-huu-ich-khi-chon-mua-dam-be-gai-1-tuoi">
                    <img src={doc1} alt="ảnh bài viết" />
                  </Link>
                </div>
                <div className="col-8">
                  <div className="title-doc-new">
                    <div className="title-main-new">
                      <Link to="/blog/Loi-khuyen-huu-ich-khi-chon-mua-dam-be-gai-1-tuoi">
                        <p>
                          Những lưu ý quan trọng khi mua sắm đồ sơ sinh cho bé
                        </p>
                      </Link>
                    </div>
                    <div className="title-note-new">
                      <div className="note-new">
                        <img src={calender} alt="icon lịch" />
                        <span>07/06/2020</span>
                      </div>
                      <div className="note-new">
                        {" "}
                        <img src={writer} alt="icon bút" />
                        <span id="one-line">|&nbsp;</span>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Blog1;
