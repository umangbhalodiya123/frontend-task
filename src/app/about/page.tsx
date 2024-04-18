'use client'
import { Skeleton, Stack, Typography } from '@mui/material'

export default function About() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        About Page
      </Typography>

      <Stack spacing={1} width="100%">
        <Skeleton animation={false} height={100} />
        <Skeleton animation={false} height={200} />
        <Skeleton animation={false} height={100} />
        <Skeleton animation={false} height={100} />
      </Stack>
    </>
  )
}
