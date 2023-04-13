import React, { useState } from 'react'
import { Grid, Checkbox } from '@mui/material'
import styles from './Personalisation.module.css'
import ImageAssets from '../../assets/index'

const PersonalisationItem = ({ CardContent }: any) => {
    const [selectedCard, setSelectedCard] = useState<any>([]);

    const onChangeOfCheckBox = (id: any) => {
        if (selectedCard.includes(id)) {
            const filteredCard = selectedCard?.filter((item: any) => item !== id);
            setSelectedCard(filteredCard);
        } else {
            setSelectedCard((state: any) => [...state, id]);
        }
    };

    return (
        <Grid container className={styles["activitycard"]} onClick={() => onChangeOfCheckBox(CardContent.id)} xs={5} sm={3} lg={2.5} xl={2.5}>
            <Grid item className={styles["check-box"]}>
                <Checkbox icon={<img alt="radio checked" src={ImageAssets.ic_radio_unchecked} className={styles["checkbox-icon"]} />}
                    checkedIcon={<img alt="radio checked" src={ImageAssets.ic_radio_checked} className={styles["checkbox-icon"]} />} checked={selectedCard.includes(CardContent.id)}></Checkbox>
            </Grid>
            <img src={CardContent?.backgroundimage} className={styles[selectedCard.includes(CardContent.id) ? "card-image-selected" : "card-image"]} alt="hai" />
            <Grid item className={styles["activity-name-container"]} xs={12}>
                <span className={styles["activity-name"]}>{CardContent?.activity}</span>
            </Grid>
            <div className={styles[selectedCard.includes(CardContent.id) ? "shadow-selected" : "shadow"]}></div>
        </Grid>
    )
}

export default PersonalisationItem