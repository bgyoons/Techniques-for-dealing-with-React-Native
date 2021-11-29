import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        {/* <StatusBar backgroundColor="#7267CB" /> */}
        <DateHead date={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
