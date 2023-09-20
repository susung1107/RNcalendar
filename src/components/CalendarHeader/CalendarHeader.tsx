import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// styles
import styles from './CalendarHeader.style';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

// utils
import moment from 'moment';
import { COLORS } from '../../utils';

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }: any) => {
  let year = moment(currentMonth).format('YYYY');
  let month = moment(currentMonth).format('MM');

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={[styles.button]} onPress={prevMonth}>
        <FontAwesomeIcon icon={faChevronLeft} color={COLORS.primary} />
      </TouchableOpacity>
      <Text style={[styles.yearMonth]}>
        {year}년 {month}월
      </Text>
      <TouchableOpacity style={[styles.button]} onPress={nextMonth}>
        <FontAwesomeIcon icon={faChevronRight} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarHeader;
