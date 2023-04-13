import styled from "@emotion/styled";

interface IInterestBarStyle {
    value: number
}

export const InterestBarStyle = styled("div") < IInterestBarStyle>`
object-fit: contain;
width: 90%;

& .MuiSlider-track{
    background-image: ${({ value }) => value > 75 ? 'linear-gradient(to left, #40c5a3, rgba(197, 64, 73, 0) 50%)' : ''};
}

& .MuiSlider-rail {
    background-image: ${({ value }) => value < 25 ? 'linear-gradient(to right, #ff5e6e 25%, rgba(197, 64, 73,0)60%)' : ''};
}

& .MuiSlider-thumb {
    color: ${({ value }) => value < 50 ? '#ea4566' : value > 50 ? 'var(--primary-success-color)' : '#474c57'};
    border: 1px solid black;
}

& .MuiSlider-root {
    color: #1c1d1e;
}
    
`