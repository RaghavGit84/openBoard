const express = require("express");
const socket = require("socket.io");

const app = express();  //initialize and server ready

app.use(express.static("public"));  //express will take the index.html from public folder

let port = process.env.PORT || 5000;  
let server = app.listen(port, () => {
    console.log("Listening to port " + port);
})

let io = socket(server);

io.on("connection", (socket) => {    // on is like event listener
    console.log("Made socket Connection");
    
    //Received data
    socket.on("beginPath", (data) => {
        // data -> data from frontend
        // Now transfer data to all connected computers
        io.sockets.emit("beginPath", data);
    })
    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })
    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    }) 

})













