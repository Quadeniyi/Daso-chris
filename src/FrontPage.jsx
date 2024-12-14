import { AiFillHeart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import img1 from "../src/assets/attendant-nurse.jpg";
import { Link } from "react-router-dom";
const FrontPage = () => {
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h3 className="logo">
            Daso<span>chris</span>
          </h3>
          {/* <button > */}
          <Link to={"/landing"} className="login-btn btn">
            sign in
            <BiLogIn />
          </Link>
          {/* </button> */}
        </div>
      </nav>
      <header className="hero">
        <div className="hero-center">
          <article className="hero-text">
            <div className="heart-logo">
              <span>
                <AiFillHeart />
              </span>
              <h4>health first</h4>
            </div>
            <h3>The Key to Improved Efficiency and Patient Care.</h3>
            <p>
              A Hospital Management System that Empowers Your Staff and Improves
              Patient Outcomes.
            </p>
            <Link to={"/new-user"} className="start-btn btn">
              get started
            </Link>
          </article>
          <article className="img-container">
            <img src={img1} alt="attendant" className="img" />
          </article>
        </div>
      </header>
      <hr />
    </main>
  );
};
export default FrontPage;
