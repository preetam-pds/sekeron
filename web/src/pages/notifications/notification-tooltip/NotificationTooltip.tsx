import { ClickAwayListener, createTheme, ThemeProvider, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export const themeForToolTip = createTheme({
    components: {
        MuiPopper: {
            defaultProps: {
                sx: {
                    minWidth: "450px",
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: 'var(--primary-theme-color)',
                    minWidth: "450px",
                    '&&& .MuiTooltip-arrow ': {
                        fontSize: '30px',
                        color: 'var(--senary-theme-color)',
                    },
                    '&&& .MuiTooltip-arrow:before ': {
                        border: '1px solid var(--duodenary-grey-color)'
                    },
                    border: '1px solid var(--duodenary-grey-color)',
                    display: 'flex',
                    borderRadius: '12px'
                }
            }
        }
    }
})

const NotificationTooltip = ({ children, selectedPath, label, setSelectedPath, title }) => {

    const location = useLocation()

    const [open, setOpen] = useState(selectedPath === 'Notifications' && label === 'Notifications' ? true : false);

    const handleClose = () => {
        setOpen(false)
        if (open === true) {
            setSelectedPath('')
        }
    }

    useEffect(() => {
        if (location.pathname !== '/notifications') {
            setOpen(false)
            setSelectedPath('')
        }
    }, [location])

    return (
        <div>
            <ThemeProvider theme={themeForToolTip}>
                <ClickAwayListener onClickAway={handleClose}>
                    <div>
                        <Tooltip
                            open={open}
                            arrow
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleClose}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title={title}
                            placement={'top-end'}
                        >
                            {children}
                        </Tooltip>
                    </div>
                </ClickAwayListener>
            </ThemeProvider>
        </div>
    )
}

export default NotificationTooltip;