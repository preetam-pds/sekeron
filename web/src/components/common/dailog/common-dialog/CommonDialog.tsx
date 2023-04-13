import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { CommonDialogStyle } from './CommonDialog.style';
import ImageAssets from 'src/assets';

export default function CommonDialog(props: any) {

    const { open, children, title, onClose, minheight, maxheight } = props;

    return (
        <CommonDialogStyle
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            minheight={minheight}
            maxheight={maxheight}
        >
            <DialogTitle id="alert-dialog-title">
                <Grid container justifyContent={'space-between'} flexDirection='row' >
                    <Grid item xs={11}>
                        <div className='title-text'>{title}</div>
                    </Grid>
                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "flex-start" }}>
                        <img src={ImageAssets.ic_white_close} alt='close-icon' style={{ cursor: 'pointer' }} onClick={onClose} />
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </CommonDialogStyle>
    );
}