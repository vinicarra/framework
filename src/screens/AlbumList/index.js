import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react-lite';
import realm from '../../services/realm';
import { useStores } from '../../hooks';
import { AlbumListItem } from '../../components';

const AlbumList = observer(() => {
  const [albums, setAlbums] = useState([]);
  const { albumStore } = useStores();

  useEffect(() => {
    albumStore.fetchAlbums();
    setAlbums(realm.objects('Album'));
  }, [albumStore]);

  return (
    <SafeAreaView>
      <FlatList
        data={albums}
        renderItem={({ item }) => <AlbumListItem album={item} />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
        keyExtractor={(item) => String(item.id)}
        refreshing={albumStore.status === 'loading'}
      />
    </SafeAreaView>
  );
});

export default AlbumList;
