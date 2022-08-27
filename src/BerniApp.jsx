import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const BerniApp = () => {
  return (
    <>
        <AppTheme >
            <AppRouter />
        </AppTheme>
    </>
  )
}
