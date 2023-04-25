import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.js";
import express from "express";

const router = express.Router();

router.post("/", (res, req) => {
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      res.json({ success: "Signed in successfully" });
    })
    .catch((error) => {
      res.json({ errCode: error.code, errMsg: error.message });
    });
});

export default router;
