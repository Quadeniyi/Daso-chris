import { BiLogIn } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import Sidebar from "./Sidebar";

const LandingPage1 = () => {
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h3 className="logo">
            Daso<span>chris</span>
          </h3>
          {/* <button className="login-btn btn">
            sign in
            <BiLogIn />
          </button> */}
        </div>
      </nav>
      <section className="page">
        <div className="page-center">
          <Sidebar />
          {/* menu */}
          <div className="menu-container">
            <div className="menu-bar">
              <p>overview</p>
            </div>
            <div className="main-menu">
              <div className="menu-center">
                <div className="menu">
                  <div className="menu-top"></div>
                  <div className="menu-bottom">
                    <div className="menu-icon">
                      <BiGroup />
                      <h6>department</h6>
                    </div>
                    <h3>76</h3>
                  </div>
                </div>
                <div className="menu">
                  <div className="menu-top"></div>
                  <div className="menu-bottom"></div>
                </div>
                <div className="menu">
                  <div className="menu-top"></div>
                  <div className="menu-bottom"></div>
                </div>
              </div>
              <div className="menu-img-container">
                <div className="img-text">
                  <h4>The greatest wealth is health</h4>
                  <h4>-</h4>
                  <h4>virgil</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default LandingPage1;
