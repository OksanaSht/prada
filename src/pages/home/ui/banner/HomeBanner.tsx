import styles from "./styles.module.scss";

export const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textBanner}>
        <div>Invite Friends and get 50% off on your next purchase</div>
        <a className={styles.linkBanner} href="#">
          Invite Now
        </a>
      </div>

      <button type="button" className={styles.buttonBanner}>
        <img
          className={styles.closeImg}
          src="/images/icon_close.svg"
          alt="close window"
        />
      </button>
    </div>
  );
};
