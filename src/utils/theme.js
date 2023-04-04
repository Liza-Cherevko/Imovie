import {createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#14213d',
        },
        secondary: {
            main: '#14213d',
        },
        pagination: {
            main: '#bf8900',
        },
     
        common: {
            drawer: 'A22032',
        },
    },
    typography: {
        allVariants: {
            color: "white"
        },
    },


});

export default theme;