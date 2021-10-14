import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './OptionsDropdown.css';

export default function OptionsDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0971f1',
        // darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      outline: {
        main: '#C4C4C4',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="outlined"
        color="outline"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        className='options-dropdown-btn'
      >
        <div className='btn-title'>
          {props.title}
        </div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className='options-dropdown-menu'
      >
        {props.menuEl.map((e, i) => {
          return <MenuItem
            key={i}
            onClick={handleClose}
            className='test'
          >
            {e}
          </MenuItem>
        })}
      </Menu>
    </ThemeProvider>
  );
}
