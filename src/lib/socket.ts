//@ts-ignore
import Ws from '@adonisjs/websocket-client';
const socket = Ws('ws://192.168.15.139:3333').connect();

export function ConnectionWebSocket() {

  socket.onopen = () => {
    console.log('dale')
  }

  socket.onclose = () => {
    console.log('close')
  }

  socket.onerror = () => {
    console.log('erro')
  }

  socket.send = () => {
    console.log('alo')
  }

  socket.on('message', () => console.log('dale'))
}

export function subscribe(id: string){
  socket.subscribe(`room:${id}`);

  
}