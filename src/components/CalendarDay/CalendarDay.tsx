import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// styles
import styles from './CalendarDay.style';

// moment
import moment from 'moment';

const CalendarDay = ({
  currentMonth,
  selectedDay,
  onSelect,
}: ICalendar.DayProps) => {
  // formatting
  let year = moment(currentMonth).format('YYYY');
  let month = moment(currentMonth).format('MM');
  let yearMonth = moment(currentMonth).format('YYYY-MM');
  const selectYearMonth = moment(selectedDay).format('YYYY-MM');

  const selectedDate = moment(selectedDay).date(); // 선택된 날짜의 date
  const startOfMonth = moment(currentMonth).startOf('month'); // 시작 날짜 설정
  const startDayOfWeek = startOfMonth.day(); // 달력 상 첫째 주의 첫 번째 날의 요일
  const endOfMonth = moment(currentMonth).endOf('month'); // 월의 마지막 날짜 가져오기

  let currentDate = startOfMonth.clone(); // 현재 날짜를 시작 날 짜로 설정

  // func
  const isSelected = (index: number): boolean => {
    return yearMonth === selectYearMonth && selectedDate === index;
  };

  const renderCalerdar = () => {
    const calendar = [];
    let row = [];

    // 달력에 포함된 지난 달 day 출력
    for (let i = 0; i < startDayOfWeek; i++) {
      const day = moment(currentDate)
        .subtract(startDayOfWeek - i, 'days')
        .date();

      row.push(
        <View style={[styles.day]}>
          <Text style={[styles.dayText, styles.disabledText]}>{day}</Text>
        </View>,
      );
    }

    // 이번 달 days 출력
    for (let day = 1; day <= endOfMonth.date(); day++) {
      let isActive = isSelected(day);

      row.push(
        <TouchableOpacity
          style={[styles.day]}
          onPress={() => onSelect({ year, month, day })}
        >
          <View style={isActive && [styles.activeDay]}>
            <Text style={isActive ? [styles.activeText] : [styles.dayText]}>
              {day}
            </Text>
          </View>
        </TouchableOpacity>,
      );

      if (row.length === 7) {
        calendar.push(
          <View key={calendar.length} style={[styles.rowContainer]}>
            {row}
          </View>,
        );
        row = [];
      }
    }

    // 달력에 포함 된 다음 달 day 출력
    const endDay = endOfMonth.day();
    for (let i = endDay; i < 6; i++) {
      const day = moment(currentDate)
        .add(i - endDay, 'days')
        .date();

      row.push(
        <View style={[styles.day]}>
          <Text style={[styles.dayText, styles.disabledText]}>{day}</Text>
        </View>,
      );
    }

    // 마지막 주 추가
    if (row.length > 0) {
      calendar.push(
        <View key={calendar.length} style={[styles.rowContainer]}>
          {row}
        </View>,
      );
    }

    return calendar;
  };

  return (
    <View style={[styles.container]}>
      {renderCalerdar().map((item, index) => (
        <View key={index}>{item}</View>
      ))}
    </View>
  );
};

export default CalendarDay;
