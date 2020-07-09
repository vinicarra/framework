import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react-lite';
import realm from '../../services/realm';
import { useForceUpdate, useStores } from '../../hooks';
import TodoListItem from '../../components/TodoListItem';

const TodoList = observer(() => {
  const [toDos, setToDos] = useState([]);
  const forceUpdate = useForceUpdate();
  const { todoStore } = useStores();

  const toggleTodo = (id, completed) => {
    todoStore.toggle(id, completed);
    forceUpdate();
  };

  useEffect(() => {
    todoStore.fetchTodos();
    setToDos(realm.objects('Todo'));
  }, [todoStore]);

  return (
    <SafeAreaView>
      <FlatList
        data={toDos}
        renderItem={({ item }) => (
          <TodoListItem
            todo={item}
            onPress={() => toggleTodo(item.id, item.completed)}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        refreshing={todoStore.status === 'loading'}
      />
    </SafeAreaView>
  );
});

export default TodoList;
