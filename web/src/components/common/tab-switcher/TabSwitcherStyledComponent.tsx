import { styled, Tabs } from "@mui/material";

interface ITabsWrapper {

}

export const TabsWrapperFiled = styled(Tabs) <ITabsWrapper>`

width: 100%;

&&& .MuiTabs-flexContainer  {
    
    justify-content: space-between;
}

&&& .MuiButtonBase-root  {
    border-top: none;
    font-family: 'Comfortaa-light';
    font-size: 1.4rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--white-color);
    border-radius: 17.5px;
    text-transform: capitalize;
}

&&& .Mui-selected  {
    border-top: none;
    font-family: 'Comfortaa-Bold';
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: var(--primary-theme-color);
    border-radius: 17.5px;
    background-color: var(--white-color);
}

&&& .MuiTabs-indicator {
    width: 0px !important;
    left: 0px;
}

@media screen and (max-width:760px) {
    &&& .MuiButtonBase-root ,.Mui-selected {
        font-size: 1rem;
        min-height: 20px;
    }
}

@media screen and (max-width:440px){
    &&& .MuiTabs-scroller{
        width: 100%;
        overflow: scroll !important;
    } 
    &&& .MuiButtonBase-root ,.Mui-selected {
        min-height: 20px;
    }
}
    
`

export const TabsWrapperGradient = styled(Tabs) <any>`

width: 100% !important;
&&& .MuiTabs-flexContainer  {
    justify-content: space-between !important;
    width: 100%;
}

&&& .MuiButtonBase-root  {
    color: #576078;
    font-family: 'Comfoorta-Bold';
    text-transform: capitalize;
    font-family: 'Comfortaa-Bold';
    font-size: 2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
}

&&& .Mui-selected  {
    color: var(--octonary-blue-color);
    font-family: 'Comfoorta-Bold';
    text-transform: capitalize;
    font-family: 'Comfortaa-Bold';
    font-size: 2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
}

&&& .MuiTabs-indicator {
    width: 100% !important;
    left: 0px !important;
}

`
export const TabsWrapperOutlined = styled(Tabs) <any>`

width: 100%;

&&& .MuiTabs-flexContainer  {
    
    justify-content: space-between;
}

&&& .MuiButtonBase-root  {
    font-family: 'Comfortaa-light';
    font-size: 1.4rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #6c707d;
    border-radius: 24px;
    text-transform: capitalize;
    border: solid 1.6px #25272c;
    width: 160px;
}

&&& .Mui-selected  {
    font-family: 'Comfortaa-Bold';
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color:#ced4e5;
    border-radius: 24px;
    border: solid 1.6px #576078;
}

&&& .MuiTabs-indicator {
    width: 0px !important;
    left: 0px;
}

@media screen and (max-width:840px) {
    &&& .MuiButtonBase-root ,.Mui-selected {
        font-size: 1.4rem;
        min-height: 30px;
    }

    &&& .MuiButtonBase-root  {
    width: 120px;
}
}

@media screen and (max-width:440px){
    &&& .MuiTabs-scroller{
        width: 100%;
        overflow: scroll !important;
    } 
    &&& .MuiButtonBase-root ,.Mui-selected {
        min-height: 20px;
    }
}
`