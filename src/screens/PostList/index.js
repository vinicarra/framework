import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import realm from '../../services/realm';
import { useStores } from '../../hooks/use-stores';
import { PostListItem } from '../../components';

const PostList = observer(() => {
  const [posts, setPosts] = useState([]);
  const { postStore } = useStores();

  useEffect(() => {
    postStore.fetchPosts();
    setPosts(realm.objects('Post'));
  }, [postStore]);

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
        keyExtractor={(item) => String(item.id)}
        refreshing={postStore.status === 'loading'}
      />
    </SafeAreaView>
  );
});

export default PostList;