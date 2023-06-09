import talk from "../assets/talk.gif";

var cardStyle = {
  width: "100%",
  background: "#411690",
  color: "#c3d2da",
  "word-break": "keep-all",
  
};

export const Start = (props: any) => {
  return (
    <div className="auth-form-container card rounded-5" style ={cardStyle}>
      <img src={talk} alt="" className="img" />
      <h1 >Welcome to <br></br>TalkTastic</h1>
      <br></br>
      <button onClick={() => window.open("/login", "_self")} style = {{borderRadius: "10px"}}>
        Login
      </button>
      <br></br>
      <button onClick={() => window.open("/register", "_self")} style = {{borderRadius: "10px"}}>
        New User
      </button>
      <br></br>
    </div>
  );
};
