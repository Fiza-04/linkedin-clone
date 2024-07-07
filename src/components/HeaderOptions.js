import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderOptions.css";
import Avatar from "./Avatar";

const HeaderOptions = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOptions">
      {Icon && <FontAwesomeIcon icon={Icon} className="headerOptions-icon" />}
      {/* {avatar && <Avatar className="headerOptions-icon" src={avatar} />} */}
      <h3 className="headerOptions-title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
