import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-horizontal: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Post = styled.View`
  background-color: white;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ProfileImage = styled(Image)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const PostImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const Body = styled.View`
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const Content = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;
