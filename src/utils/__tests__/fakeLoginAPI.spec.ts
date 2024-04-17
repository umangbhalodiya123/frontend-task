import { CREDENTIALS, login } from '../'

describe('login', () => {
  it('login fails with wrong credentials', async () => {
    const creds = {
      email: 'a@a.com',
      password: 'a',
    }

    try {
      await login(creds)
    } catch (error: any) {
      expect(error.success).toBe(false)
    }
  })

  it('login succeeds with correct credentials', async () => {
    const creds = {
      email: CREDENTIALS[0].email,
      password: CREDENTIALS[0].password,
    }

    const loginData = await login(creds)
    expect(loginData.success).toBe(true)
  })
})
