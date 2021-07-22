import React from 'react';
import { Container, Title } from './styles';

export function Room({route}: any){
  const {id} = route.params;
  console.log(id)
  return (
    <Container>
      <Title>Room</Title>
    </Container>
  )
}