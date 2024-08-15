import { useState } from "react";
import styles from "./styles.module.scss";

export const HomeBanner = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (visible === false) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div>
        Invite Friends and get 50% off on your next purchase
        <a className={styles.linkBanner} href="#">
          Invite Now
        </a>
      </div>
      <button
        type="button"
        className={styles.buttonBanner}
        onClick={handleClose}
      >
        <img
          className={styles.closeImg}
          src="/images/icon_close.svg"
          alt="close window"
        />
      </button>
    </div>
  );
};
