"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gamemanager = void 0;
const messages_1 = require("./messages");
const Game_1 = require("./Game");
class Gamemanager {
    constructor() {
        this.games = [];
        this.pendingUser = null;
        this.users = [];
    }
    addUser(socket) {
        this.users.push(socket);
        this.addHandler(socket);
    }
    removeUser(socket) {
        this.users = this.users.filter(user => user !== socket);
    }
    addHandler(socket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());
            if (message.type == messages_1.INIT_GAME) {
                console.log("hereeeessswswswsws");
                if (this.pendingUser) {
                    const game = new Game_1.Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else {
                    this.pendingUser = socket;
                }
            }
            if (message.type == messages_1.MOVE) {
                console.log("hereeee");
                const game = this.games.find(game => game.player1 === socket || game.player2 === socket);
                if (game) {
                    game.makeMove(socket, message.payload.move);
                }
            }
        });
    }
}
exports.Gamemanager = Gamemanager;
