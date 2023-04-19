// import React from "react";
// import ReactDOM from "react-dom/client";
// import TalkButton from "./talkButton";
// import { useRef } from "react";
import { createStore } from "state-pool";
import { useState } from "react";
const TypeTalk = (props:any) => {
    // const inputRef = useRef(null);
    const store = createStore();
    const [speech, setSpeech] = useState("");
    
  let handleClick = (e: any) => {
    // var out = document.getElementById!("talkInput")
    if (document.getElementById!("talkInput") != null) {
      var out = speech
      const value = new SpeechSynthesisUtterance(String(out));
      window.speechSynthesis.speak(value);
      setSpeech("");
    } 
  };
  
  return (
    // <form>
    //   <input
    //     type="text"
    //     onChange={(e) => setSpeech(e.target.value)}
    //   />
    //   <TalkButton txt={speech} store={store} />
    // </form>

    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-describedby="button-addon2"
        id="talkInput"
        value ={speech}
        onChange={(e) => setSpeech(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleClick}
      >
        Speak
      </button>
    </div>
  );
}

 export default TypeTalk;
