import { Link as RouterLink } from 'react-router-dom';
import { AccountBalance, AccountBox, AccountBoxOutlined, AccountBoxRounded, AccountBoxSharp, AccountBoxTwoTone, AccountCircle, AccountCircleOutlined, AccountCircleRounded, AccountCircleSharp, AccountTree, ChatRounded, Login, LoginRounded, LoginSharp, LoginTwoTone, LogoutOutlined, MenuOutlined, Shop, Shop2, ShoppingBag, ShoppingCart, ShoppingCartCheckout, ShoppingCartOutlined, ShowChart, SignLanguage, SupervisedUserCircle, UsbOffRounded } from '@mui/icons-material'
import { AppBar, Box, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = () => {
  return (
     <AppBar
        position='fixed'
        sx={{ 
            width: { sm: '100%' },
         }}
     >
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid 
                container
                alignItems='center'
                direction='row'
                sx={{ justifyContent: { sm: 'start', xs: 'center'}, pt: 1 }}
            >
                <Typography variant='h3' sx={{ fontFamily: 'Prata, serif', fontSize: { sm: 70, xs: 40 } }} >MalaMalotta</Typography>
            </Grid>
            
            <Box sx={{ display: 'flex' }}>
                <IconButton color='inherit'>
                    {/* <AccountBoxOutlined /> */}
                    <AccountCircleSharp />
                </IconButton>
                <IconButton color='inherit'>
                    <ShoppingCartOutlined/>
                </IconButton>
            </Box>
        </Toolbar>
     </AppBar>
  )
}
