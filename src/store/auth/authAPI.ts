import { LoginRequestValues } from '@/types'
import { login } from '@/utils/fakeLoginAPI'

export const fetchLogin = async (values: LoginRequestValues) => {
  // in real world app, we would use fetch or axios here and fetch the jwt token
  const response = await login(values)
  return response
}
