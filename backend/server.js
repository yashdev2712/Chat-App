import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/authroutes.js";
import connectToDb from "./db/db.js";
import messageRoutes from "./Routes/messageroutes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/userRoutes.js"
import { app, server } from "./socket/socket.js";

dotenv.config();


app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hi Yashu, you are awesome");
});


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
    connectToDb();
    console.log("Server is running on port:", PORT);
});
