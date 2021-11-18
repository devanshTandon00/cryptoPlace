import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import './NavbarUserButton.css'

import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon from '@mui/material/ListItemIcon';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImageIcon from '@mui/icons-material/Image';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';


export default function NavbarUserButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    const screenSize = window.innerWidth;

    const generalRoutes = (
      <React.Fragment>
        <a href='/blog-page' className='href'>
          <MenuItem>
            <ListItemIcon>
              <LibraryBooksIcon fontSize="small" />
            </ListItemIcon>
            Blog Page
          </MenuItem>
        </a>
        <a href='/browse' className='href'>
          <MenuItem>
            <ListItemIcon>
              <ImageIcon fontSize="small" />
            </ListItemIcon>
            Browse
          </MenuItem>
        </a>
        <a href='/create-collectible' className='href'>
          <MenuItem>
            <ListItemIcon>
              <AddCircleOutlineIcon fontSize="small" />
            </ListItemIcon>
            Create Collectible
          </MenuItem>
        </a>
      </React.Fragment>
    );

    const accountRoutes = (
      <React.Fragment>
        <a href='/profile' className='href'>
          <MenuItem>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
        </a>
        <a href='/manage-account' className='href'>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Manage Account
          </MenuItem>
        </a>
      </React.Fragment>
    );

    const logout = (
      <a href='/logout' className='href'>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </a>
    );

    const login = (
      <a href='/login' className='href'>
        <MenuItem>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
      </a>
    );

    if (loggedIn === 'true') {
      if (screenSize <= 1300) { // auth and small screen
        return (
          <div>
            {generalRoutes}
            <Divider />
            {accountRoutes}
            <Divider />
            {logout}
          </div>);
      }
      else { //auth and large screen
        return (
          <div>
            {accountRoutes}
            <Divider />
            {logout}
          </div>);
      }
    } else {
      if (screenSize <= 1300) { // not auth and small screen
        return (
          <div>
            {generalRoutes}
            <Divider />
            {login}
          </div>);
      } else {
        return (
          <div>
            {login}
          </div>);
      }
    }
  }

  return (
    <React.Fragment>
      <Avatar
        className="profile-avatar"
        src="../Icons/user.png"
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 10,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {renderMenuItems()}
      </Menu>
    </React.Fragment>
  );
}
