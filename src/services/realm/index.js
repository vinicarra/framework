import Realm from 'realm';
import { Post } from './schemas/Post';
import { Album } from './schemas/Album';
import { Todo } from './schemas/Todo';

export default new Realm({ schema: [Post, Album, Todo] });
