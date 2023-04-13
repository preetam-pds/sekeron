import { ClickAwayListener, ThemeProvider, Tooltip } from '@mui/material'
import React from 'react'
import { tooltTipTheme } from './MuiTooltip.style';

interface IMuiTooltip {
    handleTooltipClose: any
    open: boolean
    children: any
    title: any,
    placement: any
}

const MuiTooltip = ({ handleTooltipClose, open, children, title, placement }: IMuiTooltip) => {
    return (
        <ThemeProvider theme={tooltTipTheme}>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <Tooltip
                        placement={placement}
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        arrow
                        title={title}
                    >
                        {children}
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </ThemeProvider>
    )
}

export default MuiTooltip