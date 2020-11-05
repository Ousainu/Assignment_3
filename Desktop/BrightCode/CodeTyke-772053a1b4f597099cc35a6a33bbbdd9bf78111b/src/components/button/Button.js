import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "./Styles.scss";

const Button = (props) => {
  return (
    <div className={"submitButton"} onClick={props.handleSubmit}>
      {props.label}
      <div className="showLoader">
        {props.showLoader && (
          <FontAwesomeIcon icon={faCircleNotch} className="loaderIcon" />
        )}
      </div>
    </div>
  );
};

export default Button;
