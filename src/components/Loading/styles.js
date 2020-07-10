import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;
  padding-vertical: 40px;
`;

export const ErrorTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const ErrorDescription = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;
