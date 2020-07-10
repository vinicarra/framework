import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Touchable, Todo, Check, Title } from './styles';

export default function TodoListItem({ todo, onPress }) {
  return (
    <Touchable onPress={onPress}>
      <Todo>
        <Check checked={todo.completed}>
          {todo.completed && <Icon name="check" color="white" size={18} />}
        </Check>
        <Title>{todo.title}</Title>
      </Todo>
    </Touchable>
  );
}
