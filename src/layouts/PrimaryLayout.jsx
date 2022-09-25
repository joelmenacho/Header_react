import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer style={{ marginTop: 'auto' }}>Joel Menacho</footer>
    </>
  );
};

export default PrimaryLayout;