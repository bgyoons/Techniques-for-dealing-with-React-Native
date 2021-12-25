import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef();

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="title"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => bodyRef.current.focus()}
      />
      <TextInput
        placeholder="write your today!"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 18,
    color: '#263238',
  },
});

export default WriteEditor;
