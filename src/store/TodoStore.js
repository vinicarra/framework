import { observable, action, flow, decorate } from 'mobx';
import { UpdateMode } from 'realm';
import realm from '../services/realm';
import axios from '../services/api';

class TodoStore {
  status = 'loading';

  toggle(id, completed) {
    realm.write(() => {
      realm.create('Todo', { id, completed: !completed }, UpdateMode.Modified);
    });
  }

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

export default decorate(TodoStore, {
  status: observable,
  fetchTodos: action,
  toggle: action,
});
