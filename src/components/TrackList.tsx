import React from 'react';
import {View, FlatList} from 'react-native';
import {ITrack} from '../types';
import {SCREENS} from '../utils/constants';
import { EmptyList } from './EmptyList';
import {TrackCard} from './TrackCard';

interface Props {
  navigation: any;
  tracks: ITrack[] | [];
  isLoading: boolean;
  onRefresh: () => void;
}

export const TrackList: React.FC<Props> = (props: Props) => {
  const {navigation, tracks, onRefresh, isLoading} = props;
  const renderItem = ({item}: {item: ITrack}) => {
    return (
      <TrackCard
        item={item}
        onPressItem={() => navigation.navigate(SCREENS.DetailScreen, {item})}
      />
    );
  };

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        data={tracks}
        keyExtractor={(item: ITrack) => item.audio}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={isLoading}
        ListEmptyComponent={<EmptyList/>}
      />
    </View>
  );
};
