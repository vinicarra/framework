import { observable, action, flow, decorate } from 'mobx';
import { UpdateMode } from 'realm';
import realm from '../services/realm';
import axios from '../services/api';
import { albumImages } from '../services/images';

class AlbumStore {
  status = 'loading';

  fetchAlbums = flow(function* () {
    this.status = 'loading';
    try {
      if (realm.objects('Album').length < 1) {
        // Carregar dados da API
        const { data } = yield axios.get('/albums');
        realm.write(() => {
          data.forEach((item, index) => {
            realm.create(
              'Album',
              {
                id: item.id,
                userId: item.userId,
                title: item.title,
                image: albumImages[index % albumImages.length],
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

export default decorate(AlbumStore, {
  status: observable,
  fetchAlbums: action,
});
