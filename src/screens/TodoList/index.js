import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import realm from '../../services/realm';
import { useStores } from '../../hooks/use-stores';

const TodoList = observer(() => {
  const [toDos, setToDos] = useState([]);
  const { todoStore } = useStores();

  useEffect(() => {
    todoStore.fetchTodos();
    setToDos(realm.objects('Todo'));
  }, [todoStore]);

  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={toDos}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        refreshing={todoStore.status === 'loading'}
      />
    </SafeAreaView>
  );
});

export default TodoList;
