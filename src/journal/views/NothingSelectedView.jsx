import { StarOutline } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';

export const NothingSelectedView = () => {
  return (

    <Grid 
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main'}}
        >
            <Grid item xs={ 12 } >
                <StarOutline />


            </Grid>

    </Grid>
    
  )
}
