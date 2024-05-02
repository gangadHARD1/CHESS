import { WebSocketServer } from 'ws';
import {Gamemanager} from './gamemanager';

const wss = new WebSocketServer({ port: 8080 });
const gamemanager =new Gamemanager();

wss.on('connection', function connection(ws) {
  console.log("websocket server connection established")
  gamemanager.addUser(ws)
  ws.on("disconnect",() =>gamemanager.removeUser(ws))
}) ;