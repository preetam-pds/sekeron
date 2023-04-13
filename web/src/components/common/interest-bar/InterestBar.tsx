import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { InterestBarStyle } from './InterestBar.style';

interface IInterestBarProps {
    value: number
    handleinterestbar: (value: any) => void
}

const InterestBar = (interestBarProps: IInterestBarProps) => {

    const { value, handleinterestbar } = interestBarProps;
    return (
        <InterestBarStyle value={value}>
            <Box >
                <Slider
                    size="medium"
                    value={value ? value : 0}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleinterestbar}
                    {...interestBarProps}
                />
            </Box>
        </InterestBarStyle>
    )
}

export default InterestBar;