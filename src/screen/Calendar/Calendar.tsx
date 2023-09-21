import React, { useState } from 'react';
import { View } from 'react-native';

// components
import { CalendarHeader, CalendarWeek, CalendarDay } from '../../components';

// styles
import styles from './Calendar.style';

import moment from 'moment';

const Calendar = () => {
  // state
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  // func
  const prevMonth = () => {
    setCurrentMonth(moment(currentMonth).subtract('1', 'M').toDate());
  };

  const nextMonth = () => {
    setCurrentMonth(moment(currentMonth).add('1', 'M').toDate());
  };

  const onSelect = ({ year, month, day }: ICalendar.OnSelectProps) => {
    const dayToString = String(day).padStart(2, '0'); // day를 두 자리 숫자로 변환
    const fullDate = `${year}-${month}-${dayToString}`;
    const newDate = new Date(fullDate);
    setSelectedDay(newDate);
  };

  return (
    <View style={[styles.container]}>
      <CalendarHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarWeek />
      <CalendarDay
        currentMonth={currentMonth}
        selectedDay={selectedDay}
        onSelect={onSelect}
      />
    </View>
  );
};

export default Calendar;
