import React from 'react';
import {View, Text} from 'react-native';

const Greeting = props => {
  return (
    <View>
      <Text>hello {props.name}</Text>
    </View>
  );
};

Greeting.defaultProps = {
  name: 'bys',
};

export default Greeting;
