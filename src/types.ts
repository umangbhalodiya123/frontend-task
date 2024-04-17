import { CREDENTIALS } from './utils'

export type LoginRequestValues = {
  email: string
  password: string
}

export type User = (typeof CREDENTIALS)[number]
