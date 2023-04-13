import { Box, Stack } from '@mui/material'
import { strings } from '@sekeron/domain';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageAssets from 'src/assets';
import routesNames from 'src/routes/RouteNames';
import styles from './UploadTooltip.module.css'

const UploadTooltip = ({ setSelectedPath, isMobile }: any) => {

    const navigate = useNavigate();

    return (
        <div>
            <Box
                sx={isMobile ? {
                    position: "relative",
                    mt: "20px",
                    "&::before": {
                        backgroundColor: "var(--senary-theme-color)",
                        content: '""',
                        display: "block",
                        position: "absolute",
                        width: 20,
                        height: 20,
                        bottom: -116,
                        transform: "rotate(45deg)",
                        left: "calc(50% - 6px)",
                    }
                } : {
                    position: "relative",
                    mt: "20px",
                    "&::before": {
                        backgroundColor: "var(--senary-theme-color)",
                        content: '""',
                        display: "block",
                        position: "absolute",
                        width: 20,
                        height: 20,
                        top: -6,
                        transform: "rotate(45deg)",
                        left: "calc(50% - 6px)",
                    }
                }
                }
            />
            <Stack flexDirection={'column'} sx={{ p: 2, backgroundColor: "var(--senary-theme-color)", borderRadius: '12px' }}>
                <div className={styles['new-container']} onClick={() => {
                    navigate(routesNames.createPost)
                    setSelectedPath('')
                }} >
                    <span className={styles['new-post']} >{strings.newPost}</span>
                    <img className={styles['new-icons']} src={ImageAssets.ic_new_post} alt='new-post' />
                </div>
                <div className={styles['new-container']} onClick={() => {
                    navigate(routesNames.termsAndConditions)
                    setSelectedPath('')
                }}>
                    <span className={styles['new-project']} >{strings.newProject}</span>
                    <img className={styles['new-icons']} src={ImageAssets.ic_new_project} alt='new-post' />
                </div>
            </Stack>
        </div>
    )
}

export default UploadTooltip