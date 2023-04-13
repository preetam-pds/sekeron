import { Grid, IconButton, InputAdornment, ListItemIcon, MenuItem, MenuList, Stack, styled, Typography } from '@mui/material';
import { strings } from '@sekeron/domain';
import React from 'react'
import ImageAssets from 'src/assets';
import { MuiTextField } from '../textfield/MuiTextField';
import styles from '../../../pages/user-management/create-user/create-user/CreateUser.module.css'

const PhoneNumber = (props: any) => {

    const { toggleDrawer, formik, countryCode, isDropDownMenuOpen, CountryCode, value, handleCountryCodeSelection, errorMessage, validateForm } = props

    const Wrapper = styled("div") <any>`
    .error-message-container{
        position: absolute;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 376px) {
        .error-message-container{
        position: relative !important;
      }
    }
    `

    const Item = styled("div") <any>`
    margin-top: 0px !important;
    padding:  ${({ theme }) => theme.spacing(0.5)};
    text-align : 'center';
    `

    return (
        <div>
            <MuiTextField
                fullWidth
                type="tel"
                value={value}
                onChange={(e) => props.onChange(e)}
                onBlur={(e) => validateForm(e)}
                name="phoneNumber"
                errorMessage={errorMessage}
                label={strings.enterPhoneNumber}
                maxLength={10}
                InputProps={{
                    startAdornment:
                        <>
                            <InputAdornment
                                position="start"
                                style={{ cursor: "pointer", zIndex: "1301" }}
                            >
                                <Typography
                                    component={"span"}
                                    onClick={() => toggleDrawer()}
                                    variant={"h2"}
                                    display="flex"
                                    alignItems={"center"}
                                    sx={{
                                        color: !props.value && errorMessage !== "" ? "#ff7e98" : "white",
                                        zIndex: "1301"
                                    }}
                                >
                                    {countryCode ? countryCode : "+91"}
                                    <IconButton edge="end">
                                        <img
                                            src={isDropDownMenuOpen ? ImageAssets.ic_dropup : ImageAssets.ic_dropdown}
                                            alt='' />
                                    </IconButton>
                                    <IconButton edge="end">
                                        <img src={ImageAssets.ic_divider} alt='' />
                                    </IconButton>
                                </Typography>
                            </InputAdornment>
                        </>
                }}
            />

            {isDropDownMenuOpen &&
                <div className={styles['phone-number-menu']}>
                    {CountryCode?.map((item, index) => {
                        return (
                            <MenuList key={index} className='' onClick={(e) => handleCountryCodeSelection(item.code)} style={{ paddingTop: index < 1 ? "30px" : "0px" }}>
                                <MenuItem >
                                    <Grid container>
                                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={styles["card-content"]}>
                                            <img className={styles["flags"]} src={ImageAssets.ic_indian_flag} alt="" />
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className={styles["card-content-for-code"]}>
                                            {item.code}
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={styles["card-content-for-country-name"]}>
                                            {item.CountryName}
                                        </Grid>
                                    </Grid>
                                </MenuItem>
                            </MenuList>
                        )
                    })}
                </div>
            }

            <Wrapper>
                {formik?.touched?.phoneNumber?.number && formik?.errors?.phoneNumber && typeof formik?.errors?.phoneNumber !== "object" ? (
                    <Stack
                        data-testid="error-message"
                        className={styles["error-message-container"]}
                        flexDirection={"row"}
                        alignItems={"center"}
                        spacing={0.5}
                        sx={{ background: "none" }}
                    >
                        <Item ><img alt="error" src={ImageAssets.ic_error_info} /></Item>
                        <Item >
                            <Typography variant="h2" className={styles["input-error"]}>{formik?.errors?.phoneNumber}</Typography>
                        </Item>
                    </Stack>
                ) : null}
            </Wrapper>
        </div >
    )
}

export default PhoneNumber