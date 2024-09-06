import { HomeBanner } from "./components/banner/HomeBanner";
import { HomeSlider } from "./components/slider/HomeSlider";
import { HomeProducts } from "./components/products/HomeProducts";

export const Home = () => {
  return (
    <>
      <section>
        <HomeBanner />
        <HomeSlider />
        <HomeProducts />
      </section>
    </>
  );
};
