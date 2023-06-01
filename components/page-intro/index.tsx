import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Welcome to POWERLIFTINGHUB BD</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>expolore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Bangladesh's First Powerlifting Hub</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>expolore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-3.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2></h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>expolore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-4.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2></h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>expolore</a>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-5.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2></h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>EXPLORE</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Shipping Worldwide</h4>
                <p>Our International Delivery service</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Our Strong Customers</h4>
                <p>Our Customer's Strength Journey speak for themselves :V</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originality Guaranteed</h4>
                <p>Our Suppliers make sure you get what you want</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro