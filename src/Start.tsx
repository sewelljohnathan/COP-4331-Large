import React, {useState} from "react";
import { Register } from "./components/Register/Register";
import talk from "./assets/talk.gif";

export const Start = (props:any) => {
    return (
        <div className = "auth-form-container">
            <img src={talk} alt="" className="img" />
            <h1>Welcome to Logo Name</h1>
            <button onClick={() => props.onFormSwitch('login')}>Login</button>
            <button onClick={() => props.onFormSwitch('register')}>New User</button>
        </div>
    )
}