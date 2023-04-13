import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create<any>({
  container: {
    position: 'relative',
  },
  videoControlIcons: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  sliderStyle: {
    width: '70%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoDuration: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Light',
  },
  mediaWidth: {
    width: windowWidth,
  },
  volumeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderThumbStyle: {
    width: 20,
    height: 20,
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#a6000000',
  },
  controls: {
    width: '95%',
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
  },
  overlay: {
    position: 'absolute',
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a6000000',
  },
});

export default styles;
