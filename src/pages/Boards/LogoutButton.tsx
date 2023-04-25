import { useEffect, useState } from "react";

const LogoutButton = (props: any) => {
  var wider = props.wide + "%";
  var high = String(props.high) + "%";
  const style = {
    width: 0,
    padding: "0px",
    background: "black",
    color: "black",
    "font-size": "110%",
    height: 0,
  };

  return (
    <button
      type="button"
      className={"rounded-1"}
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
export default LogoutButton;
