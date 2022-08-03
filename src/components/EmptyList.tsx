import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>List is empty.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
