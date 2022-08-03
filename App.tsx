import React from 'react';
import {RootNavigationContainer} from './src/navigation';
import TrackPlayer from 'react-native-track-player';

const App = () => {
  React.useEffect(() => {
    initialiseTrackPlayer();
  }, []);

  const initialiseTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
  };
  
  return <RootNavigationContainer />;
};

export default App;
