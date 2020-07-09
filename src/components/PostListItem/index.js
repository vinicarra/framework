import React from 'react';
import {
  Wrapper,
  Post,
  Header,
  ProfileImage,
  Name,
  PostImage,
  Body,
  Title,
  Content,
} from './styles';

export default function PostListItem({ post }) {
  return (
    <Post>
      <Header>
        <ProfileImage
          source={{
            uri: post.profileImage,
          }}
        />
        <Name>User {post.userId}</Name>
      </Header>
      <PostImage source={{ uri: post.image }} />
      <Body>
        <Title>{post.title}</Title>
        <Content>{post.body}</Content>
      </Body>
    </Post>
  );
}
