import { renderWithProviders } from '@/utils/renderWithProviders'
import { Header } from '../Header'

describe('Header', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderWithProviders(
      <Header open={false} toggleDrawer={() => {}} />
    )
    expect(container).toMatchSnapshot()
  })
})
