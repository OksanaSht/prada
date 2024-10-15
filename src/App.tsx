import { Outlet } from "react-router-dom";
import { Header } from "./app/header/Header";
import { Footer } from "./app/footer/Footer";
import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
