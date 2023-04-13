import * as React from "react"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Stack, Typography } from '@mui/material'
import { MuiButton } from '../../../components/common/button/MuiButton'
import MuiStepper from '../../../components/common/stepper/MuiStepper'
import UserInformation from './create-user/UserInformation'
import ProfileDetails from './create-user/ProfileDetails'
import { CreateUserScreeTypeEnum, CreateUserStepperEnumUtils, loginRedux, ValidationUtils } from '@sekeron/domain'
import { OtpInput } from '../../../components/common/otp-input/OtpInput'
import ImageAssets from '../../../assets'
import { strings } from '@sekeron/domain'
import styles from '../UserManagement.module.css'
import routesNames from '../../../routes/RouteNames'
import { constants } from '@sekeron/domain'
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"

const CreateUser = () => {

    const actionDispatch = ((dispatch: any) => ({
        setLoginState: (data: any) => dispatch(loginRedux.actions.setLoginState(data)),
    }))

    const { setLoginState } = actionDispatch(useDispatch())
    const loginState = useSelector((state: any) => state.Login)
    const navigate = useNavigate();
    const steps = CreateUserStepperEnumUtils.getCreateUserStepperEnums()

    const [screenType, setScreenType] = useState(CreateUserScreeTypeEnum.userInformation)
    const [activeStep, setActiveStep] = useState<number>(0)
    const [role,] = useState([]);
    const [otpTimer, setOtpTimer] = useState(constants.otpTimer);
    const [otp, setOtp] = useState("");
    const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);
    const [toggler, setToggler] = useState(false);

    const onEditEmailClick = () => {
        setOtp("")
        setScreenType(CreateUserScreeTypeEnum.userInformation)
        setActiveStep(0)
    }

    const resendOtp = () => {
        setOtp("")
        setOtpTimer(constants.otpTimer);
    }

    const toggleDrawer = () => {
        setIsDropDownMenuOpen(!isDropDownMenuOpen);
        setToggler(!toggler);
    };

    const handleInputChange = (event) => {
        validateForm(event)
        const { name, value } = event.target
        let userDetails = {}
        if (name === strings.fullName || name === strings.userName) {
            // const onlyLetters = value.replace(/[^A-Za-z]/ig, '')
            userDetails = {
                ...loginState.userDetails,
                [name]: value
            }
        } else if (name === strings.gender) {
            userDetails = {
                ...loginState.userDetails,
                [name]: value
            }
        } else if (name === strings.phoneNumber) {
            const onlyNumbers = value.replace(/[^0-9]/g, '')
            userDetails = {
                ...loginState.userDetails, phoneNumber: {
                    ...loginState.userDetails.phoneNumber,
                    number: onlyNumbers
                }
            }
        }
        setLoginState({
            key: "userDetails", value: userDetails
        })
    }

    const handleCountryCodeSelection = (code) => {
        const userDetails = {
            ...loginState.userDetails, phoneNumber: {
                ...loginState.userDetails.phoneNumber,
                countryCode: code
            }

        }
        setLoginState({
            key: "userDetails", value: userDetails
        })
        toggleDrawer()
    }
    const handleDateChange = (event) => {
        const userDetails = {
            ...loginState.userDetails,
            dateOfBirth: event
        }
        setLoginState({
            key: "userDetails", value: userDetails
        })
    }

    const validateForm = (event) => {
        const { name, value } = event.target
        let errorMessage = ""
        switch (name) {
            case strings.fullName:
                if (!value) {
                    errorMessage = strings.pleaseEnterFullname
                }
                break;
            case strings.gender:
                if (!value) {
                    errorMessage = strings.pleaseSelectGener
                }
                break;
            case strings.phoneNumber:
                if (value === "") {
                    errorMessage = strings.pleaseEnterPhoneNumber
                } else {
                    const isPhoneNumberValid = ValidationUtils.isPhoneNumberValid(loginState.userDetails.phoneNumber.countryCode, value)
                    if (!isPhoneNumberValid) {
                        errorMessage = strings.enterValidPhoneNumber
                    } else {
                        errorMessage = ""
                    }
                }
                break;
            case strings.dateOfBirth:
                if (!value) {
                    errorMessage = strings.pleaseSelectDateofBirth
                }
                break;
            case strings.userName:
                if (!value) {
                    errorMessage = strings.pleaseEnterUsername
                }
                break;
            case strings.roles:
                if (!value) {
                    errorMessage = strings.pleaseSelectRole
                }
                break;
        }
        setLoginState({
            key: "userDetailsErrors", value: { ...loginState.userDetailsErrors, [name]: errorMessage }
        })

    }

    const isValid = () => {
        let isValid = false
        if (screenType === CreateUserScreeTypeEnum.userInformation) {
            Object.values(loginState.userDetailsErrors).every((errorValue: any) => {
                if (errorValue !== "") {
                    isValid = true;
                    return false
                }
                return true
            })
            const { fullName, gender, phoneNumber, dateOfBirth } = loginState.userDetails
            if (fullName === "" || gender === "" || phoneNumber.number === "" || dateOfBirth === null) {
                isValid = true;
            }
        }
        else if (screenType === CreateUserScreeTypeEnum.otpVerification) {
            if (otp.length < constants.otpMaxLength || otpTimer === constants.otpInitialLength) {
                isValid = true
            }
        }
        else if (screenType === CreateUserScreeTypeEnum.profileDetails) {
            if (loginState.userDetails.userName === "" || loginState.userDetails.roles.length < 0 || loginState.userDetailsErrors.userName !== "" || loginState.userDetailsErrors.roles !== "") {
                isValid = true
            }
        }
        return isValid
    }

    const handleStepClick = (index: number) => {
        switch (activeStep) {
            case 0:
                if (index === 1) {
                    if (!isValid()) {
                        setActiveStep(index)
                        setScreenType(CreateUserScreeTypeEnum.otpVerification)
                    }
                } else if (index === 2) {
                    if (!isValid()) {
                        setActiveStep(index)
                        setScreenType(CreateUserScreeTypeEnum.profileDetails)
                    }
                }
                break;
            case 1:
                if (index === 0) {
                    setActiveStep(index)
                    setScreenType(CreateUserScreeTypeEnum.userInformation)
                } else if (index === 2) {
                    if (!isValid()) {
                        setScreenType(CreateUserScreeTypeEnum.profileDetails)
                        setActiveStep(index)
                    }
                }
                break;
            case 2:
                if (index === 0) {
                    setActiveStep(index)
                    setScreenType(CreateUserScreeTypeEnum.userInformation)
                } else if (index === 1) {
                    setActiveStep(index)
                    setScreenType(CreateUserScreeTypeEnum.otpVerification)
                }
                break;
        }

    }


    const handleRoleChange = (values) => {
        setLoginState({
            key: "userDetails", value: {
                ...loginState.userDetails, roles: values
            }
        })
    }

    const handleClick = () => {
        if (screenType === CreateUserScreeTypeEnum.userInformation) {
            setScreenType(CreateUserScreeTypeEnum.otpVerification)
            setActiveStep(1)
            setOtpTimer(constants.otpTimer);
        }
        else if (screenType === CreateUserScreeTypeEnum.otpVerification) {
            setScreenType(CreateUserScreeTypeEnum.profileDetails)
            setActiveStep(2)
        }
        else if (screenType === CreateUserScreeTypeEnum.profileDetails) {
            navigate(routesNames.homePersonification);
        }
    }

    const renderDifferentForms = () => {
        if (screenType === CreateUserScreeTypeEnum.userInformation) {
            return <UserInformation
                toggleDrawer={toggleDrawer}
                isDropDownMenuOpen={isDropDownMenuOpen}
                handleInputChange={handleInputChange}
                handleCountryCodeSelection={handleCountryCodeSelection}
                handleDateChange={handleDateChange}
                validateForm={validateForm} />
        }
        else if (screenType === CreateUserScreeTypeEnum.otpVerification) {
            return (
                <Stack rowGap={5} direction={"column"} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
                    <Typography variant="h2" className={styles["user-info-resend-code"]}>{strings.enterTheCodeSentTo}</Typography>
                    <Stack className={styles["user-info-send-to-details"]} spacing={0.5}>
                        <Typography variant="h2" onClick={() => onEditEmailClick()}>
                            {`${loginState.userDetails.phoneNumber.countryCode} ${loginState.userDetails.phoneNumber.number}`}
                        </Typography>
                        <a className={styles["login-link"]} onClick={() => onEditEmailClick()}><img alt="edit" src={ImageAssets.ic_edit} />{strings.edit}</a>
                    </Stack>
                    <OtpInput otp={otp} setOtp={setOtp} resendOtp={resendOtp} setOtpTimer={setOtpTimer} otpTimer={otpTimer} />
                </Stack>
            )
        }
        else if (screenType === CreateUserScreeTypeEnum.profileDetails) {
            return <ProfileDetails role={role} rolesError={""} handleRoleChange={handleRoleChange} handleInputChange={handleInputChange} validateForm={validateForm} />
        }
    }

    return (
        <div className={styles['form-container']}>
            <Stack direction={"column"} className={styles["registration-sub-container"]}>
                <Stack direction={"column"} className={activeStep === 0 ? styles["stepper-container"] : styles["stepper-otp-container"]}>
                    <Typography variant="h2" className={styles["create-user-header"]}>{strings.letsGetStarted}</Typography>
                    <MuiStepper activeStep={activeStep} steps={steps} handleStepClick={handleStepClick} />
                    <Typography className={styles["create-user-sub-header"]} variant="h2">
                        {activeStep === 0 && strings.greetingsFromSkeron}
                        {activeStep === 1 && loginState.userDetails.fullName + strings.thatsGreatName}
                        {activeStep === 2 && strings.thanksOneLastOneStep}
                    </Typography>
                </Stack>
                <Stack className={styles["fields-container"]}>
                    {renderDifferentForms()}
                    <MuiButton disabled={isValid()} onClick={() => handleClick()} className={styles["continue"]}>{screenType === CreateUserScreeTypeEnum.profileDetails ? strings.takeMeToHome : strings.continue}</MuiButton>
                </Stack>
            </Stack>
        </div>
    )
}

export default CreateUser