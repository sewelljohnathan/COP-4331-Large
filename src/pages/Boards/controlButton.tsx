import { useEffect, useState } from "react";

const ControlButton = (props: any) => {
  var wider = props.wide + "%";
  var high = String(props.high) + "%";
  const style = {
    width: 50,
    padding: "5px",
    "font-size": "80%",
    height: high,
  };

  return (
    <button
      type="button"
      className={"rounded-3 control"}
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
