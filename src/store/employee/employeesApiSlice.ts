import { Employee } from '@/types'
import { API_KEY, API_URL } from '@/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type EmployeesApiResponse = Employee[]

export const employeesApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      console.log('API_KEY', API_KEY)
      if (API_KEY) headers.set('X-API-Key', API_KEY)
      return headers
    },
  }),
  reducerPath: 'employeesApi',
  tagTypes: ['Employees'],
  endpoints: (build) => ({
    getEmployees: build.query<EmployeesApiResponse, void>({
      query: () => '?count=1000',
      providesTags: (result, error, id) => [{ type: 'Employees', id: 'LIST' }],
    }),
  }),
})

export const { useGetEmployeesQuery } = employeesApiSlice
