import { ClickAwayListener, Grid, ThemeProvider, Tooltip } from '@mui/material';
import { constants, FeedsEnum, strings } from '@sekeron/domain';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import ImageAssets from 'src/assets';
import CommonDialog from 'src/components/common/dailog/common-dialog/CommonDialog';
import MuiStaticDatePicker, { tooltTipCalendar } from 'src/components/common/datepicker/MuiStaticDatePicker';
import BasicDropDown from 'src/pages/events/basic-dropdown/BasicDropDown';
import MuiTooltip from 'src/components/common/mui-tooltip/MuiTooltip';
import { FilledTabSwitcher } from 'src/components/common/tab-switcher/TabSwitcher';
import { dropDownData, EventsData } from 'src/core/json/EventJson';
import AdmirationsScreen from '../home/admiration-screen/AdmirationsScreen';
import CommentScreen from '../home/comment-screen/CommentScreen';
import CalendarStepper from './calendar-stepper/CalendarStepper';
import FilterCard from './event-filter-card/FilterCard';
import EventsHorizontalCard from './events-horizontal-card/EventsHorizontalCard';
import EventsVerticalCard from './events-vertical-card/EventsVerticalCard';
import styles from './Events.module.css';

interface IEvents {

}

const Events = (props: IEvents) => {

    const tabData = [
        {
            id: '1',
            name: 'Best of Events',
            value: '1'
        },
        {
            id: '2',
            name: 'Workshops',
            value: '2'
        },
        {
            id: '3',
            name: 'contests',
            value: '3'
        },
        {
            id: '4',
            name: 'Meetups  ',
            value: '4'
        },
    ]

    const presentDate = new Date()
    const monthName = dropDownData?.find((value) => value.month == presentDate.getMonth()).name;
    const [eventData, setEventData] = useState<any>(EventsData)
    const [month, setMonth] = useState({ monthName: monthName, month: presentDate.getMonth() });
    const [year, setYear] = useState<any>(new Date().getFullYear());
    const [currentDate, setCurrentDate] = useState<any>(new Date().getDate());
    const [tabValue, setTabValue] = useState<any>(0);
    const [calculatedYears, setCalculatedYears] = useState([]);
    const [datesToScreen, setDatesToScreen] = useState([])
    const [open, setOpen] = React.useState(false);
    const [openAdmirationDialog, setOpenAdmirationDialog] = useState(false);
    const [popUpType, setPopUpType] = useState(FeedsEnum.admirationDialog);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [calendarDate, setCalendarDate] = useState(new Date());


    const [isDialogOpened, setIsDialogOpened] = useState(false);

    const handleCloseDialog = () => {
        setIsDialogOpened(false)
    }

    const handleOpenDialog = () => {
        setIsDialogOpened(true)
    }

    useEffect(() => {
        const currentYear = new Date().getFullYear()
        const yearData: Array<any> = []
        for (let i = currentYear - 80; i <= currentYear + 18; i++) {
            yearData.push({
                name: i,
                value: `${i}`
            })
        }
        setCalculatedYears(yearData)
        setEventData(EventsData)

        const currentDate = new Date()
        concatDateArray(currentDate.getMonth(), currentDate.getFullYear(), currentDate.getDate())
    }, [])

    useEffect(() => {
        concatDateArray(month?.month, year, currentDate)
    }, [month, year])

    const concatDateArray = (selectedMonth: number, selectedYear: number, selectedDate: any) => {

        const currentDate = new Date(selectedYear, selectedMonth, selectedDate)
        let concatedMonths
        if (selectedMonth == 0) {
            const previousMonth = getDatesOfMonth(11, selectedYear - 1)
            const presentMonth = getDatesOfMonth(selectedMonth, selectedYear)
            const nextMonth = getDatesOfMonth(selectedMonth + 1, selectedYear)
            concatedMonths = previousMonth.concat(presentMonth, nextMonth)
        } else if (selectedMonth == 11) {
            const previousMonth = getDatesOfMonth(selectedMonth - 1, selectedYear)
            const presentMonth = getDatesOfMonth(selectedMonth, selectedYear)
            const nextMonth = getDatesOfMonth(0, selectedYear + 1)
            concatedMonths = previousMonth.concat(presentMonth, nextMonth)
        } else {
            const previousMonth = getDatesOfMonth(selectedMonth - 1, selectedYear)
            const presentMonth = getDatesOfMonth(selectedMonth, selectedYear)
            const nextMonth = getDatesOfMonth(selectedMonth + 1, selectedYear)
            concatedMonths = previousMonth.concat(presentMonth, nextMonth)
        }

        const presentDay = {
            date: Number(moment(currentDate).format('DD')),
            day: moment(currentDate).format('dddd'),
            isActive: true,
            month: Number(currentDate.getMonth()),
            year: Number(moment(currentDate).format('YYYY'))
        }

        let renderDates

        const formattedDates: any = concatedMonths.findIndex(data => data.date == presentDay.date && data.month == presentDay.month)

        renderDates = concatedMonths.slice(formattedDates - 3, formattedDates + 4)


        renderDates = renderDates?.map((date) => {
            if (date.date == presentDay.date && date.month == presentDay.month) {
                return {
                    ...date,
                    isActive: true
                }
            } else {
                return date
            }
        })

        setDatesToScreen(renderDates)
    }

    const getDatesOfMonth = (currentMonth: any, currentYear: any) => {
        let names: any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = new Date(currentYear, currentMonth);
        let result: any = [];
        while (date.getMonth() == currentMonth) {

            result.push(
                {
                    date: date.getDate(),
                    day: names[date.getDay()],
                    isActive: false,
                    year: currentYear,
                    month: currentMonth,
                    monthName: dropDownData?.find((value) => value.month == currentMonth).name

                });
            date.setDate(date.getDate() + 1);
        }
        return result
    }

    const handleTabValue = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleChangeMonth = (event: any) => {
        const presentDate = new Date().getDate()

        const month: any = {
            monthName: event.target.value,
            month: dropDownData?.find((value) => value.name == event.target.value).month
        }
        setMonth(month)
        setCurrentDate(presentDate)
    };

    const handleChangeYear = (event: any) => {
        const presentDate = new Date().getDate()
        setYear(Number(event.target.value))
        setCurrentDate(presentDate)
    };

    const handleChangeInEventCard = (index: number, name: string) => {
        if (name == 'notification') {
            const changeInEvent = eventData?.map((events: any, eventIndex: number) => {
                if (index === eventIndex) {
                    return {
                        ...events,
                        isNotified: !events?.isNotified
                    }
                } else {
                    return events
                }
            })
            setEventData(changeInEvent)
        } else if (name == 'admire') {
            const changeInEvent = eventData?.map((events: any, eventIndex: number) => {
                if (index === eventIndex) {
                    return {
                        ...events,
                        isAdmired: !events?.isAdmired
                    }
                } else {
                    return events
                }
            })
            setEventData(changeInEvent)
        }
    }

    const handleChangeSelectedDate = (date: any) => {
        const monthName = dropDownData?.find((value) => value.month == date.month).name;
        const month = {
            monthName: monthName,
            month: date?.month
        }
        setMonth(month);
        setYear(date?.year);
        setCurrentDate(date.date)
        concatDateArray(date?.month, date?.year, date?.date)
    }

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const handleApplyFilters = () => {
        setOpen(false);
    }

    const handleClickOnNoOfAdmirations = (feed: any, index: number) => {
        setOpenAdmirationDialog(true)
        setPopUpType(FeedsEnum.admirationDialog)
    }

    const handleCloseAdmirationDialog = () => {
        setOpenAdmirationDialog(false)
    }

    const handleClickOnSharePost = () => {
        setPopUpType(FeedsEnum.commentDialog)
        setOpenAdmirationDialog(true)
    }

    const openCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen)
    }

    const closeCalendar = () => {
        setIsCalendarOpen(false)
    }

    const handleChangeCalendarDate = (value: any) => {
        setCalendarDate(value)
        const dateFromCalendar = moment(value.$d).format('MM/DD/YYYY').split('/')
        const selectedMonth: any = Number(dateFromCalendar[0]) - 1
        const month: any = {
            monthName: dropDownData?.find((value) => value.month == selectedMonth).name,
            month: selectedMonth
        }
        setMonth(month)
        setYear(Number(dateFromCalendar[dateFromCalendar.length - 1]))
        setCurrentDate(Number(dateFromCalendar[1]))
    }

    const renderSharePostScreenView = () => {
        return (
            <div className={styles['share-post-profile-and-text-area']}>
                <img alt='profile-image' className={styles['share-post-profile-image']} src={ImageAssets.ic_artist_image} />
                <textarea cols={50} placeholder={strings.writeMessage} className={styles['write-message-text-field']} />
            </div>
        )
    }

    return (
        <Fragment>

            <div>
                {<CommonDialog open={openAdmirationDialog} title={popUpType == FeedsEnum.admirationDialog ? constants.admirations : renderSharePostScreenView()} onClose={handleCloseAdmirationDialog} >
                    <AdmirationsScreen popUpType={popUpType} />
                </CommonDialog>}
            </div>

            <div>
                {<CommonDialog open={isDialogOpened} title={'Comments'} onClose={handleCloseDialog} >
                    <CommentScreen />
                </CommonDialog>}
            </div>

            <div className={styles['event-container']} >

                <div className={styles['event-header']} >
                    <span className={styles['events-dropdowns']}>
                        <span style={{ marginRight: '20px' }}>
                            <BasicDropDown dropdowndata={dropDownData} value={month?.monthName} handlechange={handleChangeMonth} />
                        </span>
                        <span>
                            <BasicDropDown dropdowndata={calculatedYears} value={year} handlechange={handleChangeYear} />
                        </span>
                    </span>
                    <span className={styles['date-picker']}>
                        <ClickAwayListener onClickAway={closeCalendar}>
                            <div>
                                <ThemeProvider theme={tooltTipCalendar}>
                                    <Tooltip
                                        PopperProps={{
                                            disablePortal: true,
                                        }}
                                        placement={'top-start'}
                                        onClose={closeCalendar}
                                        open={isCalendarOpen}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        title={<MuiStaticDatePicker open={isCalendarOpen} onClose={closeCalendar} handleChange={handleChangeCalendarDate} value={calendarDate}
                                            maxate={moment(new Date()).add(18, 'years').format()}
                                            mindate={moment(new Date()).subtract(80, 'years').format()} />}
                                    >
                                        <img src={ImageAssets.ic_date_picker} className={styles['ic-date-picker']} onClick={openCalendar} />
                                    </Tooltip>
                                </ThemeProvider>
                            </div>
                        </ClickAwayListener>
                    </span>
                </div>

                <div>
                    <CalendarStepper handleChange={handleChangeSelectedDate} dateArray={datesToScreen} />
                </div>

                <Grid container gap={6} >

                    <Grid container>
                        <Grid item className={styles['filter-and-tab-switcher']} xs={1} sm={1} md={1} lg={1} xl={1}>
                            <MuiTooltip handleTooltipClose={handleTooltipClose} open={open} title={<FilterCard handleApplyFilters={handleApplyFilters} />} placement={'right'} >
                                <img src={ImageAssets.ic_filter} className={styles['ic-date-picker']} onClick={handleTooltipOpen} />
                            </MuiTooltip>
                        </Grid>
                        <Grid item className={styles['filter-and-tab-switcher']} xs={11} sm={7} md={7} lg={7} xl={5}>
                            <FilledTabSwitcher tabvalue={tabValue} handletabvalue={handleTabValue} tabdata={tabData} />
                        </Grid>
                    </Grid>

                    {tabValue == 0 &&
                        <Grid container sx={{ pb: '60px' }} gap={{ xs: 0, sm: 1, md: 2, lg: 2, xl: 4 }} >
                            {eventData?.map((event: any, eventIndex: any) => {
                                if (eventIndex % 3 == 0) {
                                    return (
                                        <div key={eventIndex} style={{ width: '100%' }}>
                                            <EventsHorizontalCard event={event} eventIndex={eventIndex} handleChangeInEventCard={handleChangeInEventCard}
                                                handleClickOnNoOfAdmirations={handleClickOnNoOfAdmirations} handleClickOnSharePost={handleClickOnSharePost}
                                                handleOpenDialog={handleOpenDialog}
                                            />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <Grid key={eventIndex} item xs={12} sm={5.85} md={5.85} lg={5.85} xl={5.85} flexDirection={'row'} rowGap={2} >
                                            <EventsVerticalCard event={event} eventIndex={eventIndex} handleChangeInEventCard={handleChangeInEventCard}
                                                handleClickOnNoOfAdmirations={handleClickOnNoOfAdmirations} handleClickOnSharePost={handleClickOnSharePost}
                                                handleOpenDialog={handleOpenDialog}
                                            />
                                        </Grid>
                                    )
                                }
                            })}
                        </Grid>
                    }

                </Grid>
            </div>
        </Fragment >
    )
}

export default Events;