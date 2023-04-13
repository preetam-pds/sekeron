import {Image, TouchableOpacity, View} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {dropDownData} from '../../../json/eventsJson/monthJson';
import moment from 'moment';
import MediaAssets from '../../../assets';
import DropDownThinArrowComponent from '../../../common-components/dropdown-thin-arrow-component/DropDownThinArrowComponent';
import EventDateHorizontalPicker from '../eventCalendarScreen/EventDateHorizontalPicker';
import EventCalendarPicker from '../eventCalendarScreen/EventCalendarPicker';
import {styles} from './EventCalendar.styles';
import Colors from '../../../resources/Colors';

const EventCalendar = (props: any) => {
  const {
    isMonthSelectionVisible,
    isYearSelectionVisible,
    handleMonthSelectionVisibleScroll,
    handleYearSelectionVisibleScroll,
  } = props;
  const presentDate = new Date();

  const monthName: any = dropDownData?.find(
    value => value.month == presentDate.getMonth(),
  ).name;

  const [month, setMonth] = useState({
    monthName: monthName,
    month: presentDate.getMonth(),
  });

  const [year, setYear] = useState<any>(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState<any>(new Date().getDate());

  const [calculatedYears, setCalculatedYears] = useState([]);
  const [datesToScreen, setDatesToScreen] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date());

  const [datePicker, setDatePicker] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearData: any = [];
    for (let i = currentYear - 80; i <= currentYear + 18; i++) {
      yearData.push({
        name: i,
        value: `${i}`,
      });
    }
    setCalculatedYears(yearData);

    // setEventData(EventsData)
    const currentDate = new Date();
    concatDateArray(
      currentDate.getMonth(),
      currentDate.getFullYear(),
      currentDate.getDate(),
    );
  }, []);

  useEffect(() => {
    concatDateArray(month.month, year, currentDate);
  }, [month, year]);

  const concatDateArray = (
    selectedMonth: number,
    selectedYear: number,
    selectedDate: any,
  ) => {
    const currentDate = new Date(selectedYear, selectedMonth, selectedDate);
    let concatedMonths;
    if (selectedMonth == 0) {
      const previousMonth = getDatesOfMonth(11, selectedYear - 1);
      const presentMonth = getDatesOfMonth(selectedMonth, selectedYear);
      const nextMonth = getDatesOfMonth(selectedMonth + 1, selectedYear);
      concatedMonths = previousMonth.concat(presentMonth, nextMonth);
    } else if (selectedMonth == 11) {
      const previousMonth = getDatesOfMonth(selectedMonth - 1, selectedYear);
      const presentMonth = getDatesOfMonth(selectedMonth, selectedYear);
      const nextMonth = getDatesOfMonth(0, selectedYear + 1);
      concatedMonths = previousMonth.concat(presentMonth, nextMonth);
    } else {
      const previousMonth = getDatesOfMonth(selectedMonth - 1, selectedYear);
      const presentMonth = getDatesOfMonth(selectedMonth, selectedYear);
      const nextMonth = getDatesOfMonth(selectedMonth + 1, selectedYear);
      concatedMonths = previousMonth.concat(presentMonth, nextMonth);
    }

    const presentDay = {
      date: Number(moment(currentDate).format('DD')),
      day: moment(currentDate).format('dddd'),
      isActive: true,
      month: Number(currentDate.getMonth()),
      year: Number(moment(currentDate).format('YYYY')),
    };

    let renderDates;

    const formattedDates: any = concatedMonths.findIndex(
      data => data.date == presentDay.date && data.month == presentDay.month,
    );

    renderDates = concatedMonths.slice(formattedDates - 3, formattedDates + 4);

    renderDates = renderDates?.map(date => {
      if (date.date == presentDay.date && date.month == presentDay.month) {
        return {
          ...date,
          isActive: true,
        };
      } else {
        return date;
      }
    });

    setDatesToScreen(renderDates);
  };

  const getDatesOfMonth = (currentMonth: any, currentYear: any) => {
    let names: any = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let date = new Date(currentYear, currentMonth);
    let result: any = [];
    while (date.getMonth() == currentMonth) {
      result.push({
        date: date.getDate(),
        day: names[date.getDay()],
        isActive: false,
        year: currentYear,
        month: currentMonth,
        monthName: dropDownData?.find(value => value.month == currentMonth)
          .name,
      });
      date.setDate(date.getDate() + 1);
    }
    return result;
  };

  const showDatePicker = useCallback(() => {
    setDatePicker(true);
  }, []);

  const onDateSelected = useCallback(async (event: any, value: any) => {
    const covertMonth = moment(value).format('M');
    setYear(moment(value).format('YYYY'));
    setMonth({
      month: Number(covertMonth),
      monthName: moment(value).format('MMMM'),
    });
    setCurrentDate(moment(value).format('DD'));
    setCalendarDate(value);
    await setTimeout(() => setDatePicker(false), 50);
  }, []);

  const handleChangeSelectedDate = (date: any) => {
    const month = {
      monthName: date?.monthName,
      month: date?.month,
    };
    setMonth(month);
    setYear(date?.year);
    setCurrentDate(date.date);
    concatDateArray(date?.month, date?.year, date?.date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.secoundaryContainer}>
        <View style={styles.tertiaryContainer}>
          <View style={styles.dropDownContainer}>
            <DropDownThinArrowComponent
              isVisibleOutside={isMonthSelectionVisible}
              handleScroll={value => handleMonthSelectionVisibleScroll(value)}
              data={dropDownData}
              onSelect={(selectedItem, index) => {
                const month = {
                  month: selectedItem?.month,
                  monthName: selectedItem?.name,
                };
                setMonth(month);
              }}
              dropdownOverlayColor={Colors.transparentColor}
              defaultButtonText={month.monthName}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.name;
              }}
              rowTextForSelection={(item, index) => {
                return item.name;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <Image
                    style={[
                      styles.dropDownthinArrowImage,
                      {
                        transform: !isOpened
                          ? [{rotateX: '180deg'}]
                          : [{rotateX: '0deg'}],
                      },
                    ]}
                    source={MediaAssets.ic_arrow_up}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
            <DropDownThinArrowComponent
              isVisibleOutside={isYearSelectionVisible}
              handleScroll={value => handleYearSelectionVisibleScroll(value)}
              data={calculatedYears}
              onSelect={(selectedItem, index) => {
                setYear(selectedItem.value);
              }}
              defaultButtonText={year}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.name;
              }}
              rowTextForSelection={(item, index) => {
                return item.name;
              }}
              dropdownOverlayColor={Colors.transparentColor}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <Image
                    style={[
                      styles.dropDownthinArrowImage,
                      {
                        transform: !isOpened
                          ? [{rotateX: '180deg'}]
                          : [{rotateX: '0deg'}],
                      },
                    ]}
                    source={MediaAssets.ic_arrow_up}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
          </View>
        </View>
        <View style={styles.calanderOpenIcon}>
          <TouchableOpacity onPress={() => showDatePicker()}>
            <View style={styles.calanderImageContainer}>
              <Image
                style={styles.calanderImageSubContainer}
                source={MediaAssets.ic_calander_open_icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <EventCalendarPicker
          datePicker={datePicker}
          onDateSelected={onDateSelected}
          calendarDate={calendarDate}
        />
      </View>
      <EventDateHorizontalPicker
        handleChange={handleChangeSelectedDate}
        dateArray={datesToScreen}
      />
    </View>
  );
};

export default memo(EventCalendar);
