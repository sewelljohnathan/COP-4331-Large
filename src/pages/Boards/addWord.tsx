import React from "react";
// import ReactDOM from "react-dom/client";
// import TalkButton from "./talkButton";
// import { useRef } from "react";
import { createStore } from "state-pool";
import { useState } from "react";
import { boardList } from "./data";
const AddWord = (props:any) => {
  
    const [board, setBoard] = React.useState("Home");
    // const [board, setBoard] = React.useState("Home");
      // var optionsOld = boardList.map((board:any) => (
      //   <option key={board} value={board}>
      //     {board}
      //   </option>
      // ));
      var options:any = []
      for (let i = 0; i < boardList.length; i++) {
        options.push(
          <option key={boardList[i]} value={boardList[i]}>
            {boardList[i]}
          </option>
        );
      }
      const selectStyle = {
        // width: "95%",
        background: "white",
        color: "black",
        height: "5%",
      };
  
        
  return (
    <div className="input-group mb-3">
      <input className="form-control"></input>
      <select className="form-select rounded-start-pill" style={selectStyle}>
        {options}
      </select>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}

 export default AddWord;
