import React from 'react';
import { Album, Title, Cover } from './styles';

export default function AlbumListItem({ album }) {
  return (
    <Album>
      <Cover
        source={{
          uri: album.image,
        }}
      />
      <Title>User {album.title}</Title>
    </Album>
  );
}
