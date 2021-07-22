import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LIST_ROOM } from '../../actions/actions';
// import {List} from './interface';
import {
  CardRoom,
  Container,
  Header,
  Room,
  Titulo,
  TitleCardRoom,
  HeaderCardRoom,
  CardBody,
} from './styles';

export function SelectRoom() {

  const [listRooms, setListRooms] = useState<any>([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    async function list() {
      const rooms = await LIST_ROOM();
      setListRooms(rooms);
    }
    list();
  }, [])

  return (
    <Container>
      <Header>
        <Titulo>Selecione uma sala</Titulo>
      </Header>
      <View
        style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: `60%` }}
      >
        <FlatList
          data={listRooms}
          style={{ width: '80%', flex: 1 }}
          keyExtractor={(item) => item.uuid}
          renderItem={({ item }) => (
            <CardRoom>
              <Room onPress={() => navigation.navigate('Room', { id: item.uuid})}>
                <HeaderCardRoom>
                  <TitleCardRoom>Sala:{item.id}</TitleCardRoom>
                  <TitleCardRoom>Criada em : {item.created_at}</TitleCardRoom>
                </HeaderCardRoom>
                <CardBody>

                </CardBody>
              </Room>
            </CardRoom>
          )}
          ItemSeparatorComponent={() => <View style={{width: `100%`,height: 15}}/>}
        />
      </View>


    </Container>
  )
}