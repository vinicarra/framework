import { observable, action, flow, decorate } from 'mobx';
import { UpdateMode } from 'realm';
import realm from '../services/realm';
import axios from '../services/api';
import { postImages, profileImage } from '../services/images';

class PostStore {
  status = 'loading';

  fetchPosts = flow(function* () {
    this.status = 'loading';
    try {
      if (realm.objects('Post').length < 1) {
        // Carregar dados da API
        const { data } = yield axios.get('/posts');
        realm.write(() => {
          data.forEach((item, index) => {
            realm.create(
              'Post',
              {
                id: item.id,
                userId: item.userId,
                title: item.title,
                body: item.body,
                image: postImages[index % postImages.length],
                profileImage,
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

export default decorate(PostStore, {
  status: observable,
  fetchPosts: action,
});
