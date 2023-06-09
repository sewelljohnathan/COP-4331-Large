import { useEffect, useState } from "react";

// Create our Button component as a functional component.
const Button = (props: any) => {
  var wider = String(props.wide) + "%";
  var high = String(props.high) + "%";
  const style = {
    width: "fit-content",
    // background: "#CCF1FF",
    // color: "#50566d",
    height: high,
    "font-size": "85%",
    " margin-top": "2%",
    padding: "5px",
  };

  return (
    <button
      type="button"
      className={"rounded-3 word"}
      value={props.txt}
      style={style}
      onClick={props.handleClick}
    >
      {props.txt}
    </button>
  );
};

// Export our button component.
export default Button;
