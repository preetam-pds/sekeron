import { Slider } from '@mui/material'
import React from 'react'

interface IMuiSlider {
    trackProgress: number;
    duration: any;
    handleSliderChange: (event: Event) => void;
}

const MuiSlider = ({ trackProgress, duration, handleSliderChange }: IMuiSlider) => {

    return (
        <Slider
            size="small"
            value={trackProgress}
            min={0}
            step={0.5}
            max={duration}
            onChange={(e: any) => handleSliderChange(e.target.value)}
            sx={{
                color: "secondary.main",
                height: 2,
                "& .MuiSlider-thumb": {
                    width: 11,
                    height: 11,
                    boxShadow: "none",
                    border: `0.8px solid white`,
                    "&.Mui-active": {
                        width: 10,
                        height: 10,
                    },
                },
                "& .MuiSlider-rail": {
                    opacity: 0.5,
                    height: "2px",
                    color: "#959595",
                },
            }}
        />
    )
}

export default MuiSlider