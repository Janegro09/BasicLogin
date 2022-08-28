import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Swal from 'sweetalert2'

import React, { useState } from 'react'

export const DateSelectionView = () => {

    const [ value, setValue ] = useState(new Date());
    const [ fecha, setFecha ] = useState(false);
    const [ fechaConf, setFechaConf ] = useState(false);

    const handleChangeDate = (e) => {
        let {$D, $y, $M} = e;
        const fecha = $D + "/" + ($M+1) + "/" + $y;
        const value = ($M+1) + "/" + $D + "/" + $y
        setFecha(fecha);
        setValue(value);
    }

    const saveDate = () => {
        Swal.fire({
            title: 'Seleccionaste la fecha  <br>' + fecha,
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#655CC9',

          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setFechaConf(fecha)
                Swal.fire('Saved!', '', 'success')

            }})
    }


  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb:1 }}
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >
                Selecciona una fecha
            </Typography>
        </Grid> 
        <Grid container>
            {/* <TextField
                onChange={handleDate}
                id="date"
                label="Birthday"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Calendario"
                    value={value}
                    inputFormat="DD/MM/YYYY"

                    // onChange={handleChangeDate}
                    onChange={
                        handleChangeDate
                      }
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

        </Grid>
        <Grid item>
            {fecha && 
            
            <Button 
                color="primary" 
                sx={{ padding:2 }}
                onClick={saveDate}
            >
                <SaveOutlined sx={{ fontSize: 30, mr:1 }} />
                Guardar
            </Button>
                  }
        </Grid>

        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >
            {fechaConf}
            </Typography>
        </Grid>
    </Grid>
    
  )
}
