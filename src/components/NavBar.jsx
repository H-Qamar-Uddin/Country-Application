import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeContext } from '../App'
const NavBar = () => {
  const { setTheme } = React.useContext(ThemeContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Countries
          </Typography>
          <Button onClick={setTheme} color="primary" variant="contained">
            Switch Theme
          </Button>
          <Button style={{width: "3rem", height:"3rem" }} variant="outline-primary"
            className="rounded-circle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default NavBar
