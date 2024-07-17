import Swiper from "swiper";
import { clsx } from "clsx";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
import { Children, useEffect, useRef } from "react";

import { Button } from "../../../../shared/components/button/Button";


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
          <div className={clsx(styles.container)} >
            <div className= {clsx(styles.girlPrada)}>
              <img
                className={clsx(styles.imgGirl)}     
                src="/slides/girl_prada.jpg"
                alt="Prada girl"
              />
            </div>
            <div className= {clsx(styles.backgroundPrada)}>
              <div className={clsx(styles.textPrada)} >
                <img
                  className= {clsx(styles.imgTextPrada)}  
                  src="/slides/vector_prada.svg"
                  alt="title Prada"
                />
              </div>
              <div>Big Fashion Festival</div>
              <div>50% - 80% off</div>
              <Button className={clsx("button", styles.blackButton)}>Explore</Button>
              
            </div>
          </div>
        </div>


        <div className={clsx("swiper-slide", styles.slide)}>
          <div className={clsx(styles.backgroundGirl)}>
            <div className={clsx(styles.backgroundDark)}>
              <div className={clsx(styles.flexDark)}>
                <div className={clsx(styles.foreverTitle)}>FOREVER 21</div>
                <div>Big Fashion Festival</div>
                <div>70% - 80% off</div>
                <Button className={clsx("button", styles.whiteButton)}>Explore</Button>
              </div>
            </div>
          </div>
        </div>


        <div className={clsx("swiper-slide", styles.slide)}>
          <div className={clsx(styles.containerForever21)}>
            <div className={clsx(styles.girlForever21)}>
              <img
                className={clsx(styles.girlForever21Img)}
                src="/slides/girl_forever21.jpg"
                alt="girl in green dress"
              />
            </div>
            <div className={clsx(styles.textForever21)}>
              <div className={clsx(styles.foreverTitle)}>FOREVER 21</div>
              <div>Big Fashion Festival</div>
              <div>50% - 80% off</div>
             <Button className={clsx("button", styles.whiteButton)}>Explore Now</Button>
            </div>
          </div>
        </div>

      </div>

      <div className={clsx("swiper-pagination","bullet-active")}></div>
    </div>
  );
};
