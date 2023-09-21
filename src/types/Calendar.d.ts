declare namespace ICalendar {
  interface HeaderProps {
    currentMonth: Date;
    prevMonth: () => void;
    nextMonth: () => void;
  }

  interface DayProps {
    currentMonth: Date;
    selectedDay: Date;
    onSelect: ({ year, month, day }: OnSelectProps) => void;
  }

  interface OnSelectProps {
    year: string;
    month: string;
    day: number;
  }
}
