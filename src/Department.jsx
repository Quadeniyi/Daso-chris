import { BiLogIn } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Subsection from "./component/Subsection";
import Sidebar from "./Sidebar";
const Department = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3 className="logo">
            Daso<span>chris</span>
          </h3>
          <button className="login-btn btn">
            sign in
            <BiLogIn />
          </button>
        </div>
      </nav>
      <section className="page">
        <div className="page-center">
          <Sidebar />
          {/* department */}
          <div className="department">
            <div className="department-bar">
              <button className="back">
                <FiArrowLeft />
              </button>
              <h6>departments</h6>
              <button className="add-department">Add department</button>
            </div>
            <div className="main-menu">
              {/* department Table */}
              <div className="department-table">
                <div className="table-header">
                  <h6>S/N</h6>
                  <h6>Department</h6>
                  <h6>Description</h6>
                </div>
                <div className="table-content">
                  <div className="content">
                    <p>1</p>
                    <p>Xray</p>
                    <p>inspecting internal organ</p>
                  </div>
                </div>
                {/* Navigation */}
                <div className="navigators">
                  <button className="left">
                    <FiChevronLeft />
                  </button>
                  <button className="navigation-page">1</button>
                  <button className="right">
                    <FiChevronRight />
                  </button>
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
    </>
  );
};
export default Department;
