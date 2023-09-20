import React from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './CalendarWeek.style';

// utils
import { WEEKS_EN } from '../../utils';

const CalendarWeek = () => {
  const Days = () => {
    return WEEKS_EN.map((day, index) => (
      <View key={index} style={[styles.day]}>
        <Text style={[styles.dayText]}>{day}</Text>
      </View>
    ));
  };

  return (
    <View style={[styles.container]}>
      <Days />
    </View>
  );
};

export default CalendarWeek;
