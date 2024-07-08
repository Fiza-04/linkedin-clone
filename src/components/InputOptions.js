import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InputOptions.css";

function InputOptions({ Icon, title, color }) {
  return (
    <div className="inputOptions">
      <FontAwesomeIcon icon={Icon} className={`${color} text-[20px]`} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
