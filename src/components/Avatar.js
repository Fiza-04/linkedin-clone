import "./HeaderOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Avatar({ type }) {
  return (
    <div>
      {type === "header" ? (
        <FontAwesomeIcon icon={faUser} className="header-avatar-icon" />
      ) : (
        <FontAwesomeIcon icon={faUser} className="avatar-icon" />
      )}
    </div>
  );
}

export default Avatar;
