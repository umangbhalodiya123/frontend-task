'use client'

import { logoutAction } from '@/store/auth/authSlice'
import { useAppDispatch } from '@/store/hooks'
import { Button } from '@mui/material'

export const Logout = () => {
  const dispatch = useAppDispatch()
  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => dispatch(logoutAction())}
    >
      Logout
    </Button>
  )
}
