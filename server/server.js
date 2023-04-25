import cors from "cors";
import express from "express";
import registerRoute from "./routes/Register.js";
import loginRoute from "./routes/Login.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


