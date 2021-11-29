import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const whatTodayDate = `${year}년 ${month}월 ${day}일`;

  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{whatTodayDate}</Text>
      {/* <Text style={styles.dateText}>
        {year}년 {month}월 {day}일
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
