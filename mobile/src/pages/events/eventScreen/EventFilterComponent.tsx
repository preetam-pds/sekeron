import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import CustomText from '../../../common-components/custom-text/CustomText';
import Colors from '../../../resources/Colors';
import CustomCommonButton from '../../../common-components/custom-common-button/CustomCommonButton';
import MediaAssets from '../../../assets';

const categories = [
  {
    id: '1',
    name: 'Music',
    isSelected: false,
  },
  {
    id: '2',
    name: 'Photography',
    isSelected: false,
  },
  {
    id: '3',
    name: 'Dance',
    isSelected: false,
  },
  {
    id: '4',
    name: 'Fashion',
    isSelected: false,
  },
  {
    id: '5',
    name: 'Art',
    isSelected: false,
  },
  {
    id: '6',
    name: 'Design',
    isSelected: false,
  },
  {
    id: '7',
    name: 'Decor',
    isSelected: false,
  },
  {
    id: '8',
    name: 'poetry',
    isSelected: false,
  },
  {
    id: '9',
    name: 'fashion',
    isSelected: false,
  },
];

const eventType = [
  {
    id: '1',
    name: 'paid',
    isSelected: false,
  },
  {
    id: '2',
    name: 'free',
    isSelected: false,
  },
];

const eventMode = [
  {
    id: '1',
    name: 'offline',
    isSelected: false,
  },
  {
    id: '2',
    name: 'Online',
    isSelected: false,
  },
];

export const filterTypes = [
  {
    id: '1',
    name: 'Event Type',
    eventSubType: eventType,
    isFilterSelected: false,
  },
  {
    id: '2',
    name: 'Event mode',
    eventSubType: eventMode,
    isFilterSelected: false,
  },
  {
    id: '3',
    name: 'Category',
    eventSubType: categories,
    isFilterSelected: true,
  },
];

const EventFilterComponent = (props: any) => {
  const {handleFilterModal} = props;
  const [status, setStatus] = useState('Event Type');
  const [dataList, setDataList] = useState(filterTypes);

  const setStatusFilter = (event: any) => {
    setStatus(event.name);
  };

  const getcount = el => {
    let count: any = null;
    dataList.map(data => {
      if (el.id === data.id) {
        count = data.eventSubType.filter(event => event.isSelected).length;
      }
    });
    return (
      <CustomText
        style={[status === el.name ? styles.textTabActive : styles.textTab]}>
        {count > 0 ? `(${count})` : null}
      </CustomText>
    );
  };

  const handleClick = (eventID, itemID) => {
    const newData = dataList.map(data => {
      if (data.id === itemID) {
        const eventData = data.eventSubType.map(item => {
          if (item.id === eventID) {
            return {
              ...item,
              isSelected: !item?.isSelected,
            };
          } else {
            return {
              ...item,
              isSelected: item?.isSelected,
            };
          }
        });
        return {
          ...data,
          eventSubType: eventData,
        };
      } else {
        return {
          ...data,
        };
      }
    });
    setDataList(newData);
  };

  const renderItem = ({item, index}) => {
    if (item.name === status) {
      return (
        <ScrollView>
          {item.eventSubType.map((event, id) => {
            return (
              <TouchableOpacity
                key={id}
                style={styles.itemContainer}
                onPress={() => {
                  handleClick(event.id, item.id);
                }}>
                <TouchableOpacity style={styles.selectIcon}
                onPress={() => {
                  handleClick(event.id, item.id);
                }}
                >
                  {event.isSelected ? (
                    <Image
                      source={MediaAssets.ic_checkbox_checked}
                      style={styles.enableSelectIcon}
                    />
                  ) : (
                    <Image
                      source={MediaAssets.ic_checkbox_unchecked}
                      style={styles.disableSelectIcon}
                    />
                  )}
                </TouchableOpacity>
                <View>
                  <CustomText style={styles.itemName}>{event.name}</CustomText>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      );
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <View
        style={styles.container}>
        <View style={styles.secoundaryContainer}>
          <CustomText
            style={styles.filterLabelStyle}>
            Filters
          </CustomText>
        </View>
        <View
          style={styles.horizontalLine}></View>
        <View
          style={styles.tertiaryContainer}>
          <View
            style={styles.quataryContainer}>
            {filterTypes?.map((element, index) => {
              return (
                <Fragment key={index}>
                  <TouchableOpacity
                    style={[
                      styles.buttonTabStyles,
                      status === element.name && styles.btnTabActive,
                    ]}
                    onPress={() => setStatusFilter(element)}>
                    <CustomText
                      style={[
                        status === element.name
                          ? styles.textTabActive
                          : styles.textTab,
                      ]}>
                      {element.name}
                      {getcount(element)}
                    </CustomText>
                  </TouchableOpacity>
                </Fragment>
              );
            })}
          </View>
          <View style={styles.pentaContainer}>
            <FlatList
              data={dataList}
              keyExtractor={(e, i) => i.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
        <View
          style={styles.horizontalLine}></View>
        <View
          style={styles.buttonContainer}>
          <View style={styles.subButtonContainer}>
            <CustomCommonButton
              onPress={() => setDataList(filterTypes)}
              greyOutlinedButton
              smallWidth
              name={'Clear All'}
            />
          </View>
          <View style={styles.subButtonContainer}>
            <CustomCommonButton
              onPress={() => handleFilterModal()}
              name={'Apply Filters'}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default EventFilterComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  secoundaryContainer:{marginHorizontal: 14, marginVertical: 4},
  filterLabelStyle:{
    color: '#a8aebc',
    fontSize: 16,
    fontFamily: 'Comfortaa-Light',
  },
  horizontalLine:{
    marginTop: 8,
    borderColor: Colors.secondaryGreyColor,
    borderWidth: 0.2,
  },
  tertiaryContainer:{
    // flex:1,
    height: '85%',
    flexDirection: 'row',
  },
  
  quataryContainer:{
    flex: 2,
    backgroundColor: '#101113',
    margin: 0,
  },
  pentaContainer:{flex: 2, margin: 0},
  buttonTabStyles: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  textTab: {
    color: Colors.secondaryGreyColor,
    fontSize: 14,
    margin: 6,
    fontFamily: 'Comfortaa-Light',
  },
  btnTabActive: {
    backgroundColor: Colors.secondaryThemeColor,
    // borderRadius: 5,
  },
  textTabActive: {
    color: Colors.whiteColor,
    fontSize: 14,
    margin: 6,
    fontFamily: 'Comfortaa-Light',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    margin:4,
    alignItems: 'center',
  },
  itemName: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 5,
    alignItems: 'center',
  },
  selectIcon: {
    margin: 4,
  },
  enableSelectIcon: {
    height: 16,
    width: 16,
    marginHorizontal: 4,
  },
  disableSelectIcon: {
    height: 16,
    width: 16,
    marginHorizontal: 4,
  },
  checkbox: {
    position: 'absolute',
    height: 23,
    width: 33,
    top: 0,
    left: 0,
  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subButtonContainer:{marginVertical: 10, marginHorizontal: 2}
});
