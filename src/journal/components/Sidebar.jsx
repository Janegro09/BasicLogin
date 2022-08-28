import { 
    Box, 
    Divider, 
    Drawer, 
    Grid, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText,
    Toolbar, 
    Typography } from '@mui/material'
import React from 'react'
import { TurnedInNot } from '@mui/icons-material'

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (

    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sn: 0}}}
    >
        <Drawer
            variant='permanent' // temporary si queremos mostrarlo de forma condicional, ver documentacion
            open={ true }
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >

        <Toolbar>
            <Typography variant='h6' noWrap component='div'>
                Javier Sosa
            </Typography>
        </Toolbar>
        <Divider />

        <List>
            {
                ['Dashboard','Fecha propuesta', 'Carrito', 'otros'].map( (text, i) => (
                    <ListItem key={ i } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container >
                                <ListItemText primary={ text } />
                                <ListItemText secondary={ "Aca va una aclaracion sobre el campo " + text } />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>

        </Drawer>

    </Box>
    
  )
}
