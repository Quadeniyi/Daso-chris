import { subsection } from "./data";
import { ImSwitch } from "react-icons/im";
import { MdOutlineSettings } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {subsection.map((item) => {
        const { id, icon, text, link } = item;
        return (
          <div key={id} className="subsection">
            {icon}
            <NavLink to={link} className="subsection-btn">
              {text}
            </NavLink>
          </div>
        );
      })}
      <div className="ss">
        <div>
          <MdOutlineSettings />
          <button className="subsection-btn">settings</button>
        </div>
        <div className="sign-out">
          <ImSwitch />
          <Link to={"/"} className="subsection-btn">
            sign out
          </Link>
          {/* <button></button> */}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
