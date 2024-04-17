'use client'
import { BarChart, DataTable } from '@/component'
import { useGetEmployeesQuery } from '@/store/employee/employeesApiSlice'
import { Box, Container, Stack, Typography } from '@mui/material'

export default function Home() {
  const { data, isLoading } = useGetEmployeesQuery()

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
        <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
          Employees Performance Rating
        </Typography>

        <Stack width="100%" spacing={3}>
          <DataTable data={data} loading={isLoading} />

          <BarChart
            data={data}
            loading={isLoading}
            title="Department Performance Analysis"
            label="Average Performance Rating"
            graphKey="department"
          />

          <BarChart
            data={data}
            loading={isLoading}
            title="Performance and Team Size Analysis"
            label="Average Performance Rating"
            graphKey="team_size"
          />
        </Stack>
      </Box>
    </Container>
  )
}
