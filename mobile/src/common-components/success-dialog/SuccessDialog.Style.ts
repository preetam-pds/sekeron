import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.quaternaryThemeColor,
    borderRadius: 35,
    height: 250,
    width: 350,
    alignItems: 'center',
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: Colors.primaryDarkBlueColor,
  },
  buttonClose: {
    backgroundColor: Colors.secondaryDarkBlueColor,
  },
  textStyle: {
    color: Colors.whiteColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: Colors.monoChromaticGreenColor,
    width:'60%',
    flexWrap:'wrap'
  },
  successCheckMarkIcon: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    marginBottom: 30,
  },
});
export default styles;
