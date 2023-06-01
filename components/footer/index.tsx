import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6> <span>PowerliftingHub</span>BD</h6>
            <p>Let your Journey to Strength Brgin</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>We Provide</li>
              <li>IPF Approved Gadgets</li>
              <li>Powerlifting Essentials</li>
              <li>Branded and Non Branded Items</li>
              <li>IPF Approved Plates</li>
              <li>Collection of Strength Training Gadgets</li>
            </ul>
            <ul>
              <li>Health and Strength Guide</li>
              <li>Hundreds of Supplements to choose from</li>
              <li>Nutrition Guide</li>
              <li>Online Coaching</li>
              <li>Meet other Athletes</li>
              <li>Become a competitive powerlifter</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">Whatsapp(+66)932503470</a></li>
              <li><a href="#">Hotline: (+66)932503470</a></li>
              <p>in case of Tracking your order, feel free to contact us anytime</p>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY AfifMansibChowdhury - © 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer