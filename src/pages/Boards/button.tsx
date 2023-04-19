// Import React (Mandatory Step).
import React from "react";
import { useGlobalState } from "state-pool";
// import { createStore } from "state-pool";
// import { store } from "state-pool";

// const store = createStore(); 

// Create our Button component as a functional component.
const Button = (props:any) => {
  const [output, setOutput] = props.store.useState("output");
   const [current, setCurrent] = props.store.useState("current");
  var wider = String(props.wide) + "%";
  var high = String(props.high) + "%";
  const style = {
    width: 'fit-content',
    background: "DarkOliveGreen",
    color: "white",
    height: high,
    'font-size': "85%",
   ' margin-top': '2%',
   padding : "5px"
  };

   let handleClick = (e:any) => {
    if(output == null){
      var out = e.target.value;
      setCurrent(e.target.value);
      setOutput(out);
      console.log(out);

    }
    else{
       var out:any = output + " " + e.target.value;
       setCurrent(e.target.value);
       setOutput(out);
       console.log(out);
    }
   
   };
  return (

      <button
        type="button"
        className={"rounded-3"}
        value={props.txt}
        style={style}
        onClick={handleClick}
     
      >
        {props.txt}
      </button>

  );
};

// Export our button component.
export default Button;
