import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex:1;
`;

export const Titulo = styled.Text`
  font-size: 25px ;
  font-family: monospace;
  font-weight: bold;
  color: ${({theme}) => theme.colors.title} ;
  margin-bottom: 15px;
`;

export const SubTitulo = styled.Text`
  font-size: 15px ;
  font-family: monospace;
  font-weight: 100;
  color: ${({theme}) => theme.colors.text} ;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  background-color: ${({theme}) => theme.colors.button};
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 17px;
  font-weight: bold;
  font-family: monospace;
`;