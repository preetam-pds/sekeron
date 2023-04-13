import styled from "@emotion/styled";

export const AccordianStyledWrapper = styled("div") <any>`
margin-bottom: 20px;

.MuiPaper-root{
    margin-bottom: 15px;
    background: none;
    border: 1px solid var(--tertiary-grey-color);
    border-radius: 12px;
}   

.MuiSvgIcon-root{
    fill: var(--octonary-grey-color);
    font-size: 40px;
}

.required-artists-container{
    width: 50px;
    height: 30px;
    border-radius: 10px;
    background-color: var(--tertiary-theme-color);
    display: flex;
    align-items: center;
    justify-content: center;
}

.number-of-required-artist{
    color: var(--nonary-grey-color);
    font-weight: bold;
}

.required-artist{
    color: var(--octonary-grey-color);
    font-size: 1.6rem;
}

.artist-type{
    color: var(--quaternary-blue-color);
    font-size: 2rem;
    font-weight: 500;
}

.point{
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: var(--primary-success-color);
}

.terms{
    color: var(--octonary-grey-color);
    font-size: 1.5rem;
    font-weight: 300;
}

.terms-header{
    color: var(--quaternary-grey-color);
    font-size: 1.8rem;
    font-weight: bold;
}

.line-break{
    border: 1px solid var(--tertiary-lite-grey-color);
}

@media only screen and (max-width:840px){
.artist-type{
    font-size: 1.6rem;
    width: 38%;
}

.required-artist{
    font-size: 1.3rem;
}
.MuiSvgIcon-root{
    font-size: 30px;
}
}

`