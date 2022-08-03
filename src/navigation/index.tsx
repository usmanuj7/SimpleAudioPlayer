import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailScreen} from '../screens';
import {SCREENS} from '../utils/constants';

const Stack = createNativeStackNavigator();

export const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.HomeScreen}>
        <Stack.Screen
          options={{title: 'Audio Player'}}
          name={SCREENS.HomeScreen}
          component={HomeScreen}
        />
        <Stack.Screen
          // @ts-ignore
          options={({route}) => ({title: route?.params?.item?.title})}
          name={SCREENS.DetailScreen}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
