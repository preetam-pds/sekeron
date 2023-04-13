import React, { Fragment } from "react";
import styles from "./Layout.module.css";
import { Box } from "@mui/material";
import Header from "./header/Header";
import { MobileFooter } from "./footer/MobileFooter";

export const Layout = ({ children }: any) => {
    return (
        <Fragment>
            <Header />
            <div className={styles["main-container"]}>{children}</div>
            <Box sx={{
                display: { xs: 'block', sm: "block", md: 'none', lg: "none" },
            }}>
                <MobileFooter />
            </Box>
        </Fragment>
    );
};