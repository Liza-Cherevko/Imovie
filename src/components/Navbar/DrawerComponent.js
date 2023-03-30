import {Box, Drawer, Tab, Tabs, Typography, useMediaQuery} from '@mui/material';
import HdIcon from '@mui/icons-material/Hd';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React from 'react';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';

function DrawerComponent() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    
const theme = useTheme();
const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const [value, setValue] = useState(0);



const handleChange = (e,newValue)=>{
setValue(e, newValue)

}
  return (
  <>

        <MenuOpenIcon fontSize='large' style={{ color: 'white' }}  onClick={()=>setIsDrawerOpen(true)} />
              {isMatch && ( 
     <Drawer
        anchor='right'
         open={isDrawerOpen}
          onClose={()=>setIsDrawerOpen(false)}
          >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
         <Typography variant='h6' component='div'> Side panel</Typography>
         <div>
          <Tab style={{ color: 'black', marginRight: '40px' }} label='Movies' {...a11yProps(0)} icon={<HdIcon fontSize='medium'/> }  component={NavLink} to='/' />
          <Tab style={{ color: 'black', marginRight: '40px' }} label='Trending' {...a11yProps(1)} icon={<WhatshotIcon fontSize='medium' />}  component={NavLink} to='/trending'/>
          <Tab style={{ color: 'black', marginRight: '40px' }} label='TV Series' {...a11yProps(2)} icon={<LocalMoviesIcon  fontSize='medium' />}  component={NavLink} to='/series'/>

</div>
        </Box>
        </Drawer>
  )}
   
  </>
  )
}

export default DrawerComponent
