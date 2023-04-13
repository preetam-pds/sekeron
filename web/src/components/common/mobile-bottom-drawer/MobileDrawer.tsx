import * as React from 'react';
import { Global } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { Drawer, styled } from '@mui/material';

const drawerBleeding = 56;

interface Props {
    window?: () => Window;
    toggleDrawer: any;
    open: boolean;
    children: React.ReactNode
    drawerContent: React.ReactNode
}

const DrawerWrapper = styled('div') <any>`
    background-color:transparent;
`

const DrawerStyles = styled(Drawer) <any>`
    &&& .MuiDrawer-paperAnchorBottom {
        background-color: var(--primary-theme-color);
        width: 98%;
        margin: auto;
        border-radius: 10px 10px 0px 0px;
    }
    display: none;
    @media screen and (max-width:839px) {
        display: block;
    }
`

const MobileDrawer = (props: Props) => {

    const { toggleDrawer, open, children, drawerContent } = props;
    return (
        <DrawerWrapper>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(95% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            {children}
            <DrawerStyles
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                // onOpen={toggleDrawer(true)}
                // swipeAreaWidth={drawerBleeding}
                // disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {drawerContent}
            </DrawerStyles>
        </DrawerWrapper>
    );
}

export default MobileDrawer;