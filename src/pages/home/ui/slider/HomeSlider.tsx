import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";
import { useEffect, useRef } from "react";

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
    <div ref={swiperRef} className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="swiper-slide__flex-container">
            <div className="swiper-slide__girl-prada">
              <img
                className="swiper-slide__img-girl"
                src="/slides/girl_prada.jpg"
                alt="Prada girl"
              />
            </div>
            <div className="swiper-slide__background-prada">
              <div className="swiper-slide__text-prada">
                <img
                  className="swiper-slide__img-text-prada"
                  src="/slides/vector_prada.svg"
                  alt="title Prada"
                />
              </div>
              <div>Big Fashion Festival</div>
              <div>50% - 80% off</div>
              <button type="button" className="button--black">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="swiper-slide__background-girl">
            <div className="swiper-slide__background-dark">
              <div className="swiper-slide__flex-in-dark">
                <div className="swiper-slide__forever-title">FOREVER 21</div>
                <div>Big Fashion Festival</div>
                <div>70% - 80% off</div>
                <button type="button" className="button--white">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="swiper-slide__container-forever21">
            <div className="swiper-slide__girl-forever21">
              <img
                className="swiper-slide__girl-forever21-img"
                src="/slides/girl_forever21.jpg"
                alt="girl in green dress"
              />
            </div>
            <div className="swiper-slide__text-forever21">
              <div className="swiper-slide__forever-title">FOREVER 21</div>
              <div>Big Fashion Festival</div>
              <div>50% - 80% off</div>
              <button type="button" className="button--white">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-pagination"></div>
    </div>
  );
};
