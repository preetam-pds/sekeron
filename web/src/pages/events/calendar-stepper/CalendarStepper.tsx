import React from 'react';
import styles from './CalendarStepper.module.css';


const CalendarStepper = ({ handleChange, dateArray }) => {

    return (
        <div style={{ position: 'relative' }} >
            <div className={styles['straight-line']} ></div>
            <div className={styles['calendar-stepper']}>
                {dateArray?.map((date: any, dateIndex: any) => {
                    return (
                        <span key={dateIndex} className={styles['stepper']} onClick={() => { handleChange(date) }} >
                            <span className={date?.isActive ? styles['active-circle'] : styles['circle']} ></span>
                            <span className={date?.isActive ? styles['active-date'] : styles['date']} >{date?.date}th</span>
                        </span>
                    )
                })}
            </div >
        </div>
    )
}

export default CalendarStepper;