import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Touchable = styled(TouchableOpacity)``;

export const Todo = styled.View`
  background-color: white;
  padding: 20px 25px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
`;

export const Check = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, ${({ checked }) => (checked ? '0' : '0.4')});
  background-color: ${({ checked }) =>
    checked ? 'rgb(0, 122, 255)' : 'white'};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  margin-left: 10px;
`;
