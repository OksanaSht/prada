import styles from "./styles.module.scss";
import { useLocalStorage } from "usehooks-ts";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import clsx from "clsx";

export const HomeBanner = () => {
  const [visible, setVisible] = useLocalStorage("banner", true);
  const [animationParent] = useAutoAnimate();

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div ref={animationParent}>
      {visible && (
        <div className={styles.banner}>
          <div className={clsx("container", styles.container)}>
            <div className={styles.content}>
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
        </div>
      )}
    </div>
  );
};
