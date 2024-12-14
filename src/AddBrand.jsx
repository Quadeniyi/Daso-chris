import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const AddBrand = () => {
  return (
    <div className="page-format">
      <div className="info-bar">
        <NavLink to={"/landing/brand"} className="back">
          <FiArrowLeft />
        </NavLink>
        <h6>Add a brand</h6>
      </div>
      <div className="main-menu">
        <div className="new-update">
          <div>
            <label htmlFor="client name" className="form-label">
              Brand
            </label>
            <input
              type="text"
              name="client name"
              id="client name"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              info
            </label>
            <input type="email" name="email" id="email" className="input" />
          </div>
          <button className="btn update-btn">add brand</button>
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
export default AddBrand;
