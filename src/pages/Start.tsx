import React, {useState} from "react";
import talk from "../assets/talk.gif"

export const Start = (props:any) => {
    return (
        <div className = "auth-form-container">
            <img src={talk} alt="" className="img" />
            <h1>Welcome to Logo Name</h1>
            <button onClick={() => window.open('/login', '_self')}>Login</button>
            <button onClick={() => window.open('/register', '_self')}>New User</button>
        </div>
    )
}