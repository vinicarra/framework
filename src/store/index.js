import React from 'react';
import { PostStore } from './PostStore';

export const storesContext = React.createContext({
  postStore: new PostStore(),
});
