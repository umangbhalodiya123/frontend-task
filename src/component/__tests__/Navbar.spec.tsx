import { renderWithProviders } from '@/utils/renderWithProviders'
import { Navbar } from '../Navbar'

describe('Navbar', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderWithProviders(
      <Navbar open={false} toggleDrawer={() => {}} />
    )
    expect(container).toMatchSnapshot()
  })
})
