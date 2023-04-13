import React, { useEffect, useRef } from 'react'
import { strings, constants, CreateProjectRedux, OwnershiptypeEnumUtils, RevenueShareTypeEnumUtils } from '@sekeron/domain';
import { MuiDropdown } from 'src/components/common/dropdown/mui-dropdown/MuiDropdoown';
import { MuiTextField } from 'src/components/common/textfield/MuiTextField';
import styles from './BasicInfo.module.css'
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { MuiCheckbox } from 'src/components/common/checkbox/MuiCheckBox';
import ImageAssets from 'src/assets';
import { MuiButton } from 'src/components/common/button/MuiButton';
import { MuiDatepicker } from 'src/components/common/datepicker/MuiDatepicker';
import { useDispatch, useSelector } from 'react-redux';
import { MuiTextArea } from 'src/components/common/mui-text-area/MuiTextArea';
import moment from 'moment';

const BasicInfo = () => {

  const actionDispatch = ((dispatch: any) => ({
    setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
  }))

  const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
  const { setCreateProjectState } = actionDispatch(useDispatch())
  const OwnershipTypeMenuItems = OwnershiptypeEnumUtils.getOwnershiptypeEnums()
  const RevenueShareTypeDropdownValues = RevenueShareTypeEnumUtils.getRevenueShareTypeEnums()

  useEffect(() => {
    if (createProjectState.projectDetails.basicInfo.offline) {
      document.getElementById('address-field').scrollIntoView({ behavior: 'smooth' })
    }
  }, [createProjectState.projectDetails.basicInfo.offline])

  const handleInputChange = (event) => {
    validateForm(event)
    const { name, value } = event.target
    // const onlyLetters = value.replace(/[^A-Za-z]/ig, '')

    setCreateProjectState({
      key: "projectDetails", value: {
        ...createProjectState.projectDetails, basicInfo: { ...createProjectState.projectDetails.basicInfo, [name]: value }
      }
    })
  }

  const handleDropdownChange = (event) => {
    validateForm(event)
    const { name, value } = event.target
    if (name === "revenueShareType") {

      let projectDetails;
      projectDetails = {
        ...createProjectState.projectDetails,
        basicInfo: { ...createProjectState.projectDetails.basicInfo, [name]: value },
        collaborators: {
          ...createProjectState.projectDetails.collaborators,
          artists: [...createProjectState.projectDetails.collaborators.artists.map((artist: any, index) => (
            {
              ...artist, selectedArtists: artist.selectedArtists.map((data) => ({
                ...data,
                revenueShare: value === 1 ?
                  Math.round(100 / (createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist)) : ""
              }))
            }
          ))]
        }
      }

      setCreateProjectState({ key: "projectDetails", value: projectDetails })
    } else {
      setCreateProjectState({
        key: "projectDetails", value: {
          ...createProjectState.projectDetails, basicInfo: { ...createProjectState.projectDetails.basicInfo, [name]: value }
        }
      })
    }
  }

  const handleDateChange = (event: any, fieldName: string) => {
    console.log("its in onchange", event)
    setCreateProjectState({
      key: "projectDetails", value: {
        ...createProjectState.projectDetails,
        basicInfo: {
          ...createProjectState.projectDetails.basicInfo, [fieldName]: event,
          formattedStartDate: event?.$d
        }
      }
    })

    // if (!event?.$d) {
    //   setCreateProjectState({
    //     key: "basicInfoErrors", value: {
    //       ...createProjectState.basicInfoErrors, startDate: strings.selectStartDateOftheProject
    //     }
    //   })
    // }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName) => {
    const { name, checked } = event.target
    setCreateProjectState({
      key: "projectDetails", value: {
        ...createProjectState.projectDetails, basicInfo: { ...createProjectState.projectDetails.basicInfo, [fieldName]: checked }
      }
    })
  }

  const validateForm = (event) => {
    console.log("its in validation", event.target.name)
    const { name, value } = event.target
    let errorMessage = ""
    switch (name) {
      case "projectName":
        if (!value) {
          errorMessage = strings.enterProjectName
        }
        break;
      case "category":
        if (!value) {
          errorMessage = strings.enterCategory
        }
        break;
      case "ownershipType":
        if (!value) {
          errorMessage = strings.selectOwnershipType
        }
        break;
      case "revenueShareType":
        if (!value) {
          errorMessage = strings.selectRevenueShareType
        }
        break;
      case "startDate":
        if (!value) {
          errorMessage = strings.selectStartDateOftheProject
        }
        break;
    }
    setCreateProjectState({
      key: "basicInfoErrors", value: { ...createProjectState.basicInfoErrors, [name]: errorMessage }
    })
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["form-container"]}>
        <Stack direction="column" rowGap={0.7} textAlign="center" sx={{ height: "100%" }}>
          <MuiTextField
            fullWidth
            type="text"
            name="projectName"
            inputProps={{ "data-testid": "projectName" }}
            label={strings.projectName}
            errorMessage={createProjectState.basicInfoErrors.projectName}
            value={createProjectState.projectDetails.basicInfo.projectName}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateForm(e)}
          />
          <MuiTextField
            fullWidth
            type="text"
            name="category"
            label={strings.projectCategory}
            errorMessage={createProjectState.basicInfoErrors.category}
            inputProps={{ "data-testid": "category" }}
            value={createProjectState.projectDetails.basicInfo.category}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateForm(e)}
          />
          <MuiDropdown
            menuitems={OwnershipTypeMenuItems}
            sx={{ textAlign: 'start' }}
            name="ownershipType"
            value={createProjectState.projectDetails.basicInfo.ownershipType}
            onChange={(e) => handleDropdownChange(e)}
            fieldvalue={"ownershipType"}
            fieldid={"id"}
            label={strings.ownerShipType}
            errorMessage={createProjectState.basicInfoErrors.ownershipType}
            inputProps={{ "data-testid": "ownershipType" }}
            onBlur={(e) => validateForm(e)}
          />
          <MuiDropdown
            menuitems={RevenueShareTypeDropdownValues}
            sx={{ textAlign: 'start' }}
            name="revenueShareType"
            value={createProjectState.projectDetails.basicInfo.revenueShareType}
            onChange={(e) => handleDropdownChange(e)}
            fieldvalue={"revenueShareType"}
            label={strings.revenueShareType}
            fieldid={"id"}
            inputProps={{ "data-testid": "revenueShareType" }}
            errorMessage={createProjectState.basicInfoErrors.revenueShareType}
            onBlur={(e) => validateForm(e)}
          />
          <Stack columnGap={2} sx={{ width: "100%" }}>
            <MuiDatepicker
              inputProps={{ "data-testid": "startDate" }}
              value={createProjectState.projectDetails.basicInfo.startDate}
              onChange={(e: any) => handleDateChange(e, "startDate")}
              onBlur={(e) => validateForm(e)}
              mindate={new Date()}
              name="startDate"
              label={strings.startDate}
              inputformat={constants.dateFormat}
              errorMessage={createProjectState.basicInfoErrors.startDate}
              disablefuture={"false"}
            />
            <MuiDatepicker
              inputProps={{ "data-testid": "endDate" }}
              value={createProjectState.projectDetails.basicInfo.endDate}
              onChange={(e: any) => handleDateChange(e, "endDate")}
              mindate={createProjectState.projectDetails.basicInfo.startDate}
              name="endDate"
              label={strings.endDate}
              inputformat={constants.dateFormat}
              disablefuture={"false"}
              onBlur={(e) => validateForm(e)}
              errorMessage={createProjectState.basicInfoErrors.endDate} />
          </Stack>
          <MuiTextArea
            fullWidth
            maxLength={500}
            value={createProjectState.projectDetails.basicInfo.description}
            errorMessage=""
            type="text"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateForm(e)}
            name="description"
            inputProps={{ "data-testid": "description", maxLength: 500 }}
            label={strings.descrption}
          />
          <Stack direction="column" sx={{ width: "100%" }} alignItems="center">
            <Stack columnGap={2} textAlign="center">
              <MuiCheckbox name="online" onChange={(e) => handleCheckboxChange(e, "online")} uncheckedIcon={ImageAssets.ic_unchecked} checked={createProjectState.projectDetails.basicInfo.online} checkedicon={ImageAssets.ic_checkedicon_blue} label="online"></MuiCheckbox>
              <MuiCheckbox name="offline" inputProps={{ "data-testid": "offline" }} onChange={(e) => handleCheckboxChange(e, "offline")} uncheckedIcon={ImageAssets.ic_unchecked} checked={createProjectState.projectDetails.basicInfo.offline} checkedicon={ImageAssets.ic_checkedicon_blue} label="offline"></MuiCheckbox>
            </Stack>
            <Typography className={styles["checkbox-info"]}>{strings.projectAddressInfo}</Typography>
          </Stack>
          {createProjectState.projectDetails.basicInfo.offline ?
            <Stack direction="column" rowGap={3} sx={{ width: "100%" }} alignItems="center">
              <MuiButton className={styles["enter-location"]}>{strings.enterLocation}</MuiButton>
              <Typography className={styles["checkbox-info"]}>{strings.or}</Typography>
              <MuiTextArea
                fullWidth
                maxLength={100}
                value={createProjectState.projectDetails.basicInfo.adress}
                errorMessage=""
                type="text"
                onChange={(e) => handleInputChange(e)}
                onBlur={(e) => validateForm(e)}
                name="adress"
                inputProps={{ "data-testid": "adress", maxLength: 100 }}
                label={strings.address}
                id={'address-field'}
              />
            </Stack>
            : null
          }
        </Stack>
      </div>
    </div>
  )
}

export default BasicInfo
