import React, { Component, useState } from 'react';
import 
  { BottomNavigation, BottomNavigationAction, Breadcrumbs, Link,
    Drawer, Button, ListItemIcon, ListItem, List, ListItemText,
    Menu, MenuItem
     } from '@material-ui/core';
import { Favorite, LocationOn, Restore, Inbox, Mail } from '@material-ui/icons';

export default function UserProfilesPage() {
  // state = {  }
  // render() { 
  const [value, setValue] = useState('value');
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return ( 
    <div>
      {/* <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log('here', newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation> */}
      
      
      {/* <Breadcrumbs>
        <Link color="textPrimary" href="/" onClick={()=>{}}>
          Material-UI
        </Link>
        <Link color="textPrimary" href="/" onClick={()=>{}}>
          Material-UI
        </Link>
        <Link color="textPrimary" href="/" onClick={()=>{}}>
          Material-UI
        </Link>
      </Breadcrumbs> */}
      
      
      <Button onClick={toggleDrawer('right', true)}>
        Some Button
      </Button>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}

      
    </div>
  );
}
// }
