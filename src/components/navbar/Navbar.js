import * as React from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  Menu,
  Card,
  Box,
  Switch,
  AppBar,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NavbarStyle from '../../styles/NavbarStyle';
import MenuIcon from '@mui/icons-material/Menu';
import MaterialUISwitch from "./MaterialUISwitch";
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { useState } from "react";
import NavbarOptions from './NavbarOptions';



const pages = ['Servers', 'Settings', 'Help'];
const Navbar = () => {


  const [isDark, setisDark] = useState(true)
  const darkModeTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",

    },
  });


  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (

    <ThemeProvider theme={darkModeTheme}>
      <Card style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginLeft: 40, marginTop: 20, marginBottom:18}} >
          <Typography
            variant="h6"
            noWrap
            color="#3D3B5D"
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Mine Controller
          </Typography>
          </div>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {NavbarOptions.map((element, index) => (
                  <MenuItem key={index} >
                    <Typography color="#3D3B5D" textAlign="center">{index}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

          {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Mine Cntroller
            </Typography > */}
          <div>
            {NavbarOptions.map((element, index) => (
              <Button style={NavbarStyle.option}
                key={index}
              >
                {element.text}
              </Button>
            ))}
          </div>

          <Box style={{
            position: 'absolute',
            left: '73.65%',
            right: '18.52%',
            top: '3.39%',
            bottom: '94.14%',
            color: '#3D3B5D',
            fontSize: '20%',
            fontFamily: 'Urbanist'
          }}>

            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} checked={isDark} onChange={e => setisDark(!isDark)} />}
              label=""
            />

          </Box>
        
      </Card>
    </ThemeProvider>

  );

}
export default Navbar;