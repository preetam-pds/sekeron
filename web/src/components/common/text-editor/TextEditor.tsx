import { IconButton, Typography } from "@mui/material";
import { CreatePostRedux, CreateProjectRedux, strings } from "@sekeron/domain";
import React from "react";
import ImageAssets from "src/assets";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import CustomColorPicker from "../color-picker/ColorPicker";
import './TextEditor.css'
import html2canvas from 'html2canvas'
import { useDispatch, useSelector } from "react-redux";

const TextEditor = ({
    handleMediaUpload,
    enteredText,
    handleTextChange,
    oldBackgroundColor,
    color,
    handleChange,
    module }: any) => {

    const defaultFonts = [
        "Arial",
        "Comic Sans MS",
        "Courier New",
    ];

    const sortedFontOptions = [
        "Logical",
        "Salesforce Sans",
        ...defaultFonts
    ].sort();

    const fontSizes = [
        8, 10, 14, 18, 24, 36
    ]

    const createPostState = useSelector((state: any) => state.CreatePostRedux)
    const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
        setCreatePostState: (data: any) => dispatch(CreatePostRedux.actions.setCreatePostState(data)),
    }))

    const { setCreateProjectState, setCreatePostState } = actionDispatch(useDispatch())

    const anchorRef = React.useRef<any>(null);
    const [open, setOpen] = React.useState(false);

    const onClickDone = () => {
        let data = ""
        if (enteredText) {
            if (module === "createProject") {
                data = `<div  style="background-color:${createProjectState.textCardBackgroundColor};font-size: 36px; font-family: Arial; color: rgb(212, 244, 250);width:100%;height:auto;min-height:300px;word-break:break-word">${enteredText}</div>`
            } else {
                data = `<div  style="background-color:${createPostState.postDetails.cardBackgroundColor};font-size: 36px; font-family: Arial; color: rgb(212, 244, 250);width:100%;height:auto;min-height:300px;word-break:break-word">${enteredText}</div>`
            }
            console.log("its in done", data);
            handleMediaUpload(data, enteredText)
            // html2canvas(document.querySelector(".sun-editor-editable")).then((canvas) => {
            //     var imgsrc = canvas.toDataURL("image/png");
            // });
        }
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        if (module === "createProject") {
            setCreateProjectState({ key: "previousBackgroundColor", value: createProjectState.textCardBackgroundColor })
        } else {
            const postDetails = {
                ...createPostState.postDetails,
                oldCardBackgroundColor: createPostState.postDetails.cardBackgroundColor
            }
            setCreatePostState({
                key: "postDetails", value: postDetails
            })
        }
        setOpen(false);
    };

    return (
        <div style={{ position: "relative" }} >
            <IconButton
                ref={anchorRef}
                onClick={handleToggle}
                size="small"
                className="colorpicker-icon">
                <img src={ImageAssets.ic_colorpicker} />
            </IconButton>
            <CustomColorPicker
                colorPickerPlacement="top-end"
                handleChange={handleChange}
                backgroundolor={color}
                open={open}
                oldBackgroundColor={oldBackgroundColor}
                handleClose={handleClose}
                anchorRef={anchorRef} />

            <SunEditor
                setContents={enteredText}
                placeholder={"Start typing here......."}
                onChange={(e: any) => handleTextChange(e)}
                setDefaultStyle={`background-color:${color}`}

                setOptions={{
                    buttonList: [
                        ["undo", "redo"],
                        ["fontColor"],
                        ["font"],
                        ["fontSize"],
                        ["align"],
                        ["bold"],
                        ["underline"],
                        ["italic"],
                    ],
                    defaultTag: "p",
                    minHeight: "300px",
                    showPathLabel: false,
                    font: sortedFontOptions,
                    fontSize: fontSizes,
                    maxCharCount: 5000

                }} />
            <Typography className="done" onClick={() => onClickDone()}>{strings.done}</Typography>
        </div>
    );
}
export default TextEditor