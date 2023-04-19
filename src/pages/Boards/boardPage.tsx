import logo from "./logo.svg";
import React from "react";
// import "./App.css";
import Board from "./board";
import TypeTalk from "./TypeTalk/typeTalk"
// import Output from "./components/output.js";
// import "./index.css";
import { boardList } from "./data";
import AddWord from "./addWord"
import { createStore } from "state-pool";
// import TypeTalk from "./components/TypeTalk/typeTalk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const store = createStore();

const BoardPage = () => {
  const [board, setBoard] = React.useState("Home");
  // var currentBoardName = "Home";
  // function filter_board(word: any) {
  //   return word.board === currentBoardName;
  // }

  const [selectedBoard, setSelectedBoard] = React.useState("Home");

  let handleBoardChange = (e: any) => {
    setBoard(e.target.value);
  };
  var wide = Math.floor((window.innerWidth - 80) / 80);
  var boardWide = { width: String(wide * 80) + "px",
      height: "90%" };
 var options = boardList.map((board) => (
   <option key={board} value={board}>
     {board}
   </option>
 ));
   const selectStyle = {
     width: '95%',
     background: "white",
     color: "black",
     height: "5%",
   };
  return (
    <div style={boardWide} className={"px-auto mx-auto pt-3"}>
      <div>
        <button
          className="btn btn-light-outline"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTTS"
          aria-controls="offcanvasTTS"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <button
          className="btn btn-light-outline"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasAddWord"
          aria-controls="offcanvasAddWord"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>

        {/* TTS offcanvas */}
        <div
          className="offcanvas offcanvas-top"
          data-bs-scroll="true"
          id="offcanvasTTS"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <TypeTalk />
          </div>
        </div>
        {/* add word offcanvas */}

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          id="offcanvasAddWord"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <AddWord />
          </div>
        </div>
      </div>
      <select
        className="form-select"
        style={selectStyle}
        onChange={(e) => setSelectedBoard(e.target.value)}
      >
        {options}
      </select>
      <Board boardName={selectedBoard} store={store} />
    </div>
  );
};

export default BoardPage