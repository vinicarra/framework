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

export default function Index({ post }) {
  return (
    <Wrapper>
      <Post>
        <Header>
          <ProfileImage
            source={{
              uri:
                'https://images.unsplash.com/photo-1593629062158-61a713e7a5c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
    </Wrapper>
  );
}
