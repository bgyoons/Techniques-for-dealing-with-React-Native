import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

const AddTodo = ({onInsert}) => {
  const [text, setText] = useState('');

  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: <TouchableOpacity onPress={onPress}>{button}</TouchableOpacity>,
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
      {/* {Platform.OS === 'ios' ? (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonStyle}>
            <Image
              source={require('../assets/icons/add_white/add_white.png')}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.circleWrapper}>
          <TouchableNativeFeedback>
            <View style={styles.buttonStyle}>
              <Image
                source={require('../assets/icons/add_white/add_white.png')}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#e0e0e0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#98BAE7',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
