import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ITrack} from '../types';
import {screenDimension} from '../utils/constants';

interface Props {
  item: ITrack;
  onPressItem: (item: ITrack) => void;
}

export const TrackCard: React.FC<Props> = (props: Props) => {
  const {item, onPressItem} = props;
  return (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={styles.cardStyle}>
      <Image style={styles.imageStyle} source={{uri: item.cover}} />
      <Text style={styles.textStle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: screenDimension.width * 0.6,
    width: '100%',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
  },
  imageStyle: {
    height: screenDimension.width * 0.45,
    width: screenDimension.width * 0.85,
  },
  textStle: {fontSize: 25, fontWeight: '600', color: '#000', marginTop: 10},
});
