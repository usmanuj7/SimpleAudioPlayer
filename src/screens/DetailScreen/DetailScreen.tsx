import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {ITrack} from '../../types';
import {styles} from './DetailScreen.styles';
import Slider from '@react-native-community/slider';
import TrackPlayer, {Track, useProgress} from 'react-native-track-player';
import {IMAGES} from '../../assets';
import {formatTime} from '../../utils/constants';

interface Props {
  navigation: any;
}

export const DetailScreen: React.FC<Props> = (props: Props) => {
  const {navigation} = props;
  const progress = useProgress();
  const route: RouteProp<{params: {item: ITrack}}, 'params'> = useRoute();
  const {item} = route.params;
  const [pause, setPause] = React.useState(true);

  const myTrack: Track = {
    id: item.cover,
    url: item.audio,
    title: item.title,
    artist: item.title,
    artwork: item.cover,
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={async () => {
            await TrackPlayer.reset();
            navigation.goBack();
          }}
          title="Go Back"
        />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    addTrack();
  }, []);

  const addTrack = async () => {
    await TrackPlayer.add(myTrack);
  };

  const playAudio = () => {
    TrackPlayer.seekTo(0);
    TrackPlayer.play();
    setPause(false);
  };

  const pauseAndPlay = React.useCallback(() => {
    if (pause) {
      TrackPlayer.play();
      setPause(false);
    } else {
      TrackPlayer.pause();
      setPause(true);
    }
  }, [pause, setPause]);

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <TouchableOpacity onPress={playAudio}>
        <Image style={styles.imageStyle} source={{uri: item.cover}} />
      </TouchableOpacity>
      <View style={styles.sliderView}>
        <TouchableOpacity onPress={pauseAndPlay} style={{padding: 10}}>
          <Image
            style={styles.playPauseImageStye}
            source={pause ? IMAGES.play : IMAGES.pause}
          />
        </TouchableOpacity>
        <Slider
          style={{width: '80%'}}
          step={0}
          maximumValue={progress.duration}
          onValueChange={val => {
            TrackPlayer.seekTo(val);
          }}
          value={progress.position}
        />
      </View>
      <Text>{`${formatTime(progress.position)}/${formatTime(
        progress.duration,
      )}`}</Text>
    </ScrollView>
  );
};
