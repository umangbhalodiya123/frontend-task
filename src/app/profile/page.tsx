'use client'
import { Skeleton, Stack, Typography } from '@mui/material'

export default function Profile() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Profile Page
      </Typography>

      <Stack spacing={2} width="100%" alignItems="center">
        <Skeleton
          animation={false}
          variant="circular"
          height={100}
          width={100}
        />
        <Skeleton animation={false} height={50} width="100%" />
        <Skeleton animation={false} height={50} width="100%" />
        <Skeleton animation={false} height={50} width="100%" />
        <Skeleton animation={false} height={50} width="100%" />
        <Skeleton animation={false} height={50} width="100%" />
      </Stack>
    </>
  )
}
