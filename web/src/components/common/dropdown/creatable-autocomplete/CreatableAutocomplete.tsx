import React, { useEffect, useState } from "react";
import { TextField, Box, ThemeProvider, styled, Stack, Typography } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import {
  CreatableAutocompleteWrapper,
  PaperStyles,
} from "./CreatableAutocomplete.style";
import ImageAssets from "../../../../assets";
import { strings } from "@sekeron/domain";

interface IDropDownValues {
  id?: number;
  name?: string;
  label?: any;
}

interface ICreatableAutocompleteProp {
  dropDownValues: IDropDownValues[];
  name: string
  label: any;
  handleRoleChange: any;
  selectedValues: any;
  // formik: any;
  rolesError: string;
  inputProps?: any;
  validateForm: any
}

interface IFilmOptionType {
  name?: string;
  id?: number;
  create: boolean;
  label: any;
}

const Item = styled("div")(({ theme }) => ({
  borderRadius: "0px",
  marginTop: "0px !important",
  padding: theme.spacing(0.5),
  textAlign: 'center',
}));

const filter = createFilterOptions<IFilmOptionType>();

const CreatableAutocomplete = ({
  dropDownValues, label, name, selectedValues, handleRoleChange, rolesError, validateForm, ...props
}: ICreatableAutocompleteProp) => {
  const [options, setOptions] = useState<IDropDownValues[]>([]);

  useEffect(() => {
    setOptions(dropDownValues);
  }, []);

  const handleChange = (event: any, newValue: any, reason: any, details: any) => {
    let valueList: any = [...selectedValues];
    if (details.option.create && reason !== "removeOption") {
      valueList.push({
        id: undefined,
        name: details.option.name,
        create: details.option.create,
      });
      handleRoleChange(valueList)
    } else {
      handleRoleChange(newValue)
    }
  }

  return (
    <CreatableAutocompleteWrapper value={selectedValues}>
      <ThemeProvider theme={PaperStyles}>
        <Autocomplete
          multiple
          disableClearable
          value={selectedValues}
          {...props}
          id="tags-Create"
          freeSolo
          onBlur={(e) => validateForm(e)}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          getOptionDisabled={(options) =>
            (selectedValues.length >= 6 ? true : false)
          }
          options={options}
          onChange={(event: any, newValue: any, reason: any, details: any) => {
            handleChange(event, newValue, reason, details)
          }}
          filterSelectedOptions
          filterOptions={(options: any, params: any) => {
            const filtered = filter(options, params);
            const inputValue = params.inputValue;
            const isExisting = options.some(
              (option: any) => inputValue === option.name
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                name: inputValue,
                label: <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  textAlign={"center"}
                  spacing={0.5}
                >
                  <Item><img alt="add" src={ImageAssets.ic_add} /></Item>
                  <Item className="create-custom">{strings.createCustomSkill}</Item>
                </Stack>,
                create: true,
              });
            }
            return filtered;
          }}
          getOptionLabel={(option: any) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.label) {
              return option.name;
            }
            return option.name;
          }}
          renderOption={(props: any, option: any) => (
            <Box
              component="li"
              // sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {/* {!option.create && (
                <img
                  loading="lazy"
                  width="20"
                  src={`https://picsum.photos/200/300.jpg`}
                  alt=""
                />
              )} */}
              <li>{option.create ? option.label : option.name}</li>
            </Box>
          )}
          renderInput={(params) => <TextField  {...params} label={label} />}
        />
        {rolesError && selectedValues.length >= 6 ? (
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            spacing={0.5}
            sx={{ background: "none", position: "absolute" }}
          >
            <Item><img alt="Error info" src={ImageAssets.ic_error_info} /></Item>
            <Item>
              <Typography className="input-error">{rolesError}</Typography>
            </Item>
          </Stack>
        ) : null}
      </ThemeProvider>
    </CreatableAutocompleteWrapper>
  );
}

export default CreatableAutocomplete