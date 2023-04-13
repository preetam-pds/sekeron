import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { CreateProjectRedux, CreateProjectScreenTypeEnum, CreateProjectStepperEnumUtils, strings } from '@sekeron/domain'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MuiButton } from 'src/components/common/button/MuiButton'
import MuiStepper from 'src/components/common/stepper/MuiStepper'
import routesNames from 'src/routes/RouteNames'
import styles from './CreateProject.module.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import BasicInfo from './basic-info/BasicInfo'
import MediaSelection from './media-slection/MediaSelection'
import Collaborators from './collaborators/Collaborators'
import { useDispatch, useSelector } from 'react-redux'
import SelectCoverImage from './cover-image/SelectCoverImage'
import MuiConfirmationDailog from 'src/components/common/dailog/confirmation-dailog/MuiConfirmationDailog'

const CreateProject = () => {

    const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
    const steps = CreateProjectStepperEnumUtils.getCreateProjectStepperEnums()
    const actionDispatch = ((dispatch: any) => ({
        setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
    }))

    const { setCreateProjectState } = actionDispatch(useDispatch())
    const [screenType, setScreenType] = useState(CreateProjectScreenTypeEnum.basicInfo)
    const [isSelectCoverImageClicked, setIsSelectCoverImageClicked] = useState(false)
    const [isClearAllClicked, setIsClearAllClicked] = useState(false)
    const [activeStep, setActiveStep] = useState<number>(0)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location?.state?.isCollaborator) {
            setScreenType(CreateProjectScreenTypeEnum.collaborators)
            setActiveStep(2)
        } else {
            setActiveStep(0)
            setScreenType(CreateProjectScreenTypeEnum.basicInfo)
        }
    }, [])

    const handleNext = () => {
        if (screenType === CreateProjectScreenTypeEnum.basicInfo) {
            setScreenType(CreateProjectScreenTypeEnum.mediaSelection)
            setActiveStep(1)
        } else if (screenType === CreateProjectScreenTypeEnum.mediaSelection) {
            setScreenType(CreateProjectScreenTypeEnum.collaborators)
            setActiveStep(2)
        } else if (screenType === CreateProjectScreenTypeEnum.collaborators) {
            setIsSelectCoverImageClicked(true)
        }
    }

    const handleClearAll = () => {
        setIsClearAllClicked(true)
    }

    const handleCancleProjectCreationClicked = () => {
        setIsClearAllClicked(false)
    }

    const handleConfirmClick = () => {
        if (screenType === CreateProjectScreenTypeEnum.mediaSelection) {
            const projectDetails = {
                ...createProjectState.projectDetails,
                mediaContent: []
            }
            setCreateProjectState({
                key: "projectDetails", value: projectDetails
            })
        }
        else if (screenType === CreateProjectScreenTypeEnum.collaborators) {
            const projectDetails = {
                ...createProjectState.projectDetails,
                collaborators: {
                    totalNumberOfRequiredArtist: 0,
                    artists: []
                }
            }
            setCreateProjectState({
                key: "projectDetails", value: projectDetails
            })

            const artistData = { ...createProjectState.artistData, selectedArtistsType: [], selectedArtists: [] }
            setCreateProjectState({ key: "artistData", value: artistData })
        }
        setIsClearAllClicked(false)
    }

    const shouldDisableClearAllButton = () => {
        let shouldDisableButton = true
        if (screenType === CreateProjectScreenTypeEnum.mediaSelection) {
            if (createProjectState.projectDetails.mediaContent.length > 0) {
                shouldDisableButton = false
            }
        }
        else if (screenType === CreateProjectScreenTypeEnum.collaborators) {
            if (createProjectState.projectDetails.collaborators.artists.length > 0) {
                shouldDisableButton = false
            }
        }
        return shouldDisableButton
    }

    const handleStepClick = (index: number) => {
        switch (activeStep) {
            case 0:
                if (index === 1) {
                    if (!isValid()) {
                        setActiveStep(index)
                        setScreenType(CreateProjectScreenTypeEnum.mediaSelection)
                    }
                } else if (index === 2) {
                    if (!isValid() && createProjectState.projectDetails.mediaContent.length > 0) {
                        setActiveStep(index)
                        setScreenType(CreateProjectScreenTypeEnum.collaborators)
                    }
                }
                break;
            case 1:
                if (index === 0) {
                    setActiveStep(index)
                    setScreenType(CreateProjectScreenTypeEnum.basicInfo)
                } else if (index === 2) {
                    if (!isValid() && createProjectState.projectDetails.mediaContent.length > 0) {
                        setScreenType(CreateProjectScreenTypeEnum.collaborators)
                        setActiveStep(index)
                    }
                }
                break;
            case 2:
                if (index === 0) {
                    setActiveStep(index)
                    setScreenType(CreateProjectScreenTypeEnum.basicInfo)
                } else if (index === 1) {
                    setActiveStep(index)
                    setScreenType(CreateProjectScreenTypeEnum.mediaSelection)
                }
                break;
        }

    }

    const isValid = () => {
        let isFormNotValid = false
        if (screenType === CreateProjectScreenTypeEnum.basicInfo) {
            Object.values(createProjectState.basicInfoErrors).every((errorValue: any) => {
                if (errorValue !== "") {
                    isFormNotValid = true;
                    return false
                }
                return true
            })
            const { projectName, category, ownershipType, revenueShareType, startDate } = createProjectState.projectDetails.basicInfo
            if (projectName === "" || category === "" || ownershipType === "" || revenueShareType === "" || startDate === null) {
                isFormNotValid = true;
            }
        }

        else if (screenType === CreateProjectScreenTypeEnum.mediaSelection) {
            if (createProjectState.projectDetails.mediaContent.length < 1) {
                isFormNotValid = true
            }
        }
        else if (screenType === CreateProjectScreenTypeEnum.collaborators) {

        }
        return isFormNotValid
    }

    const renderDifferentScreens = () => {
        if (screenType === CreateProjectScreenTypeEnum.basicInfo) {
            return (
                <BasicInfo />
            )
        }
        else if (screenType === CreateProjectScreenTypeEnum.mediaSelection) {
            return (
                <MediaSelection />
            )
        }
        else if (screenType === CreateProjectScreenTypeEnum.collaborators) {
            return (
                <Collaborators />
            )
        }
    }

    return (
        <>
            {isSelectCoverImageClicked ?
                <SelectCoverImage
                    open={isSelectCoverImageClicked}
                    handleClose={() => setIsSelectCoverImageClicked(false)}
                >
                </SelectCoverImage>
                : null}

            {isClearAllClicked ?
                <MuiConfirmationDailog fisrtButtonLabel={strings.no} secondButtonLabel={strings.yes} isOpen={isClearAllClicked} handleCancel={handleCancleProjectCreationClicked} handleSave={handleConfirmClick}>
                    <div>
                        <Typography className={styles["confirmation-message"]} >{strings.cancelProjectCreation}</Typography>
                        <Typography className={styles["confirmation-description"]}>{strings.youmightLooseChanges}</Typography>
                    </div>
                </MuiConfirmationDailog> : null}

            <div className={styles["create-project-container"]}>
                <Stack className={styles["mobile-header-container"]}>
                    <Stack alignItems={"center"}>
                        <ArrowBackIosRoundedIcon className="back-button" onClick={() => navigate(routesNames.createPost)} />
                        <Typography className={styles["create-project"]}>{strings.createProject}</Typography>
                    </Stack>
                    <MuiButton className={styles["next-button"]} disabled={isValid()} onClick={() => handleNext()}>{strings.next}</MuiButton>
                </Stack>

                <div className={styles["header-container"]}>
                    <Stack>
                        <Typography className={styles["project-id-header"]}>{strings.projectId}</Typography>
                        <Typography className={styles["project-id"]}>3123bg</Typography>
                    </Stack>
                    <Stack columnGap={2}>
                        {activeStep === 1 || activeStep === 2 ?
                            <MuiButton className={styles["clear-all"]}
                                disabled={shouldDisableClearAllButton()}
                                onClick={() => handleClearAll()}>{strings.clearAll}</MuiButton>
                            : null
                        }
                        <MuiButton className={styles["next"]}
                            disabled={isValid()}
                            onClick={() => handleNext()}>{strings.next}</MuiButton>
                    </Stack>
                </div>
                <div className={styles["stepper-container"]}>
                    <hr className={styles["top-line-break"]} />
                    <MuiStepper activeStep={activeStep} steps={steps} handleStepClick={handleStepClick} />
                    <hr className={styles["bottom-line-break"]} />
                </div>
                <div className={styles["form-container"]}>
                    {renderDifferentScreens()}
                </div>
            </div>
        </>
    )
}

export default CreateProject