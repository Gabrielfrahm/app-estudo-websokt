import React from 'react';
import { useEffect } from 'react';
import { ROOM_FETCH } from '../../actions/actions';
import { Container, Title } from './styles';

export function Room({ route }: any) {
  const { id } = route.params;
  
  useEffect(() => {
    async function Room() {
      const room = await ROOM_FETCH(id);
      console.log(room);
    }
    Room();
  }, []);

  return (
    <Container>
      <Title>Room</Title>
    </Container>
  )
}