import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './ArtistDetails.module.css'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProjectRedux, strings } from '@sekeron/domain';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar';
import ImageAssets from 'src/assets';
import MuiAutocomplete from 'src/components/common/dropdown/mui-autocomplete/MuiAutocomplete';
import MuiGradientTabs from 'src/components/common/mui-tabs/gradient-tabs/MuiGradientTabs';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import routesNames from 'src/routes/RouteNames';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import CircularProgress from 'src/components/common/circular-progress/CircularProgress';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { MuiButton } from 'src/components/common/button/MuiButton';
import { MuiTextField } from 'src/components/common/textfield/MuiTextField';
import AddIcon from '@mui/icons-material/Add';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const ArtistDetails = () => {

    const artistsData = [
        { title: "Punya", id: 1 },
        { title: "Sheetla", id: 2 },
        { title: "Chetaa", id: 3 },
        { title: "Michael", id: 4 },
        { title: "Preethi", id: 5 },
        { title: "Swathi", id: 6 },
        { title: "Arpita", id: 7 },
        { title: "Kaveri", id: 8 },
    ];

    const tabData = [
        {
            id: 1,
            name: "Add artist",
            value: "Add artist",
        },
        {
            id: 2,
            name: "Project Requirements",
            value: "Project Requirements",
        }
    ]

    const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
    }))

    const location = useLocation()
    const navigate = useNavigate()
    const { setCreateProjectState } = actionDispatch(useDispatch())

    const [tabValue, setTabValue] = useState<Number>(0);

    useEffect(() => {
        const selectedArtistTypeData = createProjectState.projectDetails.collaborators.artists.find((artist: any, i) => artist.id === location.state.artistTypeData.id)
        let artists = []
        selectedArtistTypeData.selectedArtists.forEach((item) => {
            artists.push({
                id: item.id,
                title: item.artistName,
            })
        })
        const artistData = { ...createProjectState.artistData, selectedArtists: [...artists] }
        setCreateProjectState({ key: "artistData", value: artistData })
    }, [])

    const handleTabChange = (event: React.SyntheticEvent, value: Number) => {
        setTabValue(value);
    };

    const handleIncrement = (item: any) => {
        let projectDetails;
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any, index) => (artist.id === item.id) ?
            {
                ...artist, numberOfArtistRequired: artist?.numberOfArtistRequired + 1, selectedArtists: handleRevenueShare(artist, 1)
            } : {
                ...artist, selectedArtists: handleRevenueShare(artist, 1)
            })

        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                totalNumberOfRequiredArtist: createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist + 1,
                artists: [...updatedMediaContent]
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })
    }

    const handleDecrement = (item: any) => {
        const updatedMediaContent = []
        createProjectState.projectDetails.collaborators.artists.forEach((artist: any, index) => {
            if (artist.id === item.id) {
                if (artist?.numberOfArtistRequired - 1 !== 0) {
                    updatedMediaContent.push({
                        ...artist, numberOfArtistRequired: artist?.numberOfArtistRequired - 1,
                        selectedArtists: handleRevenueShare(artist, 2)
                    })
                } else {
                    // const artistData = { ...createProjectState.artistData, selectedArtistsType: [...createProjectState.artistData.selectedArtistsType.filter((artist) => artist.id !== item.id)] }
                    // setCreateProjectState({ key: "artistData", value: artistData })
                    if (item.id === location.state.artistTypeData.id) {
                        navigate(routesNames.createProject)
                    }
                }
            } else {
                updatedMediaContent.push({ ...artist, selectedArtists: handleRevenueShare(artist, 2) })
            }
        })

        let projectDetails;
        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                totalNumberOfRequiredArtist: createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist - 1,
                artists: [
                    ...updatedMediaContent
                ]
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })
    }

    const handleRevenueShare = (artist, type: number) => {
        let data
        if (type === 1) {
            data = artist.selectedArtists.map((data) => ({
                ...data,
                revenueShare: createProjectState.projectDetails.basicInfo.revenueShareType === 1 ?
                    Math.round(100 / (createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist + 1)) : data.revenueShare
            }))
        } else {
            data = artist.selectedArtists.map((data) => ({
                ...data,
                revenueShare: createProjectState.projectDetails.basicInfo.revenueShareType === 1 ?
                    Math.round(100 / (createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist - 1)) : data.revenueShare
            }))
        }
        return data
    }

    const handleArtistsSelection = (values: any) => {

        const artistData = { ...createProjectState.artistData, selectedArtists: [...values] }
        setCreateProjectState({ key: "artistData", value: artistData })

        let artists = []

        values.forEach((item) => {
            artists.push({
                id: item.id,
                artistName: item.title,
                revenueShare: createProjectState.projectDetails.basicInfo.revenueShareType === 1 ? getSharePerArtist() : item.revenueShare,
            })
        })

        const mappedFruits = createProjectState.projectDetails.collaborators.artists.map(artistType => {
            if (artistType.id === location.state.artistTypeData.id) {
                return {
                    ...artistType,
                    selectedArtists: [
                        ...artists
                    ]
                }
            } else {
                return {
                    ...artistType,
                }
            }
        })

        let projectDetails;
        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                artists: [
                    ...mappedFruits
                ]
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })
    }

    const handleShareChange = (e, index) => {
        const { name, value } = e.target
        let projectDetails;
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any) => (artist.id === location.state.artistTypeData.id) ?
            {
                ...artist, selectedArtists: artist.selectedArtists.map((data, i) => i === index ?
                    { ...data, revenueShare: value } : { ...data }
                )
            } : { ...artist })

        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                artists: [...updatedMediaContent]
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })
    }

    const handleTermsChange = (e, index) => {
        const { name, value } = e.target

        let projectDetails;
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any) => (artist.id === location.state.artistTypeData.id) ?
            {
                ...artist, projectRequirements: artist.projectRequirements.map((data, i) => i === index ?
                    { ...data, terms: value } : { ...data }
                )
            } : { ...artist })

        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                artists: [...updatedMediaContent]
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })
    }

    const handleAddAnotherTerm = () => {
        let projectDetails;
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any, index) => (artist.id === location.state.artistTypeData.id) ?
            { ...artist, projectRequirements: [...artist.projectRequirements, { terms: "" }] } : { ...artist })
        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                artists: [...updatedMediaContent]
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })
    }

    const handleDeleteArtist = (item, index) => {

        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any, i) => {
            if (artist.id === location.state.artistTypeData.id) {
                return {
                    ...artist,
                    selectedArtists: artist.selectedArtists.filter((item, i) => index !== i)
                }
            } else {
                return artist
            }
        })
        let projectDetails;
        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                artists: [
                    ...updatedMediaContent
                ]
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })

        const artistData = { ...createProjectState.artistData, selectedArtists: [...createProjectState.artistData.selectedArtists.filter((artist) => artist.id !== item.id)] }
        setCreateProjectState({ key: "artistData", value: artistData })
    }

    const getArtistDetails = () => {
        return createProjectState.projectDetails.collaborators.artists.find((item) => location.state.artistTypeData.id === item.id)
    }

    const getSharePerArtist = () => {
        return Math.round(100 / createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist)
    }

    const handleGoBack = () => {
        navigate(routesNames.createProject, { state: { isCollaborator: true } })
    }

    return (
        <div className={styles["artist-details-container"]}>
            <Stack direction={"column"} rowGap={2} sx={{ height: "260px" }}>
                <Stack alignItems={"center"} className={styles["header-container"]}>
                    <ArrowBackIosRoundedIcon className="back-button" onClick={() => handleGoBack()} />
                    <Typography className={styles["artist-hedaer"]}>{strings.createProject}</Typography>
                </Stack>
                <Stack className={styles["selected-artists-container"]} columnGap={2}>
                    <Typography className={styles["artists-type"]}>{getArtistDetails()?.artistType}</Typography>
                    <Stack alignItems={"center"} justifyContent="flex-end" columnGap={1}>
                        <Stack className={styles["counter-container"]}>
                            <div onClick={() => handleDecrement(location.state.artistTypeData)}>
                                <RemoveRoundedIcon />
                            </div>
                            <Typography className={styles["number-of-artist"]}>{getArtistDetails().numberOfArtistRequired}</Typography>
                            <div onClick={() => handleIncrement(location.state.artistTypeData)}>
                                <AddRoundedIcon />
                            </div>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack alignItems={"center"} columnGap={5} justifyContent="center">
                    <Stack direction={"column"} justifyContent="center">
                        <Stack alignItems={"center"} columnGap={3}>
                            <div className={styles["selected-artist-indicator"]}></div>
                            <Typography className={styles["selected-artist"]}>{getArtistDetails().numberOfArtistRequired - getArtistDetails().selectedArtists.length} required</Typography>
                        </Stack>
                        <Stack alignItems={"center"} columnGap={3}>
                            <div className={styles["required-artist-indicator"]}></div>
                            <Typography className={styles["required-artist"]}>{getArtistDetails().selectedArtists.length} added</Typography>
                        </Stack>
                    </Stack>
                    <CircularProgress value={getArtistDetails().selectedArtists.length} maxValue={getArtistDetails().numberOfArtistRequired} />
                </Stack>
            </Stack>
            <Stack direction="column" className={styles["tab-container"]} rowGap={1.5}>
                <MuiGradientTabs
                    tabValue={tabValue}
                    handleTabChange={handleTabChange}
                    tabData={tabData}
                />
                {
                    tabValue === 0 &&
                    <Stack direction="column" rowGap={2} className={styles["share-form-container"]}>
                        <MuiAutocomplete
                            value={createProjectState.artistData.selectedArtists}
                            dropdownData={artistsData}
                            handleChange={handleArtistsSelection}
                            backgroundColor="#000000"
                            maxSelectable={getArtistDetails()?.numberOfArtistRequired}
                        />
                        <Stack columnGap={1}>
                            <InfoOutlinedIcon className={styles["info-icon"]} />
                            <Typography className={styles["info"]}>{strings.addArtistWarningMessage}</Typography>
                        </Stack>
                        <Stack style={{ height: "height:calc(100% - 110px)", overflow: "auto" }} direction="column" rowGap={2}>
                            {getArtistDetails()?.selectedArtists.map((artist, index) =>
                                <Stack>
                                    <Stack className={styles["artists-card"]} alignItems="center" justifyContent={"space-between"} >
                                        <Stack sx={{ position: "relative" }} alignItems="center" >
                                            <CustomAvatar
                                                numberOfAvatars={1}
                                                imageAvatars={[{ id: 1, imageUrl: ImageAssets.ic_friend_two }]}
                                                variant={'circular'}
                                                sx={{ width: 30, height: 30 }} />
                                            <Typography className={styles["artist-name"]}>{artist.artistName}</Typography>
                                            <StarRateRoundedIcon className={styles["ratings-icon"]} />
                                            <Typography className={styles["artist-ratings"]}>4.8</Typography>
                                        </Stack>
                                        <div className={createProjectState.projectDetails.basicInfo.revenueShareType === 1 ? styles["share-container"] : styles["unequal-share-container"]}>
                                            {createProjectState.projectDetails.basicInfo.revenueShareType === 1 ?
                                                <Typography>{artist.revenueShare}% Share</Typography> :
                                                <MuiTextField
                                                    fullWidth
                                                    type="text"
                                                    value={createProjectState.projectDetails.collaborators.artists[location.state.index].selectedArtists[index].revenueShare}
                                                    onChange={(e) => handleShareChange(e, index)}
                                                    name={`collaborators.artists[${location.state.index}].selectedArtists[${index}].revenueShare`}
                                                    inputProps={{ "data-testid": "title", maxLength: 60 }}
                                                    label={strings.share}
                                                />
                                            }
                                        </div>
                                    </Stack>
                                    <CloseRoundedIcon className={styles["cancel-icon"]} onClick={() => handleDeleteArtist(artist, index)} />
                                </Stack>
                            )}
                        </Stack>
                    </Stack>
                }
                {
                    tabValue === 1 &&
                    <Stack direction="column" rowGap={3} className={styles["form-container"]}>
                        <Stack direction="column" rowGap={2} sx={{ width: "100%" }} className={styles["terms-fields-container"]}>
                            {createProjectState.projectDetails.collaborators.artists[location.state.index]?.projectRequirements.length > 0 &&
                                createProjectState.projectDetails.collaborators.artists[location.state.index]?.projectRequirements.map((holiday, index) =>
                                    <Stack columnGap={1}>
                                        <MuiTextField
                                            fullWidth
                                            type="text"
                                            name={`collaborators.artists[${location.state.index}].projectRequirements[${index}].terms`}
                                            onChange={(e) => handleTermsChange(e, index)}
                                            inputProps={{ "data-testid": "title", maxLength: 60 }}
                                            label={`Term${index + 1}`}
                                            value={createProjectState.projectDetails.collaborators.artists[location.state.index].projectRequirements[index].terms}
                                        />
                                        {/* <DeleteOutlineRoundedIcon className={styles["delete-icon"]} onClick={() => arrayHelpers.remove(index)} /> */}
                                    </Stack>
                                )}
                        </Stack>
                        <MuiButton className={styles["add-more"]} startIcon={<AddIcon />} onClick={() => handleAddAnotherTerm()}>{strings.addTerm}</MuiButton>
                    </Stack>
                }
            </Stack>
        </div>
    )
}

export default ArtistDetails