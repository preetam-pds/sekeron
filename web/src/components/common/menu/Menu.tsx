import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Menu, styled } from '@mui/material';

const MuiMenu = (props: any) => {

    const { anchorEl, open, handleClose, children, selectedmenuoption } = props;

    interface IMenuStyles {
        selectedmenuoption: string
    }

    const MenuStyles = styled(Menu) <IMenuStyles>`
        margin: 20px;
        width: 100%;
        height: auto;

        &&& .MuiPaper-root{
            background-color: ${({ selectedmenuoption }: any) => selectedmenuoption == 'dark' ? 'var(--tertiary-lite-grey-color)' : 'var(--white-color)'};
            border-radius: 12px;
            display:flex;
            justify-content: center;
            align-items: right;
            box-shadow: none;
            min-width: 150px;
        }
        &&& .MuiMenuItem-root {
            color: var(--nonary-grey-colors);
            min-width: 120px;
        }

        &&& .border-style{
            position: relative;
            width: 90%;
            border-bottom: solid 0.6px #2f3238;
            left: 3%;
            right: 3%;
            cursor: pointer;
        }

        &&& .menu-items{
            font-family: 'Comfortaa-Light';
            color: ${({ selectedmenuoption }: any) => selectedmenuoption == 'dark' ? 'var(--nonary-grey-color)' : 'var(--tertiary-lite-grey-color)'};
            font-size: 1.6rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
        }

        &&& .profile-name{
            font-family:'Comfortaa-Bold';
            color: var(--nonary-grey-color);
            font-size: 1.6rem;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
        }
    `

    return (
        <MenuStyles
            id="menu-button"
            MenuListProps={{
                'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            selectedmenuoption={selectedmenuoption}       >
            {children}
        </MenuStyles >
    );
}

export default MuiMenu