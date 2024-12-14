import { subsection } from "../data";

const Subsection = () => {
  return subsection.map((item) => {
    const { id, icon, text } = item;
    return (
      <div key={id} className="subsection">
        {icon}
        <button className="subsection-btn">{text}</button>
      </div>
    );
  });
};
export default Subsection;
