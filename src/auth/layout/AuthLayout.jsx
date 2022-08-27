import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({children, tittle= ''}) => {
  return (
    <>
        <Grid 
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main',padding: 4}}
        >
            <Grid item
                className="box-shadow"
                xs={ 3 }
                sx={{ 
                    width: { md:450 },
                    backgroundColor:'white', 
                    padding:3, 
                    borderRadius: 2 
                }}>
            
                <Typography variant='h5' m-b='5' > { tittle } </Typography>

                {/* Children */}
                { children }

            </Grid>
        </Grid>
    </>
  )
}
