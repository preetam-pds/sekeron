import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  uploadIcon: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  stopIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  deleteIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  CTAButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  playerContainerStyle: {
    backgroundColor: Colors.secondaryGreyColor,
    height: 30,
    width: '95%',
    borderRadius: 24,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  playerTrackStyle: {
    backgroundColor: Colors.primaryBlueColor,
    height: 1,
  },
  recordSecondsText: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    marginLeft: 20,
  },
  recordSecondsContainer: {
    backgroundColor: Colors.senaryGreyColor,
    height: 30,
    width: '95%',
    borderRadius: 24,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordedPreviewContainer: {
    backgroundColor: Colors.senaryGreyColor,
    borderRadius: 24,
    marginVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '95%',
  },
  micIcon: {
    height: 40,
    width: 40,
  },
  micIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  ToolTipText: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
  },
  toolTipArrow: {
    marginLeft: 0,
    marginBottom: -10,
  },
  recorderContainer: {
    backgroundColor: Colors.senaryGreyColor,
    height: 50,
    borderRadius: 24,
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  holdToRecordText: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    marginLeft: 100,
    opacity: 1,
  },
  holdToRecordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  slideToCancelText: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    flex: 1,
  },

  arrowIcon: {
    height: 20,
    width: 20,
  },
  slideToCancelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    flex: 1,
  },
  arrowUpIcon: {
    height: 20,
    width: 20,
  },
  lockIcon: {
    height: 25,
    width: 20,
    marginVertical: 10,
  },
  LockIconContainer: {
    width: 50,
    backgroundColor: Colors.senaryGreyColor,
    position: 'absolute',
    right: 10,
    bottom: 30,
    borderRadius: 24,
    alignItems: 'center',
  },
  recordingTextView: { 
    flexGrow: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    },
    recordingText: {
      color: Colors.secondaryGreyColor,
      fontFamily: 'Comfortaa-Light',
      fontSize: 14,
    }
});

export default styles;
