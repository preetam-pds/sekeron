import React, {ReactNode} from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
import MediaAssets from '../../assets';
import {useEffect, useState} from 'react';
import moment from 'moment';
// import styles from './Calendar.Style';

interface ICalendarProps {
  shouldOpen: boolean;
}

export const WeekDays: any = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const MonthsArray = [
  {
    number: '0',
    monthName: 'January',
  },
  {
    number: '1',
    monthName: 'February',
  },
  {
    number: '2',
    monthName: 'March',
  },
  {
    number: '3',
    monthName: 'April',
  },
  {
    number: '4',
    monthName: 'May',
  },
  {
    number: '5',
    monthName: 'June',
  },
  {
    number: '6',
    monthName: 'July',
  },
  {
    number: '7',
    monthName: 'August',
  },
  {
    number: '8',
    monthName: 'September',
  },
  {
    number: '9',
    monthName: 'October',
  },
  {
    number: '10',
    monthName: 'November',
  },
  {
    number: '11',
    monthName: 'December',
  },
];

export const getMonthName = (currentMonth: any) => {
  let monthName: any = '';
  MonthsArray.find((month: any) => {
    if (month.number == currentMonth) {
      monthName = month.monthName;
    }
  });
  return monthName;
};

export const dates = [
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'M',
    value: 'M',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'W',
    value: 'W',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'F',
    value: 'F',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'M',
    value: 'M',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'W',
    value: 'W',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'F',
    value: 'F',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'M',
    value: 'M',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'W',
    value: 'W',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'F',
    value: 'F',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'M',
    value: 'M',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'W',
    value: 'W',
  },
  {
    day: 'T',
    value: 'T',
  },
  {
    day: 'F',
    value: 'F',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'F',
    value: 'F',
  },
  {
    day: 'S',
    value: 'S',
  },
  {
    day: 'F',
    value: 'F',
  },
];

const CalendarComponent = (props: ICalendarProps) => {
  const [date, setDate] = useState<any>(new Date());
  const [weekDays, setWeekDays] = useState<any>(WeekDays);
  const [currentDate, setCurrentDate] = useState<any>(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState<any>(new Date().getMonth());
  const [currentMonthName, setCurrentMonthName] = useState<any>(
    moment(new Date()).format('MMMM'),
  );
  const [currentYear, setCurrentYear] = useState<any>(new Date().getFullYear());
  const [dateArray, setDateArray] = useState<any>();
  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  useEffect(() => {
    getDaysArray(currentMonth);
  }, [currentMonth]);

  useEffect(() => {
    var names: any = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var date = new Date(currentYear, currentMonth, 1);
    var result: any = [];
    while (date.getMonth() == currentMonth) {
      result.push({
        date: date.getDate(),
        day: names[date.getDay()],
        isSelected: false,
      });
      date.setDate(date.getDate() + 1);
    }
    setDateArray(result);
  }, []);

  const generateMatrix = () => {
    var matrix: any = [];
    // The following code creates the header
    matrix[0] = weekDays;
    // The remaining code will go here
    var firstDay = new Date(currentYear, currentMonth, 1).getDay();
    var maxDays = nDays[currentMonth];
    if (currentMonth == 1) {
      // February
      if (
        (currentYear % 4 == 0 && currentYear % 100 != 0) ||
        currentYear % 400 == 0
      ) {
        maxDays += 1;
      }
    }
    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }
    console.log(matrix, 'matrix');

    return matrix;
  };
  generateMatrix();
  const onClickOnLeftArrow = () => {
    if (currentMonth <= 11 && currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
      setCurrentMonthName(getMonthName(currentMonth - 1));
    }
    if (currentMonth <= 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
      setCurrentMonthName(getMonthName(11));
    }
  };
  const onClickOnRightArrow = () => {
    if (currentMonth < 11 && currentMonth >= 0) {
      setCurrentMonth(currentMonth + 1);
      setCurrentMonthName(getMonthName(currentMonth + 1));
    }
    if (currentMonth >= 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
      setCurrentMonthName(getMonthName(0));
    }
  };

  const getDaysArray = (currentMonth: any) => {
    var names: any = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var date = new Date(currentYear, currentMonth, 1);
    var result: any = [];
    while (date.getMonth() == currentMonth) {
      result.push({
        date: date.getDate(),
        day: names[date.getDay()],
        isSelected: false,
      });
      date.setDate(date.getDate() + 1);
    }
    setDateArray(result);
  };

  var matrix = generateMatrix();
  var rows: any[] = [];
  rows = matrix.map((row: any, rowIndex) => {
    var rowItems = row.map((item: any, colIndex: any) => {
      console.log(item, 'item');
      return (
        <View key={colIndex} style={styles.calendarRowsContainer}>
          <View
            style={[
              styles.dateContainer,
              new Date().getDate() == item &&
              new Date().getMonth() == currentMonth &&
              new Date().getFullYear() == currentYear
                ? styles.currentDateColor
                : null,
            ]}>
            <View
              style={
                new Date().getDate() == item &&
                new Date().getMonth() == currentMonth &&
                new Date().getFullYear() == currentYear
                  ? styles.currentDateBorderStyle
                  : null
              }>
              <CustomText style={styles.dateTextsColor}>
                {item != -1 ? item : ''}
              </CustomText>
            </View>
          </View>
        </View>
      );
    });
    return (
      <View key={rowIndex} style={styles.calendarrowItemscontainer}>
        {rowItems}
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#5c88ff', '#4fd8cc']}
        style={styles.secondaryContainer}>
        <View style={styles.calenderHeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              onClickOnLeftArrow();
            }}>
            <Image
              source={MediaAssets.ic_left_arrow}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <CustomText style={styles.currentMonthText}>
            {currentMonthName} {currentYear}
          </CustomText>

          <TouchableOpacity
            onPress={() => {
              onClickOnRightArrow();
            }}>
            <Image
              source={MediaAssets.ic_right_arrow}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
        {rows}
      </LinearGradient>
    </SafeAreaView>
  );
};

import {StyleSheet} from 'react-native';
import CustomText from '../../common-components/custom-text/CustomText';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: '55%',
  },
  secondaryContainer: {
    width: '95%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  calendarrowItemscontainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
  },
  calendarRowsContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentDateColor: {
    backgroundColor: '#a92a3835',
  },
  dateContainer: {
    borderRadius: 20,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentDateBorderStyle: {
    borderColor: '#3f2632',
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
  },
  dateTextsColor: {
    color: '#ffffff',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 12,
  },
  calenderHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  arrowIcon: {width: 20, height: 20, resizeMode: 'contain'},
  currentMonthText: {fontSize: 18, color: '#ffffff' , fontFamily:'Comfortaa-Bold'},
});

export default CalendarComponent;
