import {Dimensions} from 'react-native';

export const SCREENS = {
  HomeScreen: 'HomeScreen',
  DetailScreen: 'DetailScreen',
};

export const screenDimension = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const formatTime = (timeInSec: number) => {
  let m = Math.floor(timeInSec / 60);
  let s = Math.floor(Math.round((timeInSec % 60) * 100) / 100);
  let mins = m.toString();
  let secs = s.toString();
  if (m < 10) {
    mins = `0${m}`;
  }
  if (s < 10) {
    secs = `0${s}`;
  }
  return `${mins}:${secs}`;
};
