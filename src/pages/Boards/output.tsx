// Import React (Mandatory Step).
import React from "react";

// Functional Component.
// Used to show Question/Answer.
const Output = (props: any) => {
  const styleO = {
    width: 100 + "%",
    background: "#fff",
    height: 100 + "%",
    border: "0px",
    color: "#222",
    "text-align": "right",
    display: "inline",
    "font-size": "24px",
  };

  return (
    <div className="screen-row h-100">
      <input
        type="text"
        readOnly
        value={props.words.join(" ")}
        style={styleO}
        className="rounded-3"
      />
    </div>
  );
};

// Export Output Screen Row.
export default Output;
