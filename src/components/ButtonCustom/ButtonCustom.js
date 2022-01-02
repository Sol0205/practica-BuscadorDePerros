import React from "react";
import PropTypes from "prop-types";

function ButtonCustom(props) {
  return (
    <button
      className={
        "btn btn-" + props.type +
        " p-2 " + (!!props.rounded ? "rounded-circle " : "") +
        "btn-" + props.size
      }
    >
      {props.text}
    </button>
  );
}

ButtonCustom.defaultProps = {
  type: "info",
  size: "md",
  rounded: false,
};

ButtonCustom.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.bool,
};

export default ButtonCustom;
