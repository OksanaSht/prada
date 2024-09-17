import clsx from "clsx";
import styles from "./styles.module.scss";
import { Input } from "@/shared/components";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  function subscribe() {
    console.log("Subscribed with email:", email);
  }

  return (
    <footer className={clsx("container", styles.footer)}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTitle}>
          <div className={styles.footerLogo}>
            <img
              className={styles.img}
              src="/images/logo_white.svg"
              alt="White logo"
            />
          </div>
          <div className={styles.footerName}>Globex</div>
        </div>
        <div className={styles.footerColumns}>
          <div className={styles.footerItem}>
            <div className={styles.itemTitle}>Women</div>
            <a href="#" className={styles.footerLink}>
              All Women
            </a>
            <a href="#" className={styles.footerLink}>
              Skirts
            </a>
            <a href="#" className={styles.footerLink}>
              T- Shirts
            </a>
            <a href="#" className={styles.footerLink}>
              Tops
            </a>
            <a href="#" className={styles.footerLink}>
              Jackets
            </a>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.itemTitle}>Men</div>
            <a href="#" className={styles.footerLink}>
              All Men
            </a>
            <a href="#" className={styles.footerLink}>
              Shirts
            </a>
            <a href="#" className={styles.footerLink}>
              T- Shirts
            </a>
            <a href="#" className={styles.footerLink}>
              Shorts
            </a>
            <a href="#" className={styles.footerLink}>
              Jackets
            </a>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.itemTitle}>Kids</div>
            <a href="#" className={styles.footerLink}>
              All Kids
            </a>
            <a href="#" className={styles.footerLink}>
              Shirts
            </a>
            <a href="#" className={styles.footerLink}>
              T- Shirts
            </a>
            <a href="#" className={styles.footerLink}>
              Shorts
            </a>
            <a href="#" className={styles.footerLink}>
              Jackets
            </a>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.itemTitle}>Shopping</div>
            <a href="#" className={styles.footerLink}>
              Your cart
            </a>
            <a href="#" className={styles.footerLink}>
              your orders
            </a>
            <a href="#" className={styles.footerLink}>
              Compared items
            </a>
            <a href="#" className={styles.footerLink}>
              Wishlist
            </a>
            <a href="#" className={styles.footerLink}>
              Shipping Details
            </a>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.itemTitle}>More links</div>
            <a href="#" className={styles.footerLink}>
              Blogs
            </a>
            <a href="#" className={styles.footerLink}>
              Gift center
            </a>
            <a href="#" className={styles.footerLink}>
              Buying guides
            </a>
            <a href="#" className={styles.footerLink}>
              New arrivals
            </a>
            <a href="#" className={styles.footerLink}>
              Clearance
            </a>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.itemTitle}>Stay In Touch</div>
            <div className={styles.footerLink}>
              Stay in touch to get special offers, free giveaways and once in a
              lifetime deals
            </div>

            <Input
              value={email}
              name="email"
              placeholder="Enter your email"
              onChange={setEmail}
              onEnter={subscribe}
              mode="dark"
              format="lg"
              left={<img src="/images/mail.svg" className={styles.mail} />}
            />
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          <a href="#" className={styles.bottomText}>
            Terms & Conditions
          </a>
          <a href="#" className={styles.bottomText}>
            Privacy Policy
          </a>

          <div className={styles.icons}>
            <a href="#" className={styles.imgIcons}>
              <img
                className={styles.img}
                src="/images/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a className={styles.imgIcons} href="#">
              <img
                className={styles.img}
                src="/images/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="#" className={styles.imgIcons}>
              <img
                className={styles.img}
                src="/images/watsapp.svg"
                alt="Whatsapp"
              />
            </a>
            <a href="#" className={styles.imgIcons}>
              <img
                className={styles.img}
                src="/images/twitter.svg"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
