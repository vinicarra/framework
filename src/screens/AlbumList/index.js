import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import realm from '../../services/realm';
import { useStores } from '../../hooks/use-stores';

const AlbumList = observer(() => {
  const [albums, setAlbums] = useState([]);
  const { albumStore } = useStores();

  useEffect(() => {
    albumStore.fetchAlbums();
    setAlbums(realm.objects('Album'));
  }, [albumStore]);

  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={albums}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        refreshing={albumStore.status === 'loading'}
      />
    </SafeAreaView>
  );
});

export default AlbumList;
