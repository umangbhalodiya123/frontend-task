import { Box, CircularProgress, Container } from '@mui/material'

export const Loader = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    </Container>
  )
}
