import { CREDENTIALS } from './utils'

export type LoginRequestValues = {
  email: string
  password: string
}

export type User = (typeof CREDENTIALS)[number]

export type Employee = {
  id: number
  name: string
  gender: string
  age: number
  job_title: string
  department: string
  performance_rating: number
  attendance_percentage: number
  overtime_hours: number
  team_size: number
  communication_skills: string
  employee_status: string
}
