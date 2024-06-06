import express from "express";
import dotenv from "dotenv";


import authRoutes from "./Routes/authroutes.js"
import connectToDb from "./db/db.js";
import messageRoutes from "./Routes/messageroutes.js"


dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;



app.get("/", (req, res) => {
    res.send("hii yashu you are awsome");
})

app.use("/api/auth", authRoutes);

app.use("api/message",messageRoutes);

app.listen(PORT, () => {
    connectToDb();
    console.log("server is running:", PORT);
})