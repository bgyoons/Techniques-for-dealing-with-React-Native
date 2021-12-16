import React from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Button
        title="Detail 1 Open"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 Open"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 Open"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
    </View>
  );
}
export default HomeScreen;
