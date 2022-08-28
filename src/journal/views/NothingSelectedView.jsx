import { StarOutline } from '@mui/icons-material';
import { Grid, Typography, Box } from '@mui/material';
import React from 'react';

export const NothingSelectedView = () => {
  return (
    <Grid 
        columnSpacing={1}
        rowSpacing={1}
        container
        spacing={ 0 }
        direction="row"
        alignItems="stretch"
        justifyContent="center"
        sx={{ 
            minHeight: 'calc(100vh - 110px)', 
            backgroundColor: 'primary.main', 
            borderRadius: 5
        }}>
        <Grid item xs={11} border={1}
        sx={{borderRadius: 5, justifyContent:'center', textAlign:'center', display:'flex', alignItems:'center' }}>
            <StarOutline sx={{ fontSize: 100, color:'white'}}/>
            <Typography color="white" variant='h5'>
                Carrito Actual
            </Typography>
        </Grid>
        <Grid item xs={ 5 } border={1}
        sx={{borderRadius: 5, justifyContent:'center', textAlign:'center', display:'flex', alignItems:'center' }}>
            <Typography color="white" variant='h5'>
                Fecha posible Podio
            </Typography>
        </Grid>
        <Grid item xs={ 6 } border={1}
        sx={{borderRadius: 5, justifyContent:'center', textAlign:'center', display:'flex', alignItems:'center' }}>
            <Typography color="white" variant='h5'>
                Carrito Actual
            </Typography>
        </Grid>             

    </Grid>
    
  )
}
