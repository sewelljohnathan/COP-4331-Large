import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import express, { response } from "express";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { email, password, fName, lName } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        addDoc(collection(db, "users"), {
          firstName: fName,
          lastName: lName,
          uuid: userCredential.user.uid,
        })
          .then((responce) => {
            res.json({ success: "User added to database" });
          })
          .catch((err) => {
            res.json({ error: err });
          });
      })
      .catch((error) => {
        res.json({ errCode: error.code, errMsg: error.message });
      });
  } catch (err) {
    res.json({ error: err });
  }
});

export default router;
