import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';
// import Box from './components/Box';

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
// const App = () => {
//   const [visible, setVisible] = useState(true);
//   const onPress = () => setVisible(!visible);

//   return (
//     <SafeAreaView>
//       <Box rounded={true} size="small" color="blue" />
//       <Box rounded={true} size="medium" color="violet" />
//       <Box rounded={true} size="large" color="yellow" />
//       {visible ? <Box rounded={true} /> : null}
//       <Button title="toggle" onPress={onPress} />
//     </SafeAreaView>
//   );
// };
