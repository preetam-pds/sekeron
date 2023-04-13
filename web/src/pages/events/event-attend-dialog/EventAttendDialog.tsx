import { Stack, Typography } from '@mui/material';
import { strings } from '@sekeron/domain';
import React, { Fragment, useEffect, useState } from 'react';
import ImageAssets from 'src/assets';
import { MuiStyledButton } from 'src/components/common/button/MuiButton';
import { MuiCheckbox } from 'src/components/common/checkbox/MuiCheckBox';
import styles from './EventAttendDialog.module.css';

const EventAttendDialog = ({ eventCost, eventsQuestions, onClose }) => {

    console.log(eventsQuestions, 'eventsQuestions')

    const [eventQuestions, setEventQuestions] = useState(eventsQuestions)

    useEffect(() => {
        setEventQuestions(eventsQuestions)
    }, [])

    const handleChange = (event: any, index: number) => {
        const questions = eventQuestions?.map((question: any, questionindex: number) => {
            if (index === questionindex) {
                return {
                    ...question,
                    isSelected: event.target.checked
                }
            } else {
                return question
            }
        })
        setEventQuestions(questions)
    }

    return (
        <Fragment>
            <Stack gap={2} flexDirection={'column'} className={styles['event-attend-dialog']}>
                <Typography flexDirection={'row'}  >
                    <span className={styles['description-tag']} >Sparks.</span>
                    <span className={styles['photowalk']} >Music</span>
                </Typography>
                <Stack flexDirection={'column'} >
                    <Typography className={styles['age-confirmation']} >{strings.areYoueighteenAndAbove}</Typography>
                    <div className={styles['confirmation-container']} >
                        <span className={styles['confirmation']}>Yes</span>
                        <span className={styles['confirmation']}>
                            <MuiCheckbox
                                uncheckedIcon={ImageAssets.ic_unchecked_circle}
                                checkedicon={ImageAssets.ic_checked_circle}
                                checked={true}
                                sx={{ fontFamily: 'Comfortaa-Light', fontSize: '2rem' }}
                            // onChange={(e: any) => handleChange(e, index)}
                            />
                        </span>
                    </div>
                    <div className={styles['confirmation-container']} >
                        <span className={styles['confirmation']}>No</span>
                        <span className={styles['confirmation']}>
                            <MuiCheckbox
                                uncheckedIcon={ImageAssets.ic_unchecked_circle}
                                checkedicon={ImageAssets.ic_checked_circle}
                                checked={false}
                                sx={{ fontFamily: 'Comfortaa-Light', fontSize: '2rem' }}
                            // onChange={(e: any) => handleChange(e, index)}
                            />
                        </span>
                    </div>
                </Stack>
                <div className={styles['horizontal-divider']} ></div>

                <Typography className={styles['questions']} >{strings.eventsQuestion}</Typography>

                <Stack flexDirection={'column'} className={styles['questions-container']} >
                    {eventQuestions?.map((question: any, questionIndex: number) => {
                        console.log('question', question)
                        return (
                            <div className={styles['confirmation-container']} >
                                <span className={styles['confirmation']}>{question?.question}</span>
                                <MuiCheckbox
                                    uncheckedIcon={ImageAssets.ic_unchecked_circle}
                                    checkedicon={ImageAssets.ic_checked_circle}
                                    checked={question.isSelected}
                                    sx={{ fontFamily: 'Comfortaa-Light', fontSize: '2rem' }}
                                    onChange={(e: any) => handleChange(e, questionIndex)}
                                />
                            </div>
                        )
                    })}
                </Stack>
                <Stack justifyContent={'center'} sx={{ p: '10px 0px' }} >
                    <div style={{ width: '60%' }} >
                        <MuiStyledButton onClick={onClose} >{eventCost != 0 ? `${strings.makePaymentOf} ${eventCost}` : strings.join} </MuiStyledButton>
                    </div>
                </Stack>
            </Stack>
        </Fragment>
    )
}

export default EventAttendDialog