import React from 'react'
import { Button, ButtonProps } from "@mui/material";
import styles from './MuiButton.module.css'

interface StyledMuiButton extends ButtonProps {
    className?: string
}

const MuiStyledButton = (props: StyledMuiButton) => {
    const { children, className } = props;
    return (
        <Button {...props} className={className ? styles[`${className}`] : styles["filled-button"]} size={"small"}>{children}</Button>
    )
};

const MuiButton = (props: StyledMuiButton) => {
    const { children } = props;
    return (
        <Button {...props} size={"small"}>{children}</Button>
    )
};

const GradientButton = ({ buttonText, handleClick }: any) => {
    return (
        <div className={styles["gradient-button"]} onClick={() => handleClick()}>
            <span>{buttonText}</span>
        </div>
    )
}

export { MuiStyledButton, MuiButton, GradientButton };
