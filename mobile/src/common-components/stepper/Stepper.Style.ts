import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 50},
  secondaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedStepperTickMark: {width: 20, height: 20, resizeMode: 'contain'},
  pendingStepperLine: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: Colors.primaryBlueColor,
  },
  pendingStepper: {
    height: 1,
    width: '20%',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: Colors.primaryBlueColor,
    borderStyle: 'solid',
  },
  pendingStepperBorder: {
    borderColor: Colors.secondaryGreyColor,
    borderStyle: 'dotted',
  },
  completedStepperBorder: {
    borderColor: Colors.primaryBlueColor,
    borderStyle: 'solid',
  },
  completedStepper: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.secondaryGreyColor,
  },
  inProgressStepper: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: Colors.primaryBlueColor,
  },
});
export default styles;
