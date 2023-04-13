import React from 'react'
import { Stack, Typography } from '@mui/material'
import { strings } from '@sekeron/domain'
import CreatableAutocomplete from '../../../../components/common/dropdown/creatable-autocomplete/CreatableAutocomplete'
import { MuiTextField } from '../../../../components/common/textfield/MuiTextField'
import styles from './CreateUser.module.css'
import { useSelector } from 'react-redux'

interface IPrifileDetails {
    role: any
    handleRoleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rolesError: string;
    validateForm: any;
    handleInputChange: any;
}

const ProfileDetails = (
    {
        handleRoleChange,
        rolesError,
        validateForm,
        handleInputChange }: IPrifileDetails) => {

    const loginState = useSelector((state: any) => state.Login)

    const data: any = [
        {
            id: 1,
            name: "Bass guitarist",
        },
        {
            id: 2,
            name: "Singer",
        },
        {
            id: 3,
            name: "Actor",
        },
    ];

    return (
        <Stack direction={"column"} textAlign={"center"} rowGap={3} style={{ width: "90%", margin: "20px auto 0px auto" }}>
            <Typography variant="h2" className={styles["user-details"]}>{strings.letsPersonalizeYourProfile}</Typography>
            <MuiTextField
                fullWidth
                type="text"
                name="userName"
                value={loginState.userDetails.userName}
                label={strings.enterUserName}
                inputProps={{ "data-testid": "userName" }}
                onChange={(e) => handleInputChange(e)}
                onBlur={(e) => validateForm(e)}
                errorMessage={loginState.userDetailsErrors.userName}
            />
            <CreatableAutocomplete
                label={strings.selectRole}
                name="roles"
                dropDownValues={data}
                selectedValues={loginState.userDetails.roles}
                validateForm={validateForm}
                handleRoleChange={handleRoleChange}
                rolesError={rolesError}
                inputProps={{ "data-testid": "roles" }}
            />
        </Stack>
    )
}

export default ProfileDetails 