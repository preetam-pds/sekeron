import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ maxValue, value }: any) => {
    return (
        <div style={{ width: "120px", height: "120px" }}> 
        {/* 130px web view */}
            <CircularProgressbar
                value={value}
                text={`${value}/${maxValue}`}
                minValue={0}
                maxValue={maxValue}
                styles={buildStyles({
                    pathColor: "#5c88ff",
                    trailColor: "#151518",
                    textColor: "#a8aebc",
                    textSize: "1.4rem"
                })}
            />
        </div>
    )
}

export default CircularProgress