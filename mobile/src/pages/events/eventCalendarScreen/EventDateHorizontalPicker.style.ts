import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {position: 'relative'},
  activeCircle: {
    width: 30,
    height: 30,
    lineHeight: 25,
    borderRadius: 50,
    borderWidth: 2,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 1.6,
    zIndex: 20,
  },
  secoundContainer: {
    top: 30,
    borderWidth: 1,
    borderColor: '#1b243e',
    margin: 0,
    overflow: 'hidden',
  },
  tritiaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horizontalLineDate: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 16,
  },
  activeDateCircle: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  inActiveDateCircle: {
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
  },
  circle: {
    width: 20,
    height: 20,
    lineHeight: 25,
    borderRadius: 50,
    borderWidth: 2,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 1.6,
    backgroundColor: '#1b243e',
    zIndex: 20,
  },
  inActiveDate: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: '500',
    textAlign: 'center',
    color: '#898989',
    paddingTop: 10,
  },
  activeDate: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: '500',
    textAlign: 'center',
    color: '#f3f5ff',
    paddingTop: 10,
  },
});
