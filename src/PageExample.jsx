import { BiGroup } from "react-icons/bi";
import { details } from "./data";
import Details from "./component/Details";
const PageExample = () => {
  return (
    <div className="menu-container">
      <div className="bar">
        <p>overview</p>
      </div>
      <div className="main-menu">
        <div className="menu-center">
          {details.map((detail) => {
            return <Details key={detail.id} detail={detail} />;
          })}
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
export default PageExample;
