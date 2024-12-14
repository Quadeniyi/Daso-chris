import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const AddDepartment = () => {
  return (
    <div className="page-format">
      <div className="info-bar">
        <NavLink to={"/landing/department"} className="back">
          <FiArrowLeft />
        </NavLink>
        <h6>Add a department</h6>
      </div>
      <div className="main-menu">
        <div className="new-update">
          <div>
            <label htmlFor="organization name" className="form-label">
              Department
            </label>
            <input
              type="text"
              name="organization name"
              id="organization name"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input type="email" name="email" id="email" className="input" />
          </div>
          <button to={"/department"} className="btn update-btn">
            add department
          </button>
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
export default AddDepartment;
