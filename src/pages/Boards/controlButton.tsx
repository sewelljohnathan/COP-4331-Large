import { useEffect, useState } from "react";

const ControlButton = (props: any) => {
  var wider = props.wide + "%";
  var high = String(props.high) + "%";
  const style = {
    width: "fit-content",
    padding: "5px",
    background: "#c9dac3",
    color: "#50566d",
    "font-size": "85%",
    height: high,
  };

  return (
    <button
      type="button"
      className={"rounded-3"}
      value={props.txt}
      style={style}
      id={props.id}
      onClick={props.handleClick}
    >
      {props.txt}
    </button>
  );
};

// Export our button component.
export default ControlButton;
