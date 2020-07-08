import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import realm from '../../services/realm';
import { useStores } from '../../hooks/use-stores';

const PostList = observer(() => {
  const [posts, setPosts] = useState([]);
  const { postStore } = useStores();

  useEffect(() => {
    postStore.fetchPosts();
    setPosts(realm.objects('Post'));
  }, [postStore]);

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      {posts.map(({ title }, index) => (
        <Text key={index}>{title}</Text>
      ))}
    </View>
  );
});

export default PostList;
