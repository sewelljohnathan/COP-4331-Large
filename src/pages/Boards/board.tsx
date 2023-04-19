import React from "react";
import Button from "./button";
import ControlButton from "./controlButton";
import Output from "./output";
import { wordList } from "./data";
// import { useGlobalState } from "state-pool";
// import { createStore, store} from "state-pool";

// const store = createStore(); 


const Board = (props:any) => {
  const [output, setOutput] = props.store.useState("output");
  const [current, setCurrent] = props.store.useState("current");

    var wider =10;
    var high = 10;
  var currentBoardName  = props.boardName ;
  function filter_board(word:any)
   {
    return word.board === currentBoardName;
  }
  var currentBoard = wordList.filter(filter_board);
  // var rows:any = [];
  function makeRows(currentBoard:any){
    var rows: any = [];
     for (let i = 0; i < currentBoard.length; i++) {
       rows.push(currentBoard[i].word);
     }
     return rows

  } 

     var rows:any = makeRows(currentBoard);
      var wide = Math.floor((window.innerWidth - 80) / wider);
      var boardWide = { width: String(wide * 80) + "px" };
      var pageLen = (window.innerHeight - 300) / high;
      var len = rows.length / pageLen;
      var wider = 20;
      var high = 15;
      var buttons = []

      for(let i = 0; i <rows.length; i++){
        buttons.push(
          <Button txt={rows[i]} wide={wider} high={high} store={props.store} />
        );
      }

      var styleBoard={
        
      }




  return (
    <div >
      <div className="row my-3">
        <div className="col-9">
          <Output high={high * 4} value={output} />
        </div>

        <div className="col-3">
          <div className="row">
            <ControlButton
              txt={" Speak "}
              wide={100}
              high={high}
              id={"speak"}
              store={props.store}
            />
          </div>
          <div className="row">
              <ControlButton
                id={"back"}
                txt={" Back "}
                wide={50}
                high={high}
                store={props.store}
              />
           
              <ControlButton
                id={"clear"}
                txt={" Clear "}
                wide={50}
                high={high}
                store={props.store}
              />

          </div>
        </div>
      </div>

      <div className = "py-3 w-75">{buttons}</div>
    </div>
  );
  

  }


export default Board;