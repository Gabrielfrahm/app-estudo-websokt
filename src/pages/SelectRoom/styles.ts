import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

`;

export const Titulo = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: 25px;
  font-weight: bold;
`;

export const CardRoom = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(16,18,27,0.4);
  border-radius: 10px;
`;

export const Room = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
`;

export const HeaderCardRoom = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding: 5px;
`;

export const TitleCardRoom = styled.Text`
  color: ${({theme}) => theme.colors.title};
`;

export const CardBody = styled.View`

`;