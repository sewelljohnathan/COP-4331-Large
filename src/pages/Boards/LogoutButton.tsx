import { useEffect, useState } from "react";

const LogoutButton = (props: any) => {
  var wider = props.wide + "%";
  var high = String(props.high) + "%";
  const style = {
    width: 50,
    padding: "5px",
    background: "black",
    color: "white",
    "font-size": "85%",
    height: high,
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
