import { Stack, Typography, Grid } from '@mui/material'
import { CreateProjectRedux, strings } from '@sekeron/domain'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ImageAssets from 'src/assets'
import CustomAvatar from 'src/components/common/avatar/MuiAvatar'
import { MuiButton } from 'src/components/common/button/MuiButton'
import MuiAutocomplete from 'src/components/common/dropdown/mui-autocomplete/MuiAutocomplete'
import MuiGradientTabs from 'src/components/common/mui-tabs/gradient-tabs/MuiGradientTabs'
import { MuiTextField } from 'src/components/common/textfield/MuiTextField'
import styles from './ArtistTypeDetails.module.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddIcon from '@mui/icons-material/Add';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CircularProgress from 'src/components/common/circular-progress/CircularProgress'

const ArtistTypeDetails = ({ selectedArtistTypeIndex, selectedArtistTypeId }: any) => {

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

    const { setCreateProjectState } = actionDispatch(useDispatch())

    const [tabValue, setTabValue] = useState<Number>(0);

    useEffect(() => {
        const selectedArtistTypeData = createProjectState.projectDetails.collaborators.artists.find((artist: any, i) => artist.id === selectedArtistTypeId)
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

    const handleDeleteArtist = (item, index) => {
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any, i) => {
            if (artist.id === selectedArtistTypeId) {
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

    const handleArtistsSelection = (values: any) => {

        const artistData = { ...createProjectState.artistData, selectedArtists: [...values] }
        setCreateProjectState({ key: "artistData", value: artistData })

        let artists = []

        values.forEach((item) => {
            artists.push({
                id: item.id,
                artistName: item.title,
                revenueShare: createProjectState.projectDetails.basicInfo.revenueShareType === 1 ? getSharePerArtist() : item.revenueShare,
                // ratings: 4.3
            })
        })

        const mappedFruits = createProjectState.projectDetails.collaborators.artists.map(artistType => {
            if (artistType.id === selectedArtistTypeId) {
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
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any) => (artist.id === selectedArtistTypeId) ?
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
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any) => (artist.id === selectedArtistTypeId) ?
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
        const updatedMediaContent = createProjectState.projectDetails.collaborators.artists.map((artist: any, index) => (artist.id === selectedArtistTypeId) ?
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

    const getSelectedData = () => {
        return createProjectState.projectDetails.collaborators.artists.find((item) => item.id === selectedArtistTypeId)
    }

    const getSharePerArtist = () => {
        const val = 100 / createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist
        return Math.round(100 / createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist)
    }

    return (
        <Stack direction={"column"} rowGap={3} className={styles["artist-type-details-sub-container"]}>
            <Stack direction={"column"} rowGap={3} sx={{ height: "260px" }}>
                <Typography className={styles["artist-type"]}>{getSelectedData()?.artistType}</Typography>
                <Stack alignItems={"center"} columnGap={5}>
                    <CircularProgress value={getSelectedData()?.selectedArtists?.length} maxValue={getSelectedData()?.numberOfArtistRequired} />
                    <Stack direction={"column"} >
                        <Stack alignItems={"center"} columnGap={3}>
                            <div className={styles["selected-artist-indicator"]}></div>
                            <Typography className={styles["selected-artist"]}>{getSelectedData()?.numberOfArtistRequired - getSelectedData()?.selectedArtists?.length} required</Typography>
                        </Stack>
                        <Stack alignItems={"center"} columnGap={3}>
                            <div className={styles["required-artist-indicator"]}></div>
                            <Typography className={styles["required-artist"]}>{getSelectedData()?.selectedArtists?.length} added</Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <MuiGradientTabs
                    tabValue={tabValue}
                    handleTabChange={handleTabChange}
                    tabData={tabData}
                />
            </Stack>

            {tabValue === 0 &&
                <Stack direction="column" rowGap={2} className={styles["form-container"]}>
                    <MuiAutocomplete
                        value={createProjectState.artistData.selectedArtists}
                        dropdownData={artistsData}
                        handleChange={handleArtistsSelection}
                        backgroundColor="#000000"
                        borderRadius="20px"
                        maxSelectable={getSelectedData()?.numberOfArtistRequired}
                    />
                    <Stack columnGap={1}>
                        <InfoOutlinedIcon className={styles["info-icon"]} />
                        <Typography className={styles["info"]}>{strings.addArtistWarningMessage}</Typography>
                    </Stack>
                    <Grid container rowSpacing={3} className={styles["cards-container"]}>
                        {createProjectState.projectDetails.collaborators.artists[selectedArtistTypeIndex]?.selectedArtists.length > 0 &&
                            createProjectState.projectDetails.collaborators.artists[selectedArtistTypeIndex]?.selectedArtists.map((artist, index) =>
                                <Grid item xl={5.9} lg={10} md={10}>
                                    <div className={styles["artists-card"]}>
                                        <Stack sx={{ position: "relative" }} alignItems="center" columnGap={1}>
                                            <CustomAvatar
                                                numberOfAvatars={1}
                                                imageAvatars={[{ id: 1, imageUrl: ImageAssets.ic_friend_two }]}
                                                variant={'circular'}
                                                sx={{ width: 40, height: 40 }} />
                                            <Typography className={styles["artist-name"]}>{artist.artistName}</Typography>
                                            <Stack>
                                                <StarRateRoundedIcon className={styles["ratings-icon"]} />
                                                <Typography className={styles["artist-ratings"]}>4.8</Typography>
                                            </Stack>
                                            <CloseRoundedIcon className={styles["cancel-icon"]} onClick={() => handleDeleteArtist(artist, index)} />
                                        </Stack>
                                        <div className={createProjectState.projectDetails.basicInfo.revenueShareType === 1 ? styles["share-container"] : styles["unequal-share-container"]}>
                                            {createProjectState.projectDetails.basicInfo.revenueShareType === 2 ?
                                                <MuiTextField
                                                    fullWidth
                                                    type="text"
                                                    value={createProjectState.projectDetails.collaborators.artists[selectedArtistTypeIndex].selectedArtists[index].revenueShare}
                                                    onChange={(e) => handleShareChange(e, index)}
                                                    name={`collaborators.artists[${selectedArtistTypeIndex}].selectedArtists[${index}].revenueShare`}
                                                    inputProps={{ "data-testid": "title", maxLength: 60 }}
                                                    label={strings.share}
                                                    errorMessage=""
                                                /> :
                                                <Typography>{artist.revenueShare}% Share</Typography>}
                                        </div>
                                    </div>
                                </Grid>
                            )}
                    </Grid>
                </Stack>}
            {tabValue === 1 &&
                <div className={styles["form-container"]}>

                    <Stack direction="column" rowGap={1} sx={{ height: "100%" }}>
                        <Typography className={styles["collaboration-trems"]}>{strings.collaborationTerms}</Typography>
                        <Stack direction="column" rowGap={2} sx={{ width: "100%" }} className={styles["terms-fields-container"]}>
                            {createProjectState.projectDetails.collaborators.artists[selectedArtistTypeIndex]?.projectRequirements.length > 0 &&
                                createProjectState.projectDetails.collaborators.artists[selectedArtistTypeIndex]?.projectRequirements.map((holiday, index) =>
                                    <Stack columnGap={1} sx={{ height: "52px" }}>
                                        <MuiTextField
                                            fullWidth
                                            type="text"
                                            name={`collaborators.artists[${selectedArtistTypeIndex}].projectRequirements[${index}].terms`}
                                            onChange={(e) => handleTermsChange(e, index)}
                                            inputProps={{ "data-testid": "title", maxLength: 60 }}
                                            label={`Term${index + 1}`}
                                            errorMessage=""
                                            value={createProjectState.projectDetails.collaborators.artists[selectedArtistTypeIndex].projectRequirements[index].terms}
                                        />
                                        {/* <DeleteOutlineRoundedIcon className={styles["delete-icon"]} onClick={() => arrayHelpers.remove(index)} /> */}
                                    </Stack>
                                )}
                        </Stack>
                        <MuiButton className={styles["add-more"]} startIcon={<AddIcon />} onClick={() => handleAddAnotherTerm()}>{strings.addTerm}</MuiButton>
                    </Stack>
                </div>
            }
        </Stack>
    )
}

export default ArtistTypeDetails