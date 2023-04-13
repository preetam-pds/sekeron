import React from 'react'
import { Stack, Typography } from '@mui/material'
import { strings } from '@sekeron/domain'
import { OtpInput } from 'src/components/common/otp-input/OtpInput'
import ImageAssets from 'src/assets'
import styles from '../../UserManagement.module.css'

const RegistrationOtpVerification = ({ onEditEmailClick, otp, setOtp, resendOtp, setOtpTimer, otpTimer, values }: any) => {
    return (
        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} rowGap={5}>
            <Stack direction={"column"} rowGap={1}>
                <Typography className={styles["user-info"]}>{strings.enterTheCodeSentTo}</Typography>
                <Stack spacing={1.5} >
                    <Typography className={styles["user-info"]} onClick={() => onEditEmailClick()}>{values.email}</Typography>
                    <a className={styles["login-link"]} onClick={() => onEditEmailClick()}><img alt="edit" src={ImageAssets.ic_edit} />{strings.edit}</a>
                </Stack>
            </Stack>
            <OtpInput otp={otp} setOtp={setOtp} resendOtp={resendOtp} setOtpTimer={setOtpTimer} otpTimer={otpTimer} />

        </Stack>
    )
}

export default RegistrationOtpVerification