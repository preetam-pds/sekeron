import { Stack } from '@mui/system';
import { dashboardRedux, strings } from '@sekeron/domain';
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactSketchCanvas } from "react-sketch-canvas";
import ImageAssets from 'src/assets';
import CustomColorPicker from 'src/components/common/color-picker/ColorPicker';
import styles from './SketchBoard.module.css'
import { Divider, IconButton, Menu } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from '@emotion/styled';

export const StyledMenu = styled(Menu)({
    "& > .MuiPaper-root": {
        backgroundColor: "#20252f",
        borderRadius: "10px",
        padding: "15px"
    },
    '& .MuiDivider-root': {
        borderColor: "#2f3238",
        borderBottomWidth: "2px"
    }
});

export const MenuText = styled("p")({
    fontFamily: "Comfortaa-Light",
    color: "#a8aebc",
    textAlign: "right",
    fontSize: "1.4rem",
    margin: "1em 1em 1em 3em",
    cursor: "pointer",
});

const SketchBoard = () => {
    const dashboardState = useSelector((state: any) => state.dashboardRedux)
    const actionDispatch = ((dispatch: any) => ({
        setDashboardState: (data: any) => dispatch(dashboardRedux.actions.setDashboardState(data)),
    }))

    const canvas = useRef(null);
    const colorPickerRef = useRef<any>(null);
    const { setDashboardState } = actionDispatch(useDispatch())

    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isLightMode, setIsLightMode] = useState(true)
    const [image, setImage] = useState("")
    const isMenuOpen = Boolean(menuAnchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => setMenuAnchorEl(event.currentTarget);

    const handleMenuClose = () => setMenuAnchorEl(null)

    const handleColorPickerClose = (event: Event | React.SyntheticEvent) => {
        if (
            colorPickerRef.current &&
            colorPickerRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setIsColorPickerOpen(false);
        setDashboardState({
            key: "oldsketchColor", value: dashboardState.sketchColor
        })
    };

    const handleColorPickerToggle = () => setIsColorPickerOpen((prevOpen) => !prevOpen);

    const handlePostsBackgroundChange = (e: any) => setDashboardState({ key: "sketchColor", value: e })

    const handleClearCanvas = () => {
        canvas.current.resetCanvas()
        handleMenuClose()
    }

    const handleGetImage = () => {
        canvas.current.exportImage("png").then((data) => {
            console.log(data);
            setImage(data)
        })
            .catch((e) => {
                console.log(e);
            });
        handleMenuClose()
    }

    const handleSwitchTheme = () => {
        setIsLightMode(state => !state)
        handleMenuClose()
    }

    return (
        <div className={styles["sketch-board-container"]}>
            <Stack className={styles["sketch-board-header"]}>
                <Stack columnGap={3}>
                    <img src={ImageAssets.ic_pen} className={styles["pen-icon"]} onClick={() => {
                        canvas.current?.eraseMode(false);
                    }} />
                    <div ref={colorPickerRef} onClick={handleColorPickerToggle} className={styles["color-wheel"]} style={{ backgroundColor: dashboardState.sketchColor }}></div>
                    <CustomColorPicker
                        anchorRef={colorPickerRef}
                        colorPickerPlacement="bottom-start"
                        handleChange={handlePostsBackgroundChange}
                        backgroundolor={dashboardState.sketchColor}
                        open={isColorPickerOpen}
                        oldBackgroundColor={dashboardState.oldsketchColor}
                        handleClose={handleColorPickerClose}
                    />
                    <img src={ImageAssets.ic_erase} className={styles["pen-icon"]} onClick={() => {
                        canvas.current.eraseMode(true);
                    }} />
                </Stack>
                <IconButton onClick={handleMenuOpen}>
                    <MoreVertIcon
                        fontSize="large"
                        sx={{
                            color: "#576078",
                            fontSize: "30px",
                            transform: isMenuOpen ? "rotate(90deg)" : "",
                            transition: "transform 0.3s ease 0s",
                        }}
                    />
                </IconButton>
                <StyledMenu
                    open={isMenuOpen}
                    anchorEl={menuAnchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <MenuText className={styles["profile-menu"]} onClick={handleClearCanvas}>{strings.clearPage}</MenuText>
                    <Divider />
                    <MenuText>{strings.deletePage}</MenuText>
                    <Divider />
                    <MenuText onClick={handleGetImage}>{strings.sendImageToGroup}</MenuText>
                    <Divider />
                    <MenuText onClick={handleSwitchTheme}>{isLightMode ? strings.switchToDarkMode : strings.switchToLightMode}</MenuText>
                    <Divider />
                    <MenuText>{strings.collaboratorSettings}</MenuText>
                </StyledMenu>
            </Stack>
            <ReactSketchCanvas
                style={{
                    border: "0px"
                }}
                ref={canvas}
                strokeWidth={2}
                strokeColor={dashboardState.sketchColor}
                canvasColor={isLightMode ? "#dbe5ff" : "#101113"}
            />
            <Stack className={isLightMode ? styles["controls-container-light-mode"] : styles["controls-container-dark-mode"]}>
                <Stack columnGap={3}>
                    <img src={ImageAssets.ic_undo} className={styles["pen-icon"]} onClick={() => {
                        canvas.current?.undo();
                    }} />
                    <img src={ImageAssets.ic_redo} className={styles["pen-icon"]} onClick={() => {
                        canvas.current?.redo();
                    }} />
                </Stack>
                <img src={ImageAssets.ic_full_screen} className={styles["full-screen-icon"]} />
            </Stack>

            {/* <img src={image} style={{ marginTop: "20px" }} /> */}
        </div>
    )
}

export default SketchBoard