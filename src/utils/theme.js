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
            main: '#741414;',
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