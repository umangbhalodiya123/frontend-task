import { Logout } from '@/component'
import { Box, Container, Link, Typography } from '@mui/material'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Home Page
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
      </Box>

      <Logout />
    </Container>
  )
}
