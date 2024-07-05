import styles from "./styles.module.scss";

export const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div>Invite Friends and get 50% off on your next purchase</div>
      <a href="#">Invite Now</a>
      <button type="button">
        <img src="/images/icon_close.svg" alt="close window" />
      </button>
    </div>
  );
};
