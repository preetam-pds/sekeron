import { BasicDropDownWrapper, PaperStyles } from './BasicDropDown.style';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface IDropDownProps {
    dropdowndata: Array<any>
    value: string
    handlechange: any
}

const BasicDropDown = (dropDownProps: IDropDownProps) => {

    const { value, dropdowndata, handlechange } = dropDownProps;

    return (
        <BasicDropDownWrapper>
            <ThemeProvider theme={PaperStyles}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Age"
                        onChange={handlechange}
                        IconComponent={KeyboardArrowDownIcon}
                        displayEmpty
                        size='small'
                    >
                        {dropdowndata?.map((menuItem: any, menuIndex: number) => {
                            return (
                                <MenuItem key={menuIndex} value={menuItem.value}>{menuItem.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </ThemeProvider >
        </BasicDropDownWrapper>
    )
}

export default BasicDropDown