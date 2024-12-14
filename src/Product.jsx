import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
const Product = () => {
  return (
    <div className="page-format">
      <div className="info-bar">
        <Link to={"/landing"} className="back">
          <FiArrowLeft />
        </Link>
        <h6>departments</h6>
        <NavLink to={"add-product"} className="add-update">
          Add product
        </NavLink>
      </div>
      <div className="main-menu">
        {/* product Table */}
        <div className="table">
          <div className="table-header">
            <h6>S/N</h6>
            <h6>Department</h6>
            <h6>Description</h6>
          </div>
          <div className="table-content">
            <div className="content">
              <p>1</p>
              <p>chlorophenylcho</p>
              <p>malarial symptom</p>
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
  );
};
export default Product;
