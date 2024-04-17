import { screen } from '@testing-library/react'
import { Login } from '../Login'
import { renderWithProviders } from '@/utils/renderWithProviders'

describe('Login', () => {
  it('renders correctly', () => {
    renderWithProviders(<Login />)

    const loginContainer = screen.getByLabelText('login')
    expect(loginContainer).toBeInTheDocument()
  })

  it('renders matches snapshot', () => {
    renderWithProviders(<Login />)

    const loginContainer = screen.getByLabelText('login')
    expect(loginContainer).toBeInTheDocument()
    expect(loginContainer).toMatchSnapshot()
  })
})
