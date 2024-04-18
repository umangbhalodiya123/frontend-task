'use client'
import { Grid, Skeleton, Stack, Typography } from '@mui/material'

export default function Settings() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Settings Page
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack spacing={2} width="100%" alignItems="center">
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
          </Stack>
        </Grid>

        <Grid item xs={8}>
          <Stack spacing={2} width="100%" alignItems="center">
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
            <Skeleton animation={false} height={50} width="100%" />
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
