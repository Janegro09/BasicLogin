import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Swal from 'sweetalert2'

import React, { useEffect, useState } from 'react'
import { DateGalery } from '../components';

export const DateSelectionView = () => {

    const [ value, setValue ] = useState(new Date());
    const [ fecha, setFecha ] = useState(false);
    const [ fechaConf, setFechaConf ] = useState([]);

    const handleChangeDate = (e) => {
        let {$D, $y, $M} = e;
        const fecha = $D + "/" + ($M+1) + "/" + $y;
        const value = ($M+1) + "/" + $D + "/" + $y
        setFecha(fecha);
        setValue(value);
    }
    // useEffect(() => {
    //     setFechaConf(fechaConf)
    // })
    
    const saveDate = () => {
        Swal.fire({
            title: 'Seleccionaste la fecha  <br>' + fecha,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#655CC9'
        }).then((result) => {
            if (result.isConfirmed) {
                if(fechaConf.includes(fecha))  {
                    Swal.fire('Seleccioná otra fecha porque esa ya existe', '', 'warning')
                    return
                }
                if(fechaConf.length>=3) fechaConf.shift()
                fechaConf.push(fecha)
                Swal.fire('Fecha Guarda', '', 'success')
                console.log(fechaConf)
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
        <Grid item>
            {fecha &&             
                <Button 
                    color="primary" 
                    sx={{ padding: 2 }}
                    onClick={saveDate}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr:1 }} />
                    Guardar
                </Button>
            }
        </Grid>
        <Grid container sx={{justifyContent:'center'}}>
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
        
        <DateGalery fechas={fechaConf} />
        {/* <Grid container>
        {
            fechaConf.map(elem => {return (
                <Grid item>
                    {elem}
                </Grid>)
            })
        }
        </Grid> */}
    </Grid>
    
  )
}
