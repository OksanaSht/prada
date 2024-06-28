import "./slider.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
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
