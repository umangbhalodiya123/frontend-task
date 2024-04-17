import { render, screen } from '@testing-library/react'
import { DataTable } from '../DataTable'
import { employees } from '@/utils'

describe('DataTable', () => {
  it('renders correctly', () => {
    render(<DataTable data={[]} loading={false} />)

    const dataTableContainer = screen.getByLabelText('data table')
    expect(dataTableContainer).toBeInTheDocument()
  })

  it('renders loading and matches with snapshot', () => {
    render(<DataTable data={[]} loading={true} />)

    const dataTableContainer = screen.getByLabelText('data table')
    expect(dataTableContainer).toMatchSnapshot()
  })

  it('renders data correctly and matches with snapshot', () => {
    render(<DataTable data={employees} />)

    const dataTableContainer = screen.getByLabelText('data table')
    expect(dataTableContainer).toBeInTheDocument()

    expect(dataTableContainer).toMatchSnapshot()
  })
})
