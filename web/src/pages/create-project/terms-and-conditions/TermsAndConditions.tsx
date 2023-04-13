import { Checkbox, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { strings } from '@sekeron/domain'
import React, { useState } from 'react'
import styles from './TermsAndConditions.module.css'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ImageAssets from 'src/assets'
import { MuiCheckbox } from 'src/components/common/checkbox/MuiCheckBox'
import { MuiButton } from 'src/components/common/button/MuiButton'
import { useNavigate } from 'react-router-dom'
import routesNames from 'src/routes/RouteNames'

const TermsAndConditions = () => {
    const termsAndConditions = [
        {
            Term1: ""
        },
        {
            Term2: ""
        }, {
            Term3: ""
        },
    ]

    const [isAgreedToTermsAndConditions, setIsAgreedToTermsAndConditions] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgreedToTermsAndConditions(event.target.checked);
    };

    return (
        <div className={styles["container"]}>
            <Typography className={styles["project-checklist"]}>{strings.projectCreationChecklist}</Typography>
            <Stack sx={{ rowGap: { xs: 0, sm: 0, md: 10, lg: 10, xl: 10 } }} className={styles["sub-container"]}>
                <Stack className={styles["checklist-container"]} sx={{ rowGap: { xs: 5, sm: 5, md: 8, lg: 8, xl: 8 } }}>
                    {termsAndConditions.map((item) => (
                        <Stack className={styles["checklist-item"]}>
                            <Typography className={styles["checklist"]}>{strings.projectCreationChecklist}</Typography>
                            <ArrowForwardIosRoundedIcon className={styles["right-arrow"]} />
                        </Stack>
                    ))}
                </Stack>
                <Stack direction="column" sx={{ rowGap: 2, justifyContent: { xs: "flex-end" } }} alignItems="center">
                    <hr className={styles["line-break"]} />
                    <Stack columnGap={1} className={styles["info-cpntainer"]}>
                        <InfoOutlinedIcon className={styles["info-icon"]} />
                        <Typography className={styles["info"]}>{strings.termsAndConditionsInfo}</Typography>
                    </Stack>
                </Stack>
                <Stack direction="column" alignItems={"center"} sx={{ justifyContent: { xs: "flex-end" } }} rowGap={2}>
                    <MuiCheckbox
                        uncheckedIcon={ImageAssets.ic_checkbox_unchecked}
                        checkedicon={ImageAssets.ic_checkbox_checked}
                        checked={isAgreedToTermsAndConditions}
                        label={strings.agreeToTermsAndConditions}
                        onChange={handleChange}
                    />
                    <MuiButton disabled={!isAgreedToTermsAndConditions} className={styles["start-project-creation"]} onClick={() => navigate(routesNames.createProject)}>{strings.startProjectCreation}</MuiButton>
                </Stack>
            </Stack>
        </div>
    )
}

export default TermsAndConditions