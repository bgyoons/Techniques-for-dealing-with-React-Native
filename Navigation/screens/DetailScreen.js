import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function DetailScreen({route, navigation}) {
  // console.log(navigation);
  useEffect(() => {
    navigation.setOptions({title: `상세 정보 - ${route.params.id}`});
  }, [navigation, route.params.id]);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="next"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
      </View>
      <Button title="back" onPress={() => navigation.pop()} />
      <Button title="home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
