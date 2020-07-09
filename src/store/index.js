import React from 'react';
import { PostStore } from './PostStore';
import { AlbumStore } from './AlbumStore';
import { TodoStore } from './TodoStore';

export const storesContext = React.createContext({
  postStore: new PostStore(),
  albumStore: new AlbumStore(),
  todoStore: new TodoStore(),
});
