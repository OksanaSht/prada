import Swiper from "swiper";
import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
import { Button } from "@/shared/components/button/Button";

export const HomeSlider = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current!, {
      modules: [Navigation, Pagination],
      direction: "horizontal",
      loop: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div ref={swiperRef} className={clsx("swiper", styles.slider)}>
      <div className={clsx("swiper-wrapper", styles.wrapper)}>
        <div className={clsx("swiper-slide", styles.slide)}>
          <div className={styles.container}>
            <div className={styles.girlPrada}>
              <img
                className={styles.imgGirl}
                src="/slides/girl_prada.jpg"
                alt="Prada girl"
              />
            </div>
            <div className={styles.backgroundPrada}>
              <div className={styles.textPrada}>
                <img
                  className={styles.imgTextPrada}
                  src="/slides/vector_prada.svg"
                  alt="title Prada"
                />
              </div>
              <div>Big Fashion Festival</div>
              <div>50% - 80% off</div>
              <Button color="dark">Explore</Button>
            </div>
          </div>
        </div>

        <div className={clsx("swiper-slide", styles.slide)}>
          <div className={styles.backgroundGirl}>
            <div className={styles.backgroundDark}>
              <div className={styles.flexDark}>
                <div className={styles.foreverTitle}>FOREVER 21</div>
                <div>Big Fashion Festival</div>
                <div>70% - 80% off</div>
                <Button color="light">Explore</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx("swiper-slide", styles.slide)}>
          <div className={styles.containerForever21}>
            <div className={styles.girlForever21}>
              <img
                className={styles.girlForever21Img}
                src="/slides/girl_forever21.jpg"
                alt="girl in green dress"
              />
            </div>
            <div className={styles.textForever21}>
              <div className={styles.foreverTitle}>FOREVER 21</div>
              <div>Big Fashion Festival</div>
              <div>50% - 80% off</div>
              <Button className="button" color="light">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("swiper-pagination", "bullet-active")}></div>
    </div>
  );
};
