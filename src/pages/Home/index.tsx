import React from 'react';
import {
  Container,
  Titulo,
  SubTitulo,
  ButtonContainer,
  Button,
  ButtonText
} from './styles';


export function Home() {
  return (
    <Container>
      <Titulo>Bem vindo</Titulo>
      <SubTitulo>Ao app de estudo sobre websocket</SubTitulo>
      <ButtonContainer>
        <Button>
          <ButtonText>Criar sala</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}