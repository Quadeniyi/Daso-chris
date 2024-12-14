const Details = ({ detail }) => {
  const { id, text, icon, amount } = detail;
  return (
    <div className="menu">
      <div className="menu-top"></div>
      <div className="menu-bottom">
        <div className="menu-icon">
          {icon}
          <h6>{text}</h6>
        </div>
        <h3>{amount}</h3>
      </div>
    </div>
  );
};
export default Details;
