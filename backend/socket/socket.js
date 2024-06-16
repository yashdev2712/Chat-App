import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

const userSocketMap = {};           //{userId:socketId}

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUser", Object.keys(userSocketMap));  //io.emmit send info to all clients


    socket.on("disconnect", () => {            //socket.on() is used to listend to the events. Can be  used both on client and server side .
        console.log("A user disconnected:", socket.id);
        delete userSocketMap[userId];          //emmit when a user disconnect
        io.emit("getOnlineUser", Object.keys(userSocketMap))
    });
});


export { app, io, server };
