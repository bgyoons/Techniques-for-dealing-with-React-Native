import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TransparentCircleButton from './TransparentCircleButton';

function WriteHeader({onSave}) {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        <View style={[styles.iconButtonWrapper, styles.marginRight]}>
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
          />
        </View>
        <View style={styles.iconButtonWrapper}>
          <TransparentCircleButton
            name="check"
            color="#424242"
            onPress={onSave}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WriteHeader;
