"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const gamemanager_1 = require("./gamemanager");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const gamemanager = new gamemanager_1.Gamemanager();
wss.on('connection', function connection(ws) {
    console.log("websocket server connection established");
    gamemanager.addUser(ws);
    ws.on("disconnect", () => gamemanager.removeUser(ws));
});
