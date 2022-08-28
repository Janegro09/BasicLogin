import { Typography } from '@mui/material'
import React from 'react'

export const DateGalery = ({fechas}) => {
    return (
    <>
    {fechas}
    {/* <Typography sx={{display:'block'}}>
        {fechas.map((v,i) => {
            return (
                <Typography key={i} fontSize={ 20 } fontWeight='bold' sx={{m:2}} >
                {i+1}) {v}
                </Typography>
                )
            })
        }
    </Typography> */}
    </>
  )
}
