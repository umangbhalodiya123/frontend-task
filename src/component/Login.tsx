'use client'
import { loginAction, selectStatus } from '@/store/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export const Login = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    if (data.email && data.password) {
      dispatch(loginAction(data))
    }
  }

  return (
    <Container component="main" maxWidth="xs" aria-label="login">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />

          <FormControl margin="normal" variant="outlined" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={status === 'loading'}
            startIcon={status === 'loading' && <CircularProgress size={16} />}
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
