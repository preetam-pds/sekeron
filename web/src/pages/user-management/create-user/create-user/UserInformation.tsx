import React, { Fragment } from 'react'
import { Stack, Typography } from '@mui/material'
import moment from 'moment'
import { constants, GenderTypeEnumUtils } from '@sekeron/domain'
import { strings } from '@sekeron/domain'
import { MuiDatepicker } from '../../../../components/common/datepicker/MuiDatepicker'
import { MuiDropdown } from '../../../../components/common/dropdown/mui-dropdown/MuiDropdoown'
import { MuiTextField } from '../../../../components/common/textfield/MuiTextField'
import styles from './CreateUser.module.css'
import PhoneNumber from 'src/components/common/phone-number/PhoneNumber'
import { useSelector } from 'react-redux'

interface IUserInformation {
  isdatepickeropen?: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (event: React.ChangeEvent<any>) => void;
  handleCountryCodeSelection: (e) => void;
  isDropDownMenuOpen: boolean;
  toggleDrawer: (e) => void;
  validateForm: (event: React.ChangeEvent<any>) => void
}

const UserInformation = ({ isdatepickeropen, handleInputChange, handleDateChange, handleCountryCodeSelection, isDropDownMenuOpen, toggleDrawer, validateForm }: IUserInformation) => {
  const genderMenuItems = GenderTypeEnumUtils.getGenderTypeEnums()
  const loginState = useSelector((state: any) => state.Login)

  const CountryCode = [
    {
      code: "+91",
      CountryName: "India",
      flag: ""
    },
    {
      code: "+93",
      CountryName: "Afganistan",
      flag: ""
    },
    {
      code: "+44",
      CountryName: "United Kingdom",
      flag: ""
    },
    {
      code: "+44",
      CountryName: "United Kingdom",
      flag: ""
    },
  ];


  return (
    <Fragment>
      <Stack direction={"column"} textAlign={"center"} sx={{ width: "90%", margin: "0px auto", rowGap: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 } }}>
        <Typography variant="h2" className={styles["user-details"]}>{strings.whatsYourName}</Typography>
        <MuiTextField
          fullWidth
          type="text"
          name="fullName"
          value={loginState.userDetails.fullName}
          inputProps={{ "data-testid": "fullName" }}
          label={strings.enterFullName}
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => validateForm(e)}
          errorMessage={loginState.userDetailsErrors.fullName}
        />
        <MuiDropdown
          menuitems={genderMenuItems}
          sx={{ textAlign: 'start' }}
          name="gender"
          fieldvalue={"genderType"}
          label={strings.selectGender}
          value={loginState.userDetails.gender}
          fieldid={"id"}
          isdailogopen={isdatepickeropen}
          inputProps={{ "data-testid": "gender" }}
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => validateForm(e)}
          errorMessage={loginState.userDetailsErrors.gender}
        />
        <MuiDatepicker
          value={loginState.userDetails.dateOfBirth}
          maxdate={moment(new Date()).subtract(18, 'years').format()}
          mindate={moment(new Date()).subtract(80, 'years').format()}
          name="dateOfBirth"
          label={strings.enterDateOfBirth}
          inputformat={constants.dateFormat}
          disablefuture={"true"}
          inputProps={{ "data-testid": "dateOfBirth" }}
          onChange={(e) => handleDateChange(e)}
          onBlur={(e) => validateForm(e)}
          errorMessage={loginState.userDetailsErrors.dateOfBirth}
        />
        <PhoneNumber
          onChange={handleInputChange}
          handleCountryCodeSelection={handleCountryCodeSelection}
          value={loginState.userDetails.phoneNumber.number}
          toggleDrawer={toggleDrawer}
          countryCode={loginState.userDetails.phoneNumber.countryCode}
          isDropDownMenuOpen={isDropDownMenuOpen}
          CountryCode={CountryCode}
          errorMessage={loginState.userDetailsErrors.phoneNumber}
          validateForm={validateForm}

        />
      </Stack >
    </Fragment >
  )
}

export default UserInformation 