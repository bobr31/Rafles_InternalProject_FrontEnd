import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Replace with your primary color
      light: '#64B5F6', // Lighter shade for primary
      dark: '#0D47A1', // Darker shade for primary
      contrastText: '#FFFFFF', // Text color that contrasts with primary
    },
    secondary: {
      main: '#FF4081', // Replace with your secondary color
      light: '#FF79B0', // Lighter shade for secondary
      dark: '#C60055', // Darker shade for secondary
      contrastText: '#FFFFFF', // Text color that contrasts with secondary
    },
    background: {
      default: '#F5F5F5', // Replace with your default background color
      paper: '#FFFFFF', // Background color for paper elements
    },
    text: {
      primary: '#212121', // Primary text color
      secondary: '#757575', // Secondary text color
      disabled: '#BDBDBD', // Disabled text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Adjust as needed
    fontSize: 16, // Base font size in pixels
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8, // Adjust the border radius as needed
  },
  spacing: 8, // Adjust the base spacing unit as needed
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
})

export default theme
