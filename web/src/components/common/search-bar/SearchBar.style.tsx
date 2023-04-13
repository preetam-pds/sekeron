import { alpha, InputBase, styled } from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'var(--denary-theme-color)',
    '&:hover': {
        backgroundColor: 'var(--denary-theme-color)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '26px',
    borderRadius: "15px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        width: "auto",
    },
    '&&& .MuiFormControl-root ': {
        width: '95%',
        marginLeft: "30px",
    },
    "&&& .MuiInputBase-input ": {
        color: "var(--tertiary-grey-color)",
        fontSize: '1.6rem',
        fontFamily: 'Comfortaa-Light',
        fontWeight: 300
    }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    paddingRight: "20px",
    // width: "20px",
    paddingLeft: "10px",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        height: '46px',
        fontSize: "1.5rem",
        fontWeight: 300,
        fontFamily: "Comfortaa-Regular",
        color: theme.palette.grey[200],
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: "30ch",
            // fontSize: "1rem",
        },
        [theme.breakpoints.up('lg')]: {
            width: "45ch",
        },
        [theme.breakpoints.up('xl')]: {
            width: "85ch",
        },
        [theme.breakpoints.down('sm')]: {
            width: "27ch",
        },
    },
}));

export const AutoCompleteStyles = styled('div') <any>`

&&& .MuiAutocomplete-root{
    width: 100%;
} 

&&& .MuiInputBase-root {
    /* background-color: var(--primary-theme-color);
    border: 1px solid var(--quaternary-grey-color); */
    color: red;
}

&&& .MuiInputBase-input{
    color:var(--quinary-blue-color);
    font-family: 'Comfortaa-Light';
    font-size: 1.6rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
}

&&& .MuiOutlinedInput-notchedOutline{
    border:1px solid var(--quaternary-grey-color);
    border-radius: 18px;
}

`