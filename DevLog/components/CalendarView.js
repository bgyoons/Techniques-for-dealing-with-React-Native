import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

function CalendarView({markedDates, selectedDate, onSelectDate}) {
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  // console.log(markedSelectedDates, [selectedDate]);
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDates}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      theme={{
        arrowColor: '#F05454',
        dotColor: '#F05454',
        todayTextColor: '#F05454',
        selectedDayBackgroundColor: '#F05454',
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
