import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
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

  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        refreshing={postStore.status === 'loading'}
      />
    </SafeAreaView>
  );
});

export default PostList;
