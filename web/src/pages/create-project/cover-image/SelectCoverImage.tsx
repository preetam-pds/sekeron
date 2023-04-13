import { Backdrop, Box, createTheme, Fade, ListItemButton, Modal, ThemeProvider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useRef } from 'react'
import ImageAssets from 'src/assets';
import { StyledModal } from './SelectCoverImage.style';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { MuiButton } from 'src/components/common/button/MuiButton';
import { constants, CreateProjectRedux, MediaTypeEum, strings } from '@sekeron/domain';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useSelector, useDispatch } from 'react-redux';
import routesNames from 'src/routes/RouteNames';
import { useNavigate } from 'react-router-dom';

const styles = createTheme({
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        border: `3px solid #7aeacd`
                    }
                }
            }
        }
    }
});

const SelectCoverImage = ({ open, handleClose }: any) => {

    const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
    }))

    const inputRef = useRef<HTMLInputElement>(null);
    const { setCreateProjectState } = actionDispatch(useDispatch())
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setCreateProjectState({
                key: "projectDetails", value: {
                    ...createProjectState.projectDetails,
                    coverImage: URL.createObjectURL(e.target.files[0])
                }
            })
        }
    };

    const onButtonClick = () => {
        if (inputRef.current != null) {
            inputRef.current.click();
        }
    };

    const handleListItemClicked = (item) => {
        setCreateProjectState({
            key: "projectDetails", value: {
                ...createProjectState.projectDetails,
                coverImage: item.publicUrl
            }
        })
    }

    const handleDefaultImageSelection = () => {
        setCreateProjectState({
            key: "projectDetails", value: {
                ...createProjectState.projectDetails,
                coverImage: "https://picsum.photos/seed/picsum/200/300"
            }
        })
    }

    return (
        <>
            <ThemeProvider theme={styles}>
                <input
                    ref={inputRef}
                    type="file"
                    className="file-upload-input"
                    accept={constants.imageType}
                    id="input-file-upload"
                    onChange={handleChange}
                    value={""}
                    name={"image"}
                />
                <StyledModal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Box>
                        <Stack className="modal-container" direction={"column"}>
                            <ClearRoundedIcon className="close-icon" onClick={() => handleClose()} />
                            <Stack direction={"column"} rowGap={3}>
                                <Typography className="choose-cover-image">{strings.chooseCoverImage}</Typography>
                                <img src={createProjectState.projectDetails.coverImage} className="selected-image" />
                                <Stack direction="row" className="media-container" columnGap={2}>
                                    <div className="upload-media" onClick={() => onButtonClick()}><AddRoundedIcon className="add-icon" /></div>
                                    <div className={createProjectState.projectDetails.coverImage === "https://picsum.photos/seed/picsum/200/300" ? "selected-default-image" : "menu-items"}>
                                        <img alt="" className="image" src={"https://picsum.photos/seed/picsum/200/300"} onClick={() => handleDefaultImageSelection()} />
                                    </div>
                                    <Stack direction="row" className="selected-media-container" columnGap={2}>
                                        {createProjectState.projectDetails.mediaContent.map((item, index) =>
                                            item.mediaType === MediaTypeEum.image ?
                                                <ListItemButton className="menu-items" selected={item.publicUrl === createProjectState.projectDetails.coverImage} key={index} onClick={() => handleListItemClicked(item)}>
                                                    <img alt="" src={item.publicUrl} className="image" />
                                                </ListItemButton> : null
                                        )}
                                    </Stack>
                                </Stack>
                            </Stack>
                            <MuiButton className='preview-project' onClick={() => navigate(routesNames.previewProject)}>{strings.previewProjectNow}</MuiButton>
                        </Stack>
                    </Box>
                </StyledModal>
            </ThemeProvider>
        </>
    )
}

export default SelectCoverImage