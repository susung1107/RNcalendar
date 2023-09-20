import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

export default StyleSheet.create({
  container: {},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    flex: 1,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDay: {
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 50,
  },
  dayText: {
    color: '#666',
  },
  activeText: {
    color: '#fff',
  },
  disabledText: {
    color: '#c8c8c8',
  },
});
