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
        source={require('../../assets/lottie/lf30_editor_px8yaoom.json')}
        style={{
          width: '100%',
          height: '65%',
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
        <Button style={{backgroundColor: '#fff'}} disabled={loading} onPress={() => navigation.navigate('SelectRoom')} >
          <ButtonText style={{ color: '#2F6092'}}>Entrar em uma sala</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}