import React from 'react'
import { Stack, Typography } from '@mui/material'
import { strings } from '@sekeron/domain'
import { OtpInput } from 'src/components/common/otp-input/OtpInput'
import ImageAssets from 'src/assets'
import styles from '../../UserManagement.module.css'

const LoginOtpVerification = ({ onEditEmailClick, sendCodeToMobile, otp, setOtp, resendOtp, setOtpTimer, otpTimer, values }: any) => {
    return (
        <Stack spacing={1} direction={"column"} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
            <Typography variant="h2" className={styles["user-info-resend-code"]}>{strings.enterTheCodeSentTo}</Typography>
            <Stack spacing={0.5} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
                <Typography variant="h2" className={styles["user-info-send-to-details"]} onClick={() => onEditEmailClick()}>{sendCodeToMobile ? "+918431318477" : values.email}</Typography>
                <a className={styles["login-link"]} onClick={() => onEditEmailClick()}><img alt="edit" src={ImageAssets.ic_edit} />{strings.edit}</a>
            </Stack>
            <OtpInput otp={otp} setOtp={setOtp} resendOtp={resendOtp} setOtpTimer={setOtpTimer} otpTimer={otpTimer} />
        </Stack>
    )
}

export default LoginOtpVerification