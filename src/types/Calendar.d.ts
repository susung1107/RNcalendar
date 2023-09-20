declare namespace ICalendar {
  interface HeaderProps {
    currentMonth: Date;
    prevMonth: () => void;
    nextMonth: () => void;
  }

  interface DayProps {
    currentMonth: Date;
  }
}
