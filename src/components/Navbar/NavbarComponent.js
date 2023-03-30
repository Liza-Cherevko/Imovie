import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import DrawerComponent from './DrawerComponent';
import HdIcon from '@mui/icons-material/Hd';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




const NavbarComponent = () => {
    const [value, setValue] = useState(0);

    const navigate = useNavigate()

  const handleChange = (e,newValue)=>{
    setValue(e, newValue)
 
  }

// theme costomazation
const theme = useTheme();
const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
console.log(isMatch);

// useEffect(()=>{
//   if(value===0) navigate('/');
//   if(value===1) navigate('/trending');
//   if(value===2) navigate('/series');

// },[value])

  return (
   <AppBar  >
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >=
        <LiveTvIcon fontSize='large' />
      </IconButton>

  {!isMatch && (
          <Tabs value={value} onChange={handleChange} >
          <Tab style={{ color: 'white', marginRight: '40px' }} label='Movies' {...a11yProps(0)} icon={<HdIcon fontSize='medium'/> }  component={NavLink} to='/' />
          <Tab style={{ color: 'white', marginRight: '40px' }} label='Trending' {...a11yProps(1)} icon={<WhatshotIcon fontSize='medium' />}  component={NavLink} to='/trending'/>
          <Tab style={{ color: 'white', marginRight: '40px' }} label='TV Series' {...a11yProps(2)} icon={<LocalMoviesIcon  fontSize='medium' />}  component={NavLink} to='/series'/>

</Tabs>
  )}
 <Tab style={{ color: 'white', marginLeft: 'auto' }}  {...a11yProps(2)} icon={ <DrawerComponent/>} />
    </Toolbar>
  </AppBar>

  )
}

export default NavbarComponent