import React from 'react';
import PostStore from './PostStore';
import AlbumStore from './AlbumStore';
import TodoStore from './TodoStore';

/* Utilizar uma estrutura como Mobx pode parecer overkill no momento,
 * mas ja prepara uma estrutura mais robusta para features futuras
 * */

export const storesContext = React.createContext({
  postStore: new PostStore(),
  albumStore: new AlbumStore(),
  todoStore: new TodoStore(),
});
