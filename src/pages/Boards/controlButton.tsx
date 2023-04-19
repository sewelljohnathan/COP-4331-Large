import React from "react";
import { createStore } from "state-pool";
// import { useGlobalState } from "state-pool";

const store:any = createStore(); 


const ControlButton = (props:any) => {
    const [output, setOutput] = props.store.useState("output");
    const [current, setCurrent] = props.store.useState("current");
  var wider = props.wide + "%";
  var high = String(props.high) + "%";
  const style = {
    width: 'fit-content',
    padding : "5px",
    background: "DarkOliveGreen",
    color: "white",
    "font-size": "85%",
    height: high,
  };

  let handleClick = (e:any) => {
    switch (e.target.id) {
      case "clear":
        console.log("Clear");
        setCurrent("")
        setOutput(" ");
        break;
      case "back":
        console.log("Back");

        var currentLen = output.length;
        var len = currentLen - current.length;
        if(len <=0){
            setCurrent("");
            setOutput("");
        }else{
             var out = output.slice(0, len);
             setCurrent("");
             props.store.setState("output", out);
        }
       
        break;
      default:
        console.log("SPEAK");
        var out = output;
        const value = new SpeechSynthesisUtterance(String(out));
        window.speechSynthesis.speak(value);
        setOutput("")
        setCurrent ("");
    }
  };

  return (
    <button
      type="button"
      className={"rounded-3"}
      value={props.txt}
      style={style}
      id={props.id}
      onClick={handleClick}
    >
      {props.txt}
    </button>
  );
};



// Export our button component.
export default ControlButton;
