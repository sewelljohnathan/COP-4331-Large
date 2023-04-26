import talk from "../assets/talk.gif";

export const Start = (props: any) => {
  return (
    <div className="auth-form-container">
      <img src={talk} alt="" className="img" />
      <h1>Welcome to App_Name</h1>
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
