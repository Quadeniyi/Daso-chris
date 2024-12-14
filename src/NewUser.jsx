import { ImNotification } from "react-icons/im";
import { Link } from "react-router-dom";

const NewUser = () => {
  return (
    <article className="account-container">
      <div className="account-top">Create Your Organization Account.</div>
      <div className="account">
        <div>
          <label htmlFor="organization name" className="form-label">
            organization name
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
      </div>
      <Link to={"/landing"} className="ctn-btn btn">
        continue
      </Link>
      <p>
        <ImNotification /> Please note that the email address must be valid and
        active.
      </p>
    </article>
  );
};
export default NewUser;
