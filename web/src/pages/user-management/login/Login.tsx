import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Grid, Stack, Typography } from '@mui/material'
import { carouselJson, hideEmailPartially, hidePhoneNumberPartially, loginRedux, LoginScreenTypeEnum } from '@sekeron/domain';
import { setLocalStorageItem } from '@sekeron/domain';
import { strings } from '@sekeron/domain'
import { constants } from '@sekeron/domain';
import routesNames from '../../../routes/RouteNames';
import styles from '../UserManagement.module.css'
import ImageAssets from '../../../assets'
import { MuiTextField } from '../../../components/common/textfield/MuiTextField'
import { MuiButton } from '../../../components/common/button/MuiButton';
import SimpleSlider from '../../../components/common/simple-slider/SimpleSlider';
import { useDispatch, useSelector } from 'react-redux';
import { OtpInput } from 'src/components/common/otp-input/OtpInput';

const Login = () => {

    const loginState = useSelector((state: any) => state.Login)
    const actionDispatch = ((dispatch: any) => ({
        setLoginState: (data: any) => dispatch(loginRedux.actions.setLoginState(data)),

    }))
    const { setLoginState } = actionDispatch(useDispatch())

    const [loginScreenType, setLoginScreenType] = useState(LoginScreenTypeEnum.emailVerification)
    const [otpTimer, setOtpTimer] = useState(constants.otpTimer);
    const [sendCodeToMobile, setSendCodeToMobile] = useState<boolean>(false)
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const [isLocalStorageItemSet, setIsLocalStorageItemSet] = useState(false)

    useEffect(() => {
        if (isLocalStorageItemSet) {
            setIsLocalStorageItemSet(false);
            navigate('/home', { replace: true });
            window.location.reload();
        }
    }, [localStorage.getItem('token')]);

    const resendOtp = () => {
        setOtp("")
        setOtpTimer(constants.otpTimer);
    }

    const onEditEmailClick = () => {
        setOtp("")
        setLoginScreenType(LoginScreenTypeEnum.emailVerification)
        setSendCodeToMobile(false)
    }

    const onClickSendCodeToPhone = () => {
        setSendCodeToMobile((state) => !state)
    }

    const handleClick = () => {
        if (loginScreenType === LoginScreenTypeEnum.emailVerification) {
            setLoginScreenType(LoginScreenTypeEnum.otpVerification)
            setOtpTimer(30);
        }
        else if (loginScreenType === LoginScreenTypeEnum.otpVerification) {
            setIsLocalStorageItemSet(true)
            setLocalStorageItem("token", "dummytoken")
        }
    }

    const validateEmail = (event: any) => {
        const { value } = event.target;
        let errorMessage = '';

        if (!value || value.length < 3) {
            //     const regX = new RegExp(/^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/).test(value)
            //     if (!regX) {
            //         errorMessage = strings.enterValidEmail
            //     } else {
            //         errorMessage = ''
            //     }
            // } else {
            errorMessage = strings.pleaseEnterEmail
        }

        setLoginState({ key: 'emailError', value: errorMessage })
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        validateEmail(e)
        setLoginState({ key: name, value: value })
    }

    const renderDifferentForms = () => {
        if (loginScreenType === LoginScreenTypeEnum.emailVerification) {
            return (
                <><MuiTextField
                    fullWidth
                    type="text"
                    name="email"
                    label={strings.enterEmailId}
                    errorMessage={loginState.emailError}
                    inputProps={{ "data-testid": "email" }}
                    value={loginState.email}
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => validateEmail(e)} />
                    <Stack direction={"column"}>
                        <MuiButton className={styles["verify"]} disabled={buttonDisable(loginState.email, loginState.emailError)} onClick={() => handleClick()}>
                            {strings.sendOtp}
                        </MuiButton>
                        <Stack direction={"row"} spacing={5} className={styles["google-fb-login"]}>
                            <img alt="google" src={ImageAssets.ic_google} />
                            <img alt="facebook" src={ImageAssets.ic_facebook} />
                        </Stack>
                    </Stack>
                </>
            )
        }

        else if (loginScreenType === LoginScreenTypeEnum.otpVerification) {
            return (
                <>
                    <Stack className={styles["otp-container"]}>
                        <Stack direction={"column"} rowGap={1}>
                            <Typography variant="h2" className={styles["user-info-resend-code"]}>{strings.enterTheCodeSentTo}</Typography>
                            <Stack spacing={0.5} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
                                <Typography className={styles["user-info-send-to-details"]} onClick={() => onEditEmailClick()}>
                                    {sendCodeToMobile ? hidePhoneNumberPartially("+918431318477") : hideEmailPartially(loginState.email)}
                                </Typography>
                                {sendCodeToMobile ? null : <a className={styles["login-link"]} onClick={() => onEditEmailClick()}><img alt="edit" src={ImageAssets.ic_edit} />{strings.edit}</a>}
                            </Stack>
                        </Stack>
                        <OtpInput otp={otp} setOtp={setOtp} resendOtp={resendOtp} setOtpTimer={setOtpTimer} otpTimer={otpTimer} />
                        <Typography className={styles["user-info"]}>Or</Typography>
                        <Typography className={styles['send-otp-to-phone-number']} onClick={() => onClickSendCodeToPhone()}>{strings.sendCodeTo}{sendCodeToMobile ? hideEmailPartially(loginState.email) : hidePhoneNumberPartially("+918431318477")}</Typography>
                        <MuiButton className={styles["verify"]} disabled={(otp.length < constants.otpMaxLength || otpTimer === constants.otpInitialLength)} onClick={() => handleClick()}>{strings.continue}
                        </MuiButton>
                    </Stack>
                </>
            )
        }
    }

    const buttonDisable = (value: string, error: string) => {
        if (value) {
            if (error == '') {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }

    return (
        <Fragment>
            <header className={styles['sekeron-icon-header']}>
                <img alt="logo" src={ImageAssets.ic_sekeron} className={styles["sekeron-icon-header-image-web"]} />
                <img alt="logo" src={ImageAssets.ic_sekeron_logo} className={styles["sekeron-icon-header-image-mobile"]} />
            </header>
            <Grid container className={styles["login-container"]} columnGap={{ xs: 4, lg: 8, xl: 8 }}>

                <Grid item xs={5} className={styles["slider-container"]}>
                    <SimpleSlider isAutoplay={true} carouselImages={carouselJson} />
                </Grid>

                <div className={styles["divider"]}></div>

                <Grid item xs={5}
                    className={styles["login-sub-container"]}
                    sx={{
                        pl: { xs: 0, sm: 0, md: 5, lg: 5, xl: 10 },
                        pr: { xs: 0, sm: 0, md: 5, lg: 5, xl: 10 },
                    }}
                >
                    <Stack className={styles["form-fields-container"]}>
                        <Typography variant="h1" className={styles["login-header"]}>{strings.login}</Typography>
                        {renderDifferentForms()}
                        <Typography variant='body1' className={styles["joined-already"]}>{strings.donHaveAnAccount} <Link to={routesNames.registration} className={styles["login-link"]}>{strings.signUpHere}</Link></Typography>
                    </Stack>
                </Grid>
            </Grid >
        </Fragment >
    )
}

export default Login