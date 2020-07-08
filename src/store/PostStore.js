import { observable, action, flow } from 'mobx';
import { UpdateMode } from 'realm';
import realm from '../services/realm';
import axios from '../services/api';

export class PostStore {
  @observable status = 'success';

  fetchPosts = flow(function* () {
    this.status = 'loading';
    try {
      if (realm.objects('Post').length < 1) {
        // Carregar dados da API
        const { data } = yield axios.get('/posts');
        realm.write(() => {
          realm.deleteAll();
          data.forEach((item) => {
            realm.create(
              'Post',
              {
                id: item.id,
                userId: item.userId,
                title: item.title,
                body: item.body,
              },
              UpdateMode.Never,
            );
          });
        });
      }
      this.status = 'success';
    } catch (e) {
      this.status = 'error';
    }
  });
}
