import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { DateSelectionView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <NothingSelectedView /> */}

        <DateSelectionView />

        {/* <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas eos voluptas, quo doloremque voluptates similique. Est, et. Cumque totam illo inventore molestiae delectus ullam impedit minima explicabo vero distinctio.
            Journal Page
        </Typography> */}

    </JournalLayout>
  )
}