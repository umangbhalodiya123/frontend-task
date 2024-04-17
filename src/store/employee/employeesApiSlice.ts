import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Employee {
  id: number
  employee: string
  author: string
}

interface EmployeesApiResponse {
  employees: Employee[]
  total: number
  skip: number
  limit: number
}

export const employeesApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mockaroo.com/api/502602f0?count=100',
  }),
  reducerPath: 'employeesApi',
  tagTypes: ['Employees'],
  endpoints: (build) => ({
    getEmployees: build.query<EmployeesApiResponse, number>({
      query: (limit = 10) => `?count=${limit}`,
      providesTags: (result, error, id) => [{ type: 'Employees', id }],
    }),
  }),
})

export const { useGetEmployeesQuery } = employeesApiSlice
