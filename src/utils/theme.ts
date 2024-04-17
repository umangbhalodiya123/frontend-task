'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { deepOrange, orange } from '@mui/material/colors'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: deepOrange,
    secondary: orange,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})
