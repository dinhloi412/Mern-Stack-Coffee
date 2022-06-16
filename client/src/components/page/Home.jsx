import React from "react";
import Product from "../product/Product";
import banner from "../../images/website/banner.png";
import newPost from "../../images/news/new1.jpg";
import aboutBanner from "../../images/website/banner_about_us.png";
const Home = () => {
  return (
    <>
      <section class="home" id="home">
        <div class="content">
          <h3>Food made with love</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            ut sed accusantium. Consectetur modi accusamus perferendis saepe
            dolorem, suscipit in quis! Maxime at amet dolor quibusdam minus,
            blanditiis facilis voluptates?
          </p>
          <a href="#" class="btn">
            Đặt hàng ngay
          </a>
        </div>
        <div class="image">
          <img src={banner} alt="banner" />
        </div>
      </section>
      <section class="speciality" id="speciality">
        <h1 class="heading-h1">Sản phẩm từ nhà</h1>
        <div class="box-container">
          <ul>
            <li>
              <ion-icon name="beer-outline"></ion-icon>
            </li>
            <li>
              <ion-icon name="fast-food-outline"></ion-icon>
            </li>
            <li>
              <ion-icon name="pizza-outline"></ion-icon>
            </li>
          </ul>
        </div>
      </section>
      <Product />
      <section class="news">
        <div class="heading-news">
          <h1 class="heading-h1">
            <ion-icon name="newspaper"></ion-icon> Tin tức
          </h1>
        </div>
        <div class="list-news">
          <div class="item-new">
            <div class="img-news">
              <img src={newPost} alt="hinhanh" />
            </div>
            <div class="detail-new">
              <h5>
                CÒN “MÙNG” LÀ CÒN TẾT - THE COFFEE HOUSE LÌ XÌ NƯỚC NGON ĐỒNG
                GIÁ 39K
              </h5>
              <button class="btn-new">
                <a href="#">ĐỌC TIẾP</a>
              </button>
            </div>
          </div>
          <div class="item-new">
            <div class="img-news">
              <img src={newPost} alt="hinhanh" />
            </div>
            <div class="detail-new">
              <h5>
                CÒN “MÙNG” LÀ CÒN TẾT - THE COFFEE HOUSE LÌ XÌ NƯỚC NGON ĐỒNG
                GIÁ 39K
              </h5>
              <button class="btn-new">
                <a href="#">ĐỌC TIẾP</a>
              </button>
            </div>
          </div>
          <div class="item-new">
            <div class="img-news">
              <img src={newPost} alt="hinhanh" />
            </div>
            <div class="detail-new">
              <h5>
                CÒN “MÙNG” LÀ CÒN TẾT - THE COFFEE HOUSE LÌ XÌ NƯỚC NGON ĐỒNG
                GIÁ 39K
              </h5>
              <button class="btn-new">
                <a href="#">ĐỌC TIẾP</a>
              </button>
            </div>
          </div>
          <div class="item-new">
            <div class="img-news">
              <img src={newPost} alt="hinhanh" />
            </div>
            <div class="detail-new">
              <h5>
                CÒN “MÙNG” LÀ CÒN TẾT - THE COFFEE HOUSE LÌ XÌ NƯỚC NGON ĐỒNG
                GIÁ 39K
              </h5>
              <button class="btn-new">
                <a href="#">ĐỌC TIẾP</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="img-about">
          <img class="img-banner-about-us " src={aboutBanner} alt="" />
          <div class="cover"></div>
        </div>
        <div class="aboutUs">
          <div class="about-heading">
            <span>Order Drink</span>
            <h2>VỀ CHÚNG TÔI</h2>
          </div>
          <div class="about-body">
            <p>
              Bên cạnh niềm tự hào về những ly trà sữa ngon – sạch – tươi, chúng
              tôi luôn tự tin mang đến khách hàng những trải nghiệm tốt nhất về
              dịch vụ và không gian.
            </p>
            <button class="btn">Xem thêm</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
