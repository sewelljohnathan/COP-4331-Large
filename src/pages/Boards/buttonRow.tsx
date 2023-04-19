import React from "react";
import Button from "./button.js";

const ButtonRow = (props:any) => {
  const rows = [];
  console.log(props.words);

  for (let i = props.start; i < (props.start + props.len); i++) {
    console.log(props.words[i]);
    rows.push(
      <Button
        txt={props.words[i]}
        wide={props.wide}
        high={props.high}
        handleClick={props.handleClick}
      />
    );
  }

  return <div className ="mx-auto my-3"> {rows} </div>;
};

// Export our button component.
export default ButtonRow;
