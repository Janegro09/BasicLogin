import { Button, Typography } from '@mui/material'
import React from 'react'

export const DateGalery = ({fechas, deleteDate}) => {

    return (
    <>
    <Typography sx={{display:'block'}}>
        {fechas.map((v,i) => {
            return (
                <Typography key={i} fontSize={ 20 } fontWeight='' sx={{m:2}} >
                    {i+1} ) {v}
                    <Button variant="outlined" color="error" sx={{ml: 2}}>
                    x
                    </Button>
                </Typography>
                )
            })
        }
    </Typography>
    </>
  )
}
