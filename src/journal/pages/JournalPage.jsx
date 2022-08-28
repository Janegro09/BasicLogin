import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { DateSelectionView, NothingSelectedView, ProductSelection } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
        <NothingSelectedView />

        {/* <DateSelectionView /> */}

        {/* <ProductSelection /> */}

        <IconButton 
            size='large'
            sx={{
                color:'white',
                backgroundColor: 'error.main',
                ':hover':{ backgroundColor:'error.main', opacity:0.9},
                position:'fixed',
                right: 50,
                bottom: 50
            }}
        >
            <AddOutlined sx={{ fontSize: 30}}/>
        </IconButton>


        {/* <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas eos voluptas, quo doloremque voluptates similique. Est, et. Cumque totam illo inventore molestiae delectus ullam impedit minima explicabo vero distinctio.
            Journal Page
        </Typography> */}

    </JournalLayout>
  )
}