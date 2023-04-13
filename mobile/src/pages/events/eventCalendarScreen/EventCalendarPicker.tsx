import {View, Platform} from 'react-native';
import React from 'react';
import {PlatformEnum, strings} from '@sekeron/domain';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../../resources/Colors';
import moment from 'moment';
import { styles } from './EventCalendarPicker.style';

const EventCalendarPicker = (props: any) => {
  const {datePicker, calendarDate, onDateSelected} = props;

  return (
    <View>
      {datePicker && (
        <DateTimePicker
          value={calendarDate}
          mode={'date'}
          display={
            Platform.OS === PlatformEnum.ios ? strings.spinner : strings.default //move ios to platformtype enum
          }
          is24Hour={true}
          onChange={onDateSelected}
          minimumDate={new Date(moment().subtract(80, 'years'))} // current year - 80 will be min year.
          maximumDate={new Date(moment().add(18, 'years'))} // current year + 18 will be max year.
          textColor={Colors.whiteColor}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

export default EventCalendarPicker;
