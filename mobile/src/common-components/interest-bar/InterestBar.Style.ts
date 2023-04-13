import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const width = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  undoBtnContainer: {alignItems: 'center', justifyContent: 'center'},
  undoText: {color: Colors.secondaryBlueColor},
  gradientTrackbarStyle: {
    height: 4,
    marginTop: -1,
  },
  trackBar: {height: 2, backgroundColor: Colors.blackPearlColor, width: width},
});
export default styles;
