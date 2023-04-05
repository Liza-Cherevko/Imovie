import {createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#14213d',
            darker:'#837070'
        },
        secondary: {
            main: '#741205',
        },
        neutral: {
            main: '#513583',
            contrastText: '#fff',
          },
      
        pagination: {
            main: '#bf8900',
        },
        tabs: {
          main:'#8b0b0b',
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
