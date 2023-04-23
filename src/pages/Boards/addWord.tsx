import { useRef } from "react";
import { boardList } from "./data";
import { auth, db } from "../../config/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
const AddWord = (props: any) => {
  var options: any = [];
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

  const wordRef = useRef("");
  const boardRef = useRef("Home");
  const addWord = (e: any) => {
    if (!auth.currentUser) {
      return;
    }
    if (wordRef.current === "" || boardRef.current === "") {
      return;
    }

    updateDoc(doc(db, "users", auth.currentUser.uid), {
      wordList: arrayUnion({ word: wordRef.current, board: boardRef.current }),
    }).then((res) => {
      window.open("/board", "_self");
    });
  };

  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        onChange={(e: any) => {
          wordRef.current = e.target.value;
        }}
      ></input>
      <select
        className="form-select rounded-start-pill"
        style={selectStyle}
        onChange={(e: any) => {
          boardRef.current = e.target.value;
        }}
      >
        {options}
      </select>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={addWord}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddWord;
