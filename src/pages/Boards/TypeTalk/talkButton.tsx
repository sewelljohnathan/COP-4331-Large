// Import React (Mandatory Step).
import React from "react";
import { useGlobalState } from "state-pool";
// import { createStore } from "state-pool";
// import { store } from "state-pool";

// const store = createStore();

// Create our Button component as a functional component.
const talkButton = (props: any) => {
  const [speech, setSpeech] = props.store.useState("speech");
  var wider = String(props.wide) + "px";
  var high = String(props.high) + "px";
  const style = {
    width: wider,
    background: "DarkOliveGreen",
    color: "white",
    height: high,
  };
  let handleClick = (e: any) => {
    
       var out = speech;
       const value = new SpeechSynthesisUtterance(String(out));
       window.speechSynthesis.speak(value);
       setSpeech("")
   
  };
  
  return (
    <button
      className={"rounded-3"}
      style={style}
      onClick={handleClick}
      type = "button"
    >
      Speak
    </button>
  );
};

// Export our button component.
export default talkButton;