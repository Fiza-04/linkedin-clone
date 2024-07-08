import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderOptions.css";
import Avatar from "./Avatar";

const HeaderOptions = ({ Icon, title }) => {
  return (
    <div className="headerOptions">
      {Icon && <FontAwesomeIcon icon={Icon} className="headerOptions-icon" />}
      {!Icon && <Avatar type="header" className="headerOptions-icon" />}
      <h3 className="headerOptions-title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
