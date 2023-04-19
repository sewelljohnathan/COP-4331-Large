import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../src/config/firebase"
const express = require("express");
const router = express.Router();

router.post("/register", async(req, res) => {
    const { email, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            res.status(200);
            console.log("Account created successfully");
        })
        .catch((error) => {
            res.json({"error": error});

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
        });
});

module.exports = router;
