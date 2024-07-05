import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__title">
          <div className="footer__logo">
            <img src="/images/logo_white.svg" alt="White logo" />
          </div>
          <div className="footer__name">Globex</div>
        </div>
        <div className="footer__columns">
          <div className="footer__item">
            <div className="footer__item-title">Women</div>
            <a href="#" className="footer__text">
              All Women
            </a>
            <a href="#" className="footer__text">
              Skirts
            </a>
            <a href="#" className="footer__text">
              T- Shirts
            </a>
            <a href="#" className="footer__text">
              Tops
            </a>
            <a href="#" className="footer__text">
              Jackets
            </a>
          </div>
          <div className="footer__item">
            <div className="footer__item-title">Men</div>
            <a href="#" className="footer__text">
              All Men
            </a>
            <a href="#" className="footer__text">
              Shirts
            </a>
            <a href="#" className="footer__text">
              T- Shirts
            </a>
            <a href="#" className="footer__text">
              Shorts
            </a>
            <a href="#" className="footer__text">
              Jackets
            </a>
          </div>
          <div className="footer__item">
            <div className="footer__item-title">Kids</div>
            <a href="#" className="footer__text">
              All Kids
            </a>
            <a href="#" className="footer__text">
              Shirts
            </a>
            <a href="#" className="footer__text">
              T- Shirts
            </a>
            <a href="#" className="footer__text">
              Shorts
            </a>
            <a href="#" className="footer__text">
              Jackets
            </a>
          </div>
          <div className="footer__item">
            <div className="footer__item-title">Shopping</div>
            <a href="#" className="footer__text">
              Your cart
            </a>
            <a href="#" className="footer__text">
              your orders
            </a>
            <a href="#" className="footer__text">
              Compared items
            </a>
            <a href="#" className="footer__text">
              Wishlist
            </a>
            <a href="#" className="footer__text">
              Shipping Details
            </a>
          </div>
          <div className="footer__item">
            <div className="footer__item-title">More links</div>
            <a href="#" className="footer__text">
              Blogs
            </a>
            <a href="#" className="footer__text">
              Gift center
            </a>
            <a href="#" className="footer__text">
              Buying guides
            </a>
            <a href="#" className="footer__text">
              New arrivals
            </a>
            <a href="#" className="footer__text">
              Clearance
            </a>
          </div>
          <div className="footer__item">
            <div className="footer__item-title">Stay In Touch</div>
            <div className="footer__text">
              Stay in touch to get special offers, free giveaways and once in a
              lifetime deals
            </div>
            <div className="footer__enter-mail">
              <div className="footer__envelope-img"></div>
              <input
                className="footer__mail"
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <a href="#" className="footer__bottom-text">
            Terms & Conditions
          </a>
          <a href="#" className="footer__bottom-text">
            Privacy Policy
          </a>

          <div className="footer__icons">
            <a href="#" className="footer__img">
              <img src="/images/facebook.svg" alt="Facebook" />
            </a>
            <a className="footer__img" href="#">
              <img src="/images/instagram.svg" alt="Instagram" />
            </a>

            <a href="#" className="footer__img">
              <img src="/images/watsapp.svg" alt="Watsapp" />
            </a>
            <a href="#" className="footer__img">
              <img src="/images/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
