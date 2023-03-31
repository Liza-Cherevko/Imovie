import { Drawer, List, ListItem, ListItemIcon, LocalMoviesIcon, ListItemText, WhatshotIcon, HdIcon } from '@mui/material';

import * as React from 'react';


const DrawerComponent = () => {
  return (
      <Drawer open={true}
          onClose={false}
          anchor='right' 
      >
          <List>
              <ListItem>
              <ListItemIcon>
                  <LocalMoviesIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Movies'/>
              </ListItem>
            
              <ListItem>
              <WhatshotIcon>
                  <LocalMoviesIcon/>
                  </WhatshotIcon>
                  <ListItemText primary='Movies'/>
              </ListItem>

              <ListItem>
              <HdIcon>
                  <LocalMoviesIcon/>
                  </HdIcon>
                  <ListItemText primary='Movies'/>
              </ListItem>
          </List>
    </Drawer>
  )
}

export default DrawerComponent

