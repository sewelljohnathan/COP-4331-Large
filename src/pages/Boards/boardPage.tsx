import { useState } from "react";
import Board from "./board";
import TypeTalk from "./TypeTalk/typeTalk";
import { boardList } from "./data";
import AddWord from "./addWord";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const BoardPage = () => {
  const [selectedBoard, setSelectedBoard] = useState("Home");

  var wide = Math.floor((window.innerWidth - 80) / 80);
  var boardWide = {
    width: String(wide * 80) + "px",
    height: "90%",
    "bakground-color": "#622dccd9",
  };
  var options = boardList.map((board) => (
    <option key={board} value={board}>
      {board}
    </option>
  ));
  

  const [username, setUsername] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      getDoc(doc(db, "users", user.uid))
        .then((doc) => {
          if (doc.exists()) {
            let data = doc.data();
            setUsername(`${data["firstName"]} ${data["lastName"]}`);
          }
        })
        .catch((err) => {});
    }
  });
  var cardStyle = {
    width: "95%",
    background: "#50566d",
    color: "#c3d2da",
    height: "5%",
  };

  var popStyle = {
    color: "#50566d",
    background: "#c3d2da",
  };
  const selectStyle = {
    width: "95%",
    background: "#c3d2da",
    color: "#50566d",
    height: "5%",
  };
   const btnStyle = {
     width: "32px",
     height: "32px",
   };


  return (
    <div className="card mb-3 rounded-5" style={cardStyle}>
      <div className="card-body">
        <div style={boardWide} className={"px-auto mx-auto pt-3 container"}>
          <h1>Welcome {username}</h1>
          <div>
            <button
              className="btn btn-light-outline"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTTS"
              aria-controls="offcanvasTTS"
              style={btnStyle}
            >
              <i className="fi fi-rr-comment-alt"></i>
            </button>
            <button
              className="btn btn-light-outline"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasAddWord"
              aria-controls="offcanvasAddWord"
              style={btnStyle}
            >
              <i className="fi fi-rr-add"></i>
            </button>
            <button className="btn btn-light-outline" style={btnStyle}>
              <i className="fi fi-rr-sign-out-alt"></i>
            </button>

            {/* TTS offcanvas */}
            <div
              className="offcanvas offcanvas-top"
              data-bs-scroll="true"
              id="offcanvasTTS"
              aria-labelledby="offcanvasWithBothOptionsLabel"
              style={popStyle}
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
              style={popStyle}
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
          <Board boardName={selectedBoard} />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
