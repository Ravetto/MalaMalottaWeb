import React from 'react'
import { NavBar } from '../components/NavBar'
import { Box, Toolbar } from '@mui/material'

const drawerWidth = 240;

export const MalottaLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <NavBar />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            { children }
        </Box>
    </Box>
  )
}
