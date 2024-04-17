import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Login } from '../Login'

describe('Login', () => {
  it('renders correctly', () => {
    render(<Login />)

    const loginContainer = screen.getByLabelText('login')
    expect(loginContainer).toBeInTheDocument()
  })

  // it('handles form submission', () => {
  //   render(<Login />)

  //   const loginContainer = screen.getByLabelText('login')
  //   expect(loginContainer).toBeInTheDocument()
  // })
})
