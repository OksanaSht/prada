import { Outlet } from "react-router-dom";
import { Header } from "./app/header/Header";
import { Footer } from "./app/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
