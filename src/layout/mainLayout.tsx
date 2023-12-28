import { Outlet } from "react-router-dom";
import Navbar from "../components/molecule/navbar/navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
