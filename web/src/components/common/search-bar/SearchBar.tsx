import { TextField, InputAdornment, Typography, Stack, Autocomplete, Checkbox } from '@mui/material'
import React from 'react'
import ImageAssets from 'src/assets'
import { AutoCompleteStyles, Search, SearchIconWrapper, StyledInputBase } from './SearchBar.style'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export const SearchBar = (props: any) => {
    return (
        <Search>
            <SearchIconWrapper>
                <img src={ImageAssets.ic_search_header} />
            </SearchIconWrapper>
            <TextField
                {...props}
                placeholder="Search"
                InputProps={{
                    type: 'search',
                }} />
        </Search>
    )
}

export const SearchBarWithAutoComplete = (props: any) => {
    return (
        <AutoCompleteStyles>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            startAdornment: <SearchIcon sx={{ color: '#3c3f47', fontSize: "36px" }} />,
                        }}
                    />
                )}
            />
        </AutoCompleteStyles>
    )
}

const top100Films = [
    { title: 'Dance', year: 1994 },
    { title: 'Best of SEKERON', year: 1972 },
    { title: 'Projects', year: 1974 },
    { title: 'Posts', year: 2008 },
    { title: 'events', year: 1957 },
    { title: 'Blogs', year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
]; 
