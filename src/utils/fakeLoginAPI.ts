import { LoginRequestValues, User } from '../types'
import { CREDENTIALS } from '.'

export const login = (values?: LoginRequestValues, timeout = 700) => {
  return new Promise<{ success: boolean; user?: User }>((resolve, reject) => {
    setTimeout(() => {
      const user = CREDENTIALS.find(
        (credential) =>
          credential.email === values?.email &&
          credential.password === values?.password
      )
      if (user) {
        resolve({ success: true, user })
      } else {
        reject({ success: false })
      }
    }, timeout)
  })
}
