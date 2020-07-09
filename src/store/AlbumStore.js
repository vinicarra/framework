import { observable, action, flow } from 'mobx';
import { UpdateMode } from 'realm';
import realm from '../services/realm';
import axios from '../services/api';

export class AlbumStore {
  @observable status = 'success';

  fetchAlbums = flow(function* () {
    this.status = 'loading';
    try {
      if (realm.objects('Album').length < 1) {
        // Carregar dados da API
        const { data } = yield axios.get('/albums');
        realm.write(() => {
          data.forEach((item) => {
            realm.create(
              'Album',
              {
                id: item.id,
                userId: item.userId,
                title: item.title,
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
