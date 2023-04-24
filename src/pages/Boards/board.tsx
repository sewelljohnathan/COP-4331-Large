import { useEffect, useState } from "react";
import Button from "./button";
import ControlButton from "./controlButton";
import Output from "./output";
import { doc, getDoc, arrayRemove, updateDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Board = (props: any) => {
  let wider = 10;
  let high = 10;
  let currentBoardName = props.boardName;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [words, setWords] = useState(new Array<string>());

  const onControlClick = (e: any) => {
    let newWords = [...words];

    switch (e.target.id) {
      case "clear":
        console.log("Clear");

        while (newWords.length > 0) {
          newWords.pop();
        }
        setWords(newWords);
        break;

      case "back":
        console.log("Back");
        newWords.pop();
        setWords(newWords);
        break;

        case "delete":
        console.log("Delete");
        
        if (newWords.length > 0) {
          if (window.confirm("These words will be deleted from your board. Are you sure you want to continue?") == true) {
        
            while (newWords.length > 0) {
              let deletedWord = newWords.pop();

              if (!auth.currentUser) {
                break;
              }
              if (deletedWord === "" || currentBoardName === "") {
                break;
              }

              updateDoc(doc(db, "users", auth.currentUser.uid), {
              wordList: arrayRemove({ word: deletedWord, board: currentBoardName }),
              }).then((res) => {
              window.open("/board", "_self");
              });
            }}}
            
        setWords(newWords);
        console.log(newWords);
        break;

      default:
        window.speechSynthesis.speak(
          new SpeechSynthesisUtterance(words.join(" "))
        );
        while (newWords.length > 0) {
          newWords.pop();
        }
        setWords(newWords);
    }
  };

  const onButtonClick = (e: any) => {
    console.log(e.target.value);

    let newWords = [...words];
    newWords.push(e.target.value);
    setWords(newWords);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  const [rows, setRows] = useState(new Array<any>());
  useEffect(() => {
    let user = auth.currentUser;
    if (user) {
      getDoc(doc(db, "users", user.uid))
        .then((doc) => {
          if (doc.exists()) {
            let data = doc.data();
            let wordList = data["wordList"];
            var currentBoard = wordList.filter((word: any) => {
              return word.board === currentBoardName;
            });

            let newRows = [];
            for (let i = 0; i < currentBoard.length; i++) {
              newRows.push(currentBoard[i].word);
            }

            setRows(newRows);
          }
        })
        .catch((err) => {});
    }
  }, [currentBoardName, isAuthenticated]);

  let wide = Math.floor((window.innerWidth - 80) / wider);
  let boardWide = { width: String(wide * 80) + "px" };
  let pageLen = (window.innerHeight - 300) / high;
  let len = rows.length / pageLen;
  wider = 20;
  high = 15;

  const buttons = [];
  for (let i = 0; i < rows.length; i++) {
    buttons.push(
      <Button
        txt={rows[i]}
        wide={wider}
        high={high}
        handleClick={onButtonClick}
      />
    );
  }

  return (
    <div>
      <div className="row my-3">
        <div className="col-9">
          <Output high={high * 4} words={words} />
        </div>

        <div className="col-3">
          <div className="row">
            <ControlButton
              txt={" Speak "}
              wide={100}
              high={high}
              id={"speak"}
              handleClick={onControlClick}
            />

            <ControlButton
              txt={" Back "}
              wide={100}
              high={high}
              id={"back"}
              handleClick={onControlClick}
              />
          </div>
          <div className="row">
            <ControlButton
              id={"clear"}
              txt={" Clear "}
              wide={50}
              high={high}
              handleClick={onControlClick}
            />

            <ControlButton
              id={"delete"}
              txt={" Delete "}
              wide={50}
              high={high}
              handleClick={onControlClick}
            />
          </div>
        </div>
      </div>

      <div className="py-3 w-75">{buttons}</div>
    </div>
  );
};

export default Board;
