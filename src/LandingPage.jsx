import { BiGroup } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h3 className="logo">
            Daso<span>chris</span>
          </h3>
        </div>
      </nav>
      <section className="page">
        <div className="page-center">
          <Sidebar />
          <Outlet />
        </div>
      </section>
    </main>
  );
};
export default LandingPage;
