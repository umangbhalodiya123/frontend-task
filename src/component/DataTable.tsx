'use client'
import { Employee } from '@/types'
import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef<Employee>[] = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
  },
  {
    field: 'gender',
    headerName: 'Gender',
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
  },
  {
    field: 'job_title',
    headerName: 'Job Title',
    width: 220,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 200,
  },
  {
    field: 'performance_rating',
    headerName: 'Performance Rating',
    type: 'number',
    width: 140,
  },
  {
    field: 'attendance_percentage',
    headerName: 'Attendance Percentage',
    type: 'number',
    width: 160,
  },
  {
    field: 'overtime_hours',
    headerName: 'Overtime Hours',
    type: 'number',
    width: 120,
  },
  {
    field: 'team_size',
    headerName: 'Team Size',
    type: 'number',
  },
  {
    field: 'communication_skills',
    headerName: 'Communication Skills',
    width: 160,
  },
  {
    field: 'employee_status',
    headerName: 'Employee Status',
    width: 120,
  },
]

type P = Readonly<{
  data?: Employee[]
  loading?: boolean
}>

export const DataTable = ({ data, loading = false }: P) => {
  return (
    <Box sx={{ width: '100%', height: 650 }}>
      <DataGrid
        rows={data || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        loading={loading}
        pageSizeOptions={[10, 15, 25, 50, 75, 100]}
        disableRowSelectionOnClick
      />
    </Box>
  )
}
