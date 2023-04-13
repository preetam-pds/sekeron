import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowRevese: {
    flexDirection: 'row-reverse',
  },
  dropdownButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2,
    height: 30,
    paddingHorizontal: 4,
    overflow: 'hidden',
    backgroundColor:'#101113'
  },
  dropdownButtonText: {
    flex: 1,
    fontSize: 12,
    fontFamily:'Comfortaa-Bold',
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 2,
  },
  dropdownCustomizedButtonParent: {
    flex: 1,
    overflow: 'hidden',
  },
  //////////////////////////////////////
  dropdownRow: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomColor: '#C5C5C5',
    // borderBottomWidth: 1,
  },
  dropdownRowText: {
    flex: 1,
    fontSize: 12,
    fontFamily:'Comfortaa-Bold',
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  dropdownCustomizedRowParent: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default styles;
