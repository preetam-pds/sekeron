import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../common-components/custom-text/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../resources/Colors';
import {styles} from './EventDateHorizontalPicker.style';

const EventDateHorizontalPicker = (props: any) => {
  const {handleChange, dateArray} = props;

  return (
    <View style={styles.container}>
      <View style={styles.secoundContainer}></View>
      <View style={styles.tritiaryContainer}>
        {dateArray?.map((date: any, dateIndex: any) => {
          return (
            <TouchableOpacity
              key={dateIndex}
              style={styles.horizontalLineDate}
              onPress={() => {
                handleChange(date);
              }}>
              <View>
                {date?.isActive ? (
                  <LinearGradient
                    pointerEvents="none"
                    colors={[
                      Colors.primaryBlueColor,
                      Colors.lightGreenColorShade,
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.activeDateCircle}></LinearGradient>
                ) : (
                  <LinearGradient
                    pointerEvents="none"
                    colors={['#1b243e', '#1b243e']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.inActiveDateCircle}></LinearGradient>
                )}
                <CustomText
                  style={
                    date?.isActive ? styles.activeDate : styles.inActiveDate
                  }>
                  {date?.date === 1
                    ? `${date?.date}st`
                    : date?.date === 2
                    ? `${date?.date}nd`
                    : date?.date === 3
                    ? `${date?.date}rd`
                    : `${date?.date}th`}
                </CustomText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default EventDateHorizontalPicker;
