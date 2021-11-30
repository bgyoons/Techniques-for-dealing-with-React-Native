import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const whatTodayDate = `${year}년 ${month}월 ${day}일`;

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      {/* <StatusBar backgroundColor="'#7267CB'" /> */}
      <View style={styles.block}>
        <Text style={styles.dateText}>{whatTodayDate}</Text>
        {/* <Text style={styles.dateText}>
        {year}년 {month}월 {day}일
      </Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#7267CB',
  },
  block: {
    padding: 16,
    backgroundColor: '#7267CB',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
