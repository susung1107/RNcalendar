import { StyleSheet } from 'react-native';

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
  dayText: {
    color: '#666',
  },
  disabledText: {
    color: '#c8c8c8',
  },
});
