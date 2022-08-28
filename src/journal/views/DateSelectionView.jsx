import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export const DateSelectionView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1}}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >
                Selecciona una fecha
            </Typography>
        </Grid> 

        <Grid item>
            <Button>
                <SaveOutlined sx={{ fontSize: 30, mr:1 }} />
                Guardar
            </Button>
        </Grid>

    </Grid>
    
  )
}
