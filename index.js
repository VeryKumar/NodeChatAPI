import express from "express";
import * as httpModule from "http";

const app = express();

const http = httpModule.Server(app);

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log("Listening 👂 localhost:" + port + '/');
});