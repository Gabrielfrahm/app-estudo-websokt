import React, {useEffect, useState} from 'react';

import { ROOM_FETCH } from '../../actions/actions';
import {ConnectionWebSocket,subscribe} from '../../lib/socket';
import { 
  Container, 
  Title 
} from './styles';

export function Room({ route }: any) {
  const [messages , setMessages] = useState<{}>({});
  const { id } = route.params;
  let subscription;

  useEffect(() => {
    async function Room(){
      const room = await ROOM_FETCH(id);
    }
    Room();
    ConnectionWebSocket();
    subscribe(id);
  }, []);

  

  // console.log(messages)
  function handleMessageAdd(message: any){
    const {type, data} = message;
    console.log(message);

    // switch(type){
    //   case 'room:newMessage':
    //     // setMessages([...messages,data]);
    //     break;
    //   default: 
    // }
  }

  return (
    <Container>
      <Title>Room</Title>
    </Container>
  )
}