import React, { useEffect, useState } from "react";
import { Checkbox, ThemeProvider, TextField, Autocomplete, InputAdornment } from "@mui/material";
import { CreatableAutocompleteWrapper, PaperStyles } from "./MuiAutocomplete.style";
import ImageAssets from "src/assets";

const icon = <img src={ImageAssets.ic_add_artist} />
const checkedIcon = <img src={ImageAssets.ic_remove_artist} />

const MuiAutocomplete = ({ value, handleChange, dropdownData, backgroundColor, borderRadius, maxSelectable, inputProps }: any) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState<any[]>([]);

    useEffect(() => {
        setOptions(dropdownData);
    }, []);

    return (
        <CreatableAutocompleteWrapper backgroundColor={backgroundColor} borderRadius={borderRadius}>
            <ThemeProvider theme={PaperStyles}>
                <Autocomplete
                    multiple
                    disableClearable
                    value={value}
                    id="checkboxes-tags-demo"
                    options={options}
                    disableCloseOnSelect
                    open={open}
                    data-testid='autocomplete'
                    onOpen={() => {
                        if (inputValue) {
                            setOpen(true);
                        }
                    }}
                    onClose={() => setOpen(false)}
                    onChange={(event, value) => {
                        handleChange(value)
                    }
                    }
                    inputValue={inputValue}
                    onInputChange={(e, value, reason) => {
                        setInputValue(value);

                        if (!value) {
                            setOpen(false);
                        }
                    }}
                    getOptionDisabled={(options) =>
                        maxSelectable ?
                            (value.length >= maxSelectable ? true : false)
                            : false}
                    getOptionLabel={(option: any) => option.title}
                    renderOption={(props, option, { selected }) => {
                        return (
                            <li {...props} style={{ display: "flex", justifyContent: "space-between" }}>
                                {option.title}
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    checked={selected}
                                />
                            </li>
                        )
                    }
                    }
                    renderInput={(params) => (
                        <TextField
                            size="medium"
                            InputProps={{
                                startAdornment:
                                    <InputAdornment
                                        position="start"

                                    >
                                        <img src={ImageAssets.ic_search_header} />
                                    </InputAdornment>
                            }}
                            {...params} placeholder="Search" />
                    )}
                />
            </ThemeProvider>
        </CreatableAutocompleteWrapper>
    );
}
export default MuiAutocomplete
