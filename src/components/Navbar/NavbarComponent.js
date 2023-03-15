import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Tabs, Tab} from '@mui/material';
import Button from '@mui/material/Button';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HdIcon from '@mui/icons-material/Hd';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Box } from '@mui/system';

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
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <AppBar position="static" >
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <LiveTvIcon fontSize='large' />
      </IconButton>

        <Tabs value={value} onChange={handleChange} >
                  <Tab style={{ color: 'white', marginRight: '40px' }} label='Movies' {...a11yProps(0)} icon={<HdIcon fontSize='medium'/> } />
                  <Tab style={{ color: 'white', marginRight: '40px' }} label='Trending' {...a11yProps(1)} icon={<WhatshotIcon fontSize='medium' />} />
                  <Tab style={{ color: 'white', marginRight: '40px' }} label='TV Series' {...a11yProps(2)} icon={<LocalMoviesIcon  fontSize='medium' />} />
    </Tabs>          
      <Button color="inherit" style={{marginLeft:'auto'}}>Login</Button>
    </Toolbar>
  </AppBar>
  )
}

export default NavbarComponent