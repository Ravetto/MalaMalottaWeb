import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { BlackAndWhiteTheme } from './BlackAndWhiteTheme'


export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={BlackAndWhiteTheme}>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
