import { INIT_GAME, MOVE,GAME_OVER } from "./messages";
import { Game } from "./Game";
import { WebSocket } from "ws";


export class Gamemanager{
    private games:Game []
    private pendingUser: WebSocket|null;
    private users: WebSocket[];
    constructor(){
        this.games=[];
        this.pendingUser=null
        this.users=[]
    }
    addUser(socket:WebSocket){
        this.users.push(socket);
        this.addHandler(socket);

    }
    removeUser(socket: WebSocket){
        this.users=this.users.filter(user=>user !==socket);
    }
    private addHandler(socket: WebSocket){
        socket.on("message",(data)=>{
            const message =JSON.parse(data.toString());

            if (message.type==INIT_GAME){
                console.log("hereeeessswswswsws")
                if (this.pendingUser){
                    const game= new Game(this.pendingUser,socket);
                    this.games.push(game);
                    this.pendingUser=null;

                }
                else{this.pendingUser=socket;}
            }

            if (message.type==MOVE){
                console.log("hereeee")
                const game =this.games.find(game=> game.player1===socket || game.player2=== socket);
                if (game){
                    game.makeMove(socket,message.payload.move);
                }
            }  
        })

    }
}