import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

function HeaderlessScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Headerless</Text>
        <Button onPress={() => navigation.pop()} title="back" />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
