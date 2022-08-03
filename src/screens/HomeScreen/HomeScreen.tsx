import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {TrackList} from '../../components/TrackList';
import {ITrack} from '../../types';
import {fetchTracks} from '../../utils/api';
import {styles} from './HomeScreen.styles';

interface Props {
  navigation: any;
}

export const HomeScreen: React.FC<Props> = (props: Props) => {
  const {navigation} = props;
  const [tracks, setTracks] = React.useState<ITrack[] | []>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [reload, setReload] = React.useState(true);

  React.useEffect(() => {
    if (reload) {
      fetchTracksData();
    }
  }, [reload]);

  const fetchTracksData = async () => {
    setIsLoading(true);
    const tracksData = await fetchTracks();
    if (tracksData && tracksData.length > 0) {
      setTracks(tracksData);
    } else {
      setTracks([]);
    }
    setIsLoading(false);
    setReload(false)
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TrackList
        tracks={tracks}
        navigation={navigation}
        isLoading={isLoading}
        onRefresh={() => setReload(true)}
      />
    </View>
  );
};
