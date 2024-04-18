'use client'
import {
  authStatusIdleAction,
  loginAction,
  selectStatus,
} from '@/store/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const Login = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    if (!data.email || !data.password || !data.email.match(EMAIL_PATTERN)) {
      setErrors({
        email: !data.email
          ? 'please enter email'
          : data.email.match(EMAIL_PATTERN)
          ? ''
          : 'please enter valid email',
        password: !data.password ? 'please enter password' : '',
      })
      return
    }

    dispatch(loginAction(data))
  }

  const handleNotificationClose = () => {
    dispatch(authStatusIdleAction())
  }

  return (
    <Container component="main" maxWidth="xs" aria-label="login">
      <Snackbar
        open={status === 'failed'}
        autoHideDuration={5000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={handleNotificationClose}
        >
          <AlertTitle>Error!!</AlertTitle>
          Please enter valid credentials
        </Alert>
      </Snackbar>

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
            aria-label="email"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={() => setErrors((errors) => ({ ...errors, email: '' }))}
            error={!!errors.email}
            helperText={errors.email}
          />

          <FormControl
            margin="normal"
            variant="outlined"
            fullWidth
            error={!!errors.password}
          >
            <InputLabel htmlFor="password" required>
              Password
            </InputLabel>
            <OutlinedInput
              aria-label="password"
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
              onChange={() =>
                setErrors((errors) => ({ ...errors, password: '' }))
              }
            />
            <FormHelperText>{errors.password}</FormHelperText>
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

      <Box>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={1}
          mt={2}
          color="text.secondary"
        >
          <Typography color="secondary" sx={{ fontWeight: 'bold' }}>
            Hint
          </Typography>
          <Typography>Email: admin@mail.com</Typography>
          <Typography>Password: Admin@123</Typography>
        </Stack>
      </Box>
    </Container>
  )
}
