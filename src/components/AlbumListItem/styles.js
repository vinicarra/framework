import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Album = styled.View`
  background-color: white;
  margin-horizontal: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Cover = styled(Image)`
  height: 70px;
  width: 70px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  flex: 1;
  flex-wrap: wrap;
`;
