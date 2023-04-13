import React from 'react';
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Stack, Typography } from '@mui/material'
import { loginRedux, RegistrationScreenTypeEnum } from '@sekeron/domain';
import { DailogBoxTypeEnum } from '@sekeron/domain';
import { strings } from '@sekeron/domain'
import { constants } from '@sekeron/domain';
import ImageAssets from '../../../assets'
import { MuiTextField } from '../../../components/common/textfield/MuiTextField'
import CustomSuccessDailog from '../../../components/common/dailog/success-dailog/MuiSuccessDailog';
import routesNames from '../../../routes/RouteNames';
import styles from '../UserManagement.module.css'
import RegistrationOtpVerification from './registration/RegistrationOtpVerification';
import { MuiButton } from 'src/components/common/button/MuiButton';
import { useDispatch, useSelector } from 'react-redux';
import { validations } from 'src/core/utils/Validations';

const Registration = () => {

    const [screenType, setScreenType] = useState(RegistrationScreenTypeEnum.emailVerification)
    const [otpTimer, setOtpTimer] = useState(constants.otpTimer);
    const [otp, setOtp] = useState<string>("");
    const [isOtpVerified, setOtpVerified] = useState(false);
    const navigate = useNavigate();

    const loginState = useSelector((state: any) => state.Login)
    const actionDispatch = ((dispatch: any) => ({
        setLoginState: (data: any) => dispatch(loginRedux.actions.setLoginState(data)),
    }))
    const { setLoginState } = actionDispatch(useDispatch())

    const resendOtp = () => {
        setOtp("")
        setOtpTimer(constants.otpTimer);
    }

    const onEditEmailClick = () => {
        setOtp("")
        setScreenType(RegistrationScreenTypeEnum.emailVerification)
    }

    const handleClick = () => {
        if (screenType === RegistrationScreenTypeEnum.emailVerification) {
            setScreenType(RegistrationScreenTypeEnum.otpVerification)
            setOtpTimer(constants.otpTimer);

        }
        else if (screenType === RegistrationScreenTypeEnum.otpVerification) {
            setScreenType(RegistrationScreenTypeEnum.otpVerification)
            setOtpVerified(true)
            setTimeout(() => {
                setOtpVerified(false)
                navigate(routesNames.createProfile);
            }, 3000)
        }
    }

    const handleDailogClose = () => {
        setOtpVerified(false)
        navigate(routesNames.createProfile);
    }

    const validateEmail = (event: any) => {
        const { value } = event.target;
        let errorMessage = '';

        if (value) {
            const regX = validations.isEmailValid(value)
            if (!regX) {
                errorMessage = strings.enterValidEmail
            } else {
                errorMessage = ''
            }
        } else {
            errorMessage = strings.pleaseEnterEmail
        }

        setLoginState({ key: 'emailError', value: errorMessage })
    }

    const handleChange = (e: any) => {
        validateEmail(e)
        const { name, value } = e.target;
        setLoginState({ key: name, value: value })
    }

    const buttonDisable = (value: string, error: string) => {
        if (value) {
            if (error === '') {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }


    const renderDifferentForms = () => {
        if (screenType === RegistrationScreenTypeEnum.emailVerification) {
            return (
                <MuiTextField
                    fullWidth
                    type="text"
                    name="email"
                    label={strings.enterEmailId}
                    errorMessage={loginState.emailError}
                    inputProps={{ "data-testid": "email" }}
                    value={loginState.email}
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => validateEmail(e)}
                />
            )
        }
        else if (screenType === RegistrationScreenTypeEnum.otpVerification) {
            return (
                <RegistrationOtpVerification
                    onEditEmailClick={onEditEmailClick}
                    otp={otp}
                    setOtp={setOtp}
                    resendOtp={resendOtp}
                    setOtpTimer={setOtpTimer}
                    otpTimer={otpTimer}
                    values={loginState}
                />
            )
        }
    }

    return (
        <>
            {isOtpVerified ? <CustomSuccessDailog
                varient={DailogBoxTypeEnum.successDailog}
                open={isOtpVerified}
                handleDailogClose={() => { handleDailogClose() }}
                eventSuccessIcon={false}
            >
                <Typography variant='h2' className="success-message">
                    {strings.successfulllyVerified}
                </Typography>
            </CustomSuccessDailog> : null}
            <Stack direction={"column"} className={styles['form-container']}>
                <Stack direction={"column"} className={styles["registration-form-container"]} justifyContent="space-between" sx={{ height: "100%" }}>
                    <img src={ImageAssets.ic_sekeron_logo} className={styles['sekeron-logo']} alt="logo" />
                    {renderDifferentForms()}
                    <Stack direction={"column"}>
                        <MuiButton className={styles["verify"]} onClick={handleClick}
                            disabled={screenType === RegistrationScreenTypeEnum.otpVerification ? (otp.length < constants.otpMaxLength || otpTimer === constants.otpInitialLength) : buttonDisable(loginState.email, loginState.emailError)}>
                            {screenType === RegistrationScreenTypeEnum.otpVerification ? strings.continue : strings.verify}
                        </MuiButton>
                        <Stack className={styles["google-fb-login"]} columnGap={5}>
                            <img alt="google" src={ImageAssets.ic_google} />
                            <img alt="facebook" src={ImageAssets.ic_facebook} />
                        </Stack>
                    </Stack>
                    <Typography className={styles["joined-already"]}>{strings.joinedAlready} <Link to={routesNames.login} className={styles["login-link"]}>{strings.loginHere}</Link></Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default Registration