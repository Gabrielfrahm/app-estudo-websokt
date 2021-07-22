import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import { ROOM_CREATE } from '../../actions/actions';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  Titulo,
  SubTitulo,
  ButtonContainer,
  Button,
  ButtonText
} from './styles';


export function Home() {
  const [loading , setLoading] = useState(false);
  const navigation = useNavigation();

  const handleCreateRoom = async () =>{
    setLoading(true);
    const room = await ROOM_CREATE();
    const { uuid } : any = room;
    setLoading(false);
    navigation.navigate('Room', { id: uuid})
  }

  return (
    <Container>
      <Header>
        <Titulo>Bem vindo</Titulo>
        <SubTitulo>Ao app de estudo sobre websocket</SubTitulo>
        <SubTitulo style={{color: 'grey', fontSize: 12}}>(um pequeno projeto de um chat)</SubTitulo>
        <LottieView 
        source={require('../../assets/lottie/63029-chatting-couple-animation.json')}
        style={{
          top: 20,
          width: '100%',
          height: '70%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        autoPlay
        loop
      />
      </Header>
      <ButtonContainer>
        <Button disabled={loading} onPress={handleCreateRoom} >
          <ButtonText>Criar sala</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}