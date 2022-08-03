import {StyleSheet} from 'react-native';
import {screenDimension} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  imageStyle: {
    height: screenDimension.width * 0.8,
    width: screenDimension.width * 0.95,
  },
  sliderView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  playPauseImageStye: {height: 25, width: 25},
});
