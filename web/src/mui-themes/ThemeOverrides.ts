import sekeronTheme from './SekeronTheme'

const { palette, shape, breakpoints } = sekeronTheme

const OverridedThemes = {
  ...sekeronTheme,
  components: {
    ...sekeronTheme.components,
    MuiTypography: {
      styleOverrides: {
        h1: {
          [breakpoints.up('sm')]: {
            fontSize: '3rem',
            fontFamily: 'Comfortaa-Bold',
            backgrundColor: 'red',
          },

          [breakpoints.down('sm')]: {
            fontSize: '2.5rem',
            fontFamily: 'Comfortaa-Bold',
          },
        },
        h2: {
          [breakpoints.up('sm')]: {
            fontSize: '1.7rem',
            fontFamily: 'Comfortaa-Regular',
            backgrundColor: 'red',
          },

          [breakpoints.down('sm')]: {
            fontSize: '1.7rem',
            fontFamily: 'Comfortaa-Regular',
          },
        },
        h4: {
          [breakpoints.down('sm')]: {
            fontSize: '1.1rem',
            fontFamily: 'Comfortaa-Regular',
          },
        },
        h6: {
          [breakpoints.down("sm")]: {
            fontSize: "1.4rem",
            fontFamily: "Comfortaa-Regular",
          },
        },
        body1: {
          [breakpoints.up('sm')]: {
            fontSize: '1.4rem',
            fontFamily: 'Comfortaa-Regular',
            backgrundColor: 'red',
          },

          [breakpoints.down('sm')]: {
            fontSize: '1.3rem',
            fontFamily: 'Comfortaa-Regular',
          },
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: palette.background.default,
    //     },
    //   },
    // },
    MuiButton: {
      ...sekeronTheme.components?.MuiButton,
      styleOverrides: {
        root: {
          fontFamily: 'Comfortaa-Regular',
          textTransform: 'capitalize',
          borderRadius: shape.borderRadius,
          fontSize: '1.7rem',
          '.MuiButton-endIcon > :nth-of-type(1)': {
            // fontSize:,
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.4rem',
          },
        },
      },
    },
    MuiAvatar: {
      ...sekeronTheme.components?.MuiAvatar,
      styleOverrides: {
        img: {
          objectFit: 'cover',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.common.black,
          maxWidth: 500,
        },
        arrow: {
          '&::before': {
            backgroundColor: palette.common.black,
          },
        },
      },
    },
    MuiPopper: {
      defaultProps: {
        sx: {
          '&&&': {
            zIndex: 3000,
          },
        },
      },
    },

  },
}

export default OverridedThemes
