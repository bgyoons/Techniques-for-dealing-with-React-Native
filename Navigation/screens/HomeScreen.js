import React, {useEffect} from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);

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
      <Button
        title="Headerless Open"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}
export default HomeScreen;
