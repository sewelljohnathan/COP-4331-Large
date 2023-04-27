// Import React (Mandatory Step).
import React from "react";

// Functional Component.
// Used to show Question/Answer.
const Output = (props: any) => {
  const styleO = {
    width: 100 + "%",
    height: 100 + "%",
    border: "0px",
    background: "#E5D7FF",
    color: "#50566d",
    "text-align": "right",
    display: "inline",
    "font-size": "24px",
    "word-wrap": "break-word",
  };

  return (
    <div className="screen-row h-100">
      <textarea
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
