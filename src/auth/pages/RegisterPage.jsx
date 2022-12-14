import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout tittle='Crear una cuenta'>
        <form>
            <Grid container >
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField
                        label="Nombre completo" 
                        type="text"
                        placeholder='Tu nombre'
                        fullWidth
                        />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                        label="correo" 
                        type="email"
                        placeholder='correo@google.com'
                        fullWidth
                        />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}> 
                    <TextField 
                        label="Contraseña" 
                        type="password"
                        placeholder='Contraseña'
                        fullWidth
                        />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt:1 }}>
                    <Grid item xs={ 12 }>
                        <Button variant='contained' fullWidth>
                            Crear cuenta
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>
                        ¿Ya tenes cuenta? 
                    </Typography>
                    <Link component={RouterLink} color='inherit' to='/auth/login'>
                        Ingresá
                    </Link>
                </Grid>

            </Grid>
        </form>
    </AuthLayout>
  )
}
