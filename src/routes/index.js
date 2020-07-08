import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostList from '../screens/PostList';
import AlbumList from '../screens/AlbumList';
import TodoList from '../screens/TodoList';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PostList"
        component={PostList}
        options={{
          title: 'Postagens',
          tabBarIcon: ({ size, color }) => (
            <Icon name="newspaper-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AlbumList"
        component={AlbumList}
        options={{
          title: 'Álbuns',
          tabBarIcon: ({ size, color }) => (
            <Icon name="folder-open" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{
          title: "To-do's",
          tabBarIcon: ({ size, color }) => (
            <Icon name="check-square-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
