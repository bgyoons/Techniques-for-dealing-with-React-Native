import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
      <Box rounded={true} size="small" color="blue" />
      <Box rounded={true} size="medium" color="violet" />
      <Box rounded={true} size="large" color="yellow" />
      <Box rounded={true} />
    </SafeAreaView>
  );
};

export default App;
