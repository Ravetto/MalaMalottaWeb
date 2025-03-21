import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

export const RegisterPage = () => {
  return (
    <AuthLayout title={'Crear cuenta'}>
        <form>
            <Grid container>
                <Grid item xs={12} sx={{ mt:2 }}>
                    <TextField
                        label= 'Nombre Completo'
                        type='text'
                        placeholder='Escriba Su Nombre'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{ mt:2 }}>
                    <TextField
                        label= 'correo'
                        type='email'
                        placeholder='correo@google.com'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{ mt:2 }}>
                    <TextField
                        label= 'contraseña'
                        type='password'
                        placeholder='contraseña'
                        fullWidth
                    />
                </Grid>
                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12}>
                        <Button variant='contained' fullWidth>Crear Cuenta</Button>
                    </Grid>
                </Grid>
                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                    <Link component={ RouterLink } color='inherit' to={'/auth/login'}>Ingresar</Link>
                </Grid>
            </Grid>
        </form>
    </AuthLayout>
  )
}
