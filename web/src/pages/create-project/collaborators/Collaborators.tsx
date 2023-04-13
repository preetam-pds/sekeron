import React, { useState } from 'react'
import { Stack } from '@mui/system'
import MuiAutocomplete from 'src/components/common/dropdown/mui-autocomplete/MuiAutocomplete'
import styles from './Collaborators.module.css'
import { createTheme, Grid, ListItemButton, ThemeProvider, Typography } from '@mui/material'
import { CreateProjectRedux, strings } from '@sekeron/domain'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import routesNames from 'src/routes/RouteNames'
import ArtistTypeDetails from './artist-type-details/ArtistTypeDetails'

const theme = createTheme({
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    backgroundColor: "#0d0d0d",
                    borderRadius: "10px",
                    height: "70px",
                    maxHeight: "70px",
                    padding: "0px 10px !important",
                    "&.Mui-selected": {
                        backgroundColor: "#000",
                        marginTop: 0,
                        borderRadius: "10px",
                        height: "70px",
                        maxHeight: "70px",
                        padding: "0px 10px",
                    }
                }
            }
        }
    }
});

const Collaborators = () => {

    const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
    }))

    const artistsTypeData = [
        { title: "Guitarist", id: 1 },
        { title: "Pianist", id: 2 },
        { title: "Flutist", id: 3 },
        { title: "Musician", id: 4 },
        { title: "Dancer", id: 5 },
        { title: "Writer", id: 6 },
        { title: "Music Composer", id: 7 },
        { title: "Singer", id: 8 },
    ];

    const [selectedArtistTypeId, setSelectedArtistTypeId] = useState(null)
    const [selectedArtistTypeIndex, setSelectedArtistTypeIndex] = useState(null)

    const { setCreateProjectState } = actionDispatch(useDispatch())
    const navigate = useNavigate()

    const handleArtistTypeClick = (item: any, index) => {
        // const artistData = { ...createProjectState.artistData, selectedArtists: [] }
        // setCreateProjectState({ key: "artistData", value: artistData })
        navigate(routesNames.artistDetails, { state: { artistTypeData: item, index: index } })
    }

    const handleArtistTypeClicked = (item, index) => {
        setSelectedArtistTypeId(item.id)
        setSelectedArtistTypeIndex(index)

        const selectedArtistTypeData = createProjectState.projectDetails.collaborators.artists.find((artist: any, i) => artist.id === item.id)
        let artists = []
        selectedArtistTypeData.selectedArtists.forEach((item) => {
            artists.push({
                id: item.id,
                title: item.artistName,
            })
        })
        const artistData = { ...createProjectState.artistData, selectedArtists: [...artists] }
        setCreateProjectState({ key: "artistData", value: artistData })

        // const artistData = { ...createProjectState.artistData, selectedArtists: [] }
        // setCreateProjectState({ key: "artistData", value: artistData })
    }

    const handleArtistsTypeSelection = (values: any) => {
        const artistData = { ...createProjectState.artistData, selectedArtistsType: [...values] }
        setCreateProjectState({ key: "artistData", value: artistData })

        let artists = []

        // this login is to add the new artist--if the artist is already there--just spread / push one object
        const ids = createProjectState.projectDetails.collaborators.artists.map((item) => item.id)
        values.forEach((item) => {
            if (ids.includes(item.id)) {
                const data = createProjectState.projectDetails.collaborators.artists.find((i) => i.id === item.id)
                artists.push({
                    ...data,
                })
            } else {
                artists.push({
                    id: item.id,
                    artistType: item.title,
                    numberOfArtistRequired: 1,
                    selectedArtists: [],
                    projectRequirements: []
                })
            }
        })

        const selectedArtistsIds = values.map((item) => item.id)
        createProjectState.projectDetails.collaborators.artists.forEach((item) => {
            if (!selectedArtistsIds.includes(item.id)) {
                setSelectedArtistTypeId(null)
                setSelectedArtistTypeIndex(null)
            }
        })

        let projectDetails;
        projectDetails = {
            ...createProjectState.projectDetails,
            collaborators: {
                ...createProjectState.projectDetails.collaborators,
                totalNumberOfRequiredArtist: artists.reduce((totalValue, currentValue) => {
                    return totalValue + currentValue.numberOfArtistRequired
                }, 0),
                artists: [...artists.map((artist: any, index) => {
                    return ({
                        ...artist, selectedArtists: artist.selectedArtists.map((data) => ({
                            ...data,
                            revenueShare: createProjectState.projectDetails.basicInfo.revenueShareType === 1 ?
                                Math.round(100 / artists.reduce((totalValue, currentValue) => {
                                    return totalValue + currentValue.numberOfArtistRequired
                                }, 0)) : data.revenueShare
                        }))
                    })
                })],
            }
        }
        setCreateProjectState({ key: "projectDetails", value: projectDetails })
    }

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
                    if (item.id === selectedArtistTypeId) {
                        setSelectedArtistTypeId(null)
                        setSelectedArtistTypeIndex(null)
                    }

                    const artistData = { ...createProjectState.artistData, selectedArtistsType: [...createProjectState.artistData.selectedArtistsType.filter((artist) => artist.id !== item.id)] }
                    setCreateProjectState({ key: "artistData", value: artistData })
                }
            } else {
                updatedMediaContent.push({
                    ...artist, selectedArtists: handleRevenueShare(artist, 2)
                })
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

    const selectedArtistType = (item, index) => {

        return (
            <ThemeProvider theme={theme}>
                <ListItemButton key={index} selected={selectedArtistTypeId === item?.id} sx={{ p: 0 }}
                // onClick={() => handlePostMediaClick(item)} 
                >
                    <Stack direction="row" justifyContent={"space-between"} sx={{ width: "100%" }} alignItems={"center"} columnGap={0}>
                        <Stack direction={"column"} sx={{ width: "30%" }}>
                            <Typography className={selectedArtistTypeIndex === index ? styles["active-artists-type"] : styles["artists-type"]}>{item?.artistType}</Typography>
                            {item?.selectedArtists.length !== 0 ? <Typography className={styles["number-of-invites-added"]}>{item?.selectedArtists.length} invites added</Typography> : null}
                        </Stack>
                        <Stack direction="row" alignItems={"center"} justifyContent="flex-end" columnGap={1}>
                            <Stack direction="row" className={selectedArtistTypeIndex === index ? styles["active-counter-container"] : styles["counter-container"]}>
                                <div onClick={() => handleDecrement(item)}>
                                    <RemoveRoundedIcon />
                                </div>
                                <Typography className={styles["number-of-artist"]}>{item.numberOfArtistRequired}</Typography>
                                <div onClick={() => handleIncrement(item)}>
                                    <AddRoundedIcon />
                                </div>
                            </Stack>
                            <ArrowForwardIosRoundedIcon className={styles["right-arrow-mobile"]} onClick={() => handleArtistTypeClick(item, index)} />
                            <ArrowForwardIosRoundedIcon className={selectedArtistTypeIndex === index ? styles["active-right-arrow-icon"] : styles["right-arrow-icon"]} onClick={() => handleArtistTypeClicked(item, index)} />
                        </Stack>
                    </Stack>
                </ListItemButton>
            </ThemeProvider >
        )
    }

    return (
        <>
            <Grid container className={styles["container"]}>
                <Grid item className={styles["collaborators-container"]}
                    xs={selectedArtistTypeId ? 4 : 6}
                    md={selectedArtistTypeId ? 5 : 10}
                    lg={selectedArtistTypeId ? 5 : 8}
                    xl={selectedArtistTypeId ? 5 : 6}>
                    <Stack direction="column" className={styles["sub-container"]} rowGap={2}>
                        <Typography className={styles["required-artists"]}>{strings.requiredArtist}
                            {createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist > 0 ?
                                <span>({createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist} required)</span> : null}
                        </Typography>
                        <MuiAutocomplete
                            data-testid='autocomplete'
                            handleChange={handleArtistsTypeSelection}
                            dropdownData={artistsTypeData}
                            value={createProjectState.artistData.selectedArtistsType}
                        />
                        <Typography className={styles["disclaimer"]}>{strings.collaboratorDisclaimer}</Typography>
                        <Stack rowGap={2} direction="column" className={styles["artists-container"]}>
                            {createProjectState.projectDetails.collaborators?.artists?.length > 0 && createProjectState.projectDetails?.collaborators?.artists.map((item: any, index: number) => {
                                return (
                                    selectedArtistType(item, index)
                                );
                            })}
                        </Stack>
                    </Stack>
                </Grid>
                {selectedArtistTypeId ?
                    <Grid item xs={6} className={styles["artist-type-details-container"]}>
                        <ArtistTypeDetails selectedArtistTypeIndex={selectedArtistTypeIndex} selectedArtistTypeId={selectedArtistTypeId} />
                    </Grid> : null
                }
            </Grid>

            {/* mobile view */}
            <Stack direction="column" rowGap={1.5} className={styles["mobile-container"]}>
                <Typography className={styles["required-artists"]}>{strings.requiredArtist}
                    {createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist > 0 ?
                        <span>({createProjectState.projectDetails.collaborators.totalNumberOfRequiredArtist} required)</span> : null}
                </Typography>
                <MuiAutocomplete
                    handleChange={handleArtistsTypeSelection}
                    dropdownData={artistsTypeData}
                    value={createProjectState.artistData.selectedArtistsType}
                    backgroundColor={"#151518"}
                />
                <Typography className={styles["disclaimer"]}>{strings.collaboratorDisclaimer}</Typography>
                <Stack rowGap={2} direction="column" className={styles["selected-artist-cards-conatiner"]}>
                    {createProjectState.projectDetails.collaborators?.artists?.length > 0 && createProjectState.projectDetails?.collaborators?.artists.map((item: any, index: number) => {
                        return (
                            selectedArtistType(item, index)
                        );
                    })}
                </Stack>
            </Stack>
        </>

    )
}

export default Collaborators