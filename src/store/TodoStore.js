import { observable, action, flow } from 'mobx';
import { UpdateMode } from 'realm';
import realm from '../services/realm';
import axios from '../services/api';

export class TodoStore {
  @observable status = 'success';

  fetchTodos = flow(function* () {
    this.status = 'loading';
    try {
      if (realm.objects('Todo').length < 1) {
        // Carregar dados da API
        const { data } = yield axios.get('/todos');
        realm.write(() => {
          data.forEach((item) => {
            realm.create(
              'Todo',
              {
                id: item.id,
                userId: item.userId,
                title: item.title,
                completed: item.completed,
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
