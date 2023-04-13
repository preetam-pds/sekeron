import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useState, useRef } from "react";
import styles from './DragAndDropFile.module.css'
import { strings } from "@sekeron/domain";
import { MuiStyledButton } from "../button/MuiButton";
import { Box } from "@mui/system";

const DragDropFile = ({ name, handleMediaUpload, accept, mediaType, mediaTypeIcon }: any) => {

    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        let mediaContent = []
        const files = [...e.dataTransfer.files]
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            files.forEach((item) => {
                mediaContent.push({
                    mediaType: mediaType,
                    publicUrl: URL.createObjectURL(item),
                    isPlaying: false,
                    isMute: false,
                    isRecorded: false
                })
            })
            handleMediaUpload(mediaContent)
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        let mediaContent = []
        const files = [...e.target.files]
        if (e.target.files && e.target.files[0]) {
            files.forEach((item) => {
                mediaContent.push({
                    mediaType: mediaType,
                    publicUrl: URL.createObjectURL(item),
                    isPlaying: false,
                    isMute: false,
                    isRecorded: false
                })
            })
            handleMediaUpload(mediaContent)
        }
    };

    const onButtonClick = () => {
        if (inputRef.current != null) {
            inputRef.current.click();
        }
    };

    return (
        <>
            <form className={styles["file-upload-form"]} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input
                    multiple={true}
                    ref={inputRef}
                    type="file"
                    className={styles["file-upload-input"]}
                    accept={accept}
                    id="input-file-upload"
                    onChange={handleChange}
                    value={""}
                    name={name}
                    data-testid="inputFile"
                />
                <label
                    className={styles["label-file-upload"]}
                    htmlFor="input-file-upload" >
                    <Grid container
                        className={styles["drag-and-drop-container"]}>
                        <Grid item xs={12}>
                            <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <img src={mediaTypeIcon} alt="" />
                                <Typography className={styles["drag-and-drop-text"]}>{strings.dragAndDrop}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={10}>
                            <MuiStyledButton onClick={() => onButtonClick()}>{strings.uploadFile}</MuiStyledButton>
                        </Grid>
                    </Grid>
                </label>
                {dragActive && <div className={styles["drag-file-element"]} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
            </form>
            <Box sx={{ width: { xs: "50%", sm: "30%" }, height: "80%", maxHeight: "80%", display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                <MuiStyledButton onClick={() => onButtonClick()}>{strings.uploadFile}</MuiStyledButton>
            </Box>
        </>
    );
};
export default DragDropFile