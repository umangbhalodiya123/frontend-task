import { convertToGraphData } from '../convertToGraphData'
import { employees } from '../'

describe('convertToGraphData', () => {
  it('converts data correctly for department', () => {
    const convertedData = convertToGraphData(employees, 'department')
    expect(convertedData).toMatchSnapshot()
  })

  it('converts data correctly for team_size', () => {
    const convertedData = convertToGraphData(employees, 'team_size')
    expect(convertedData).toMatchSnapshot()
  })

  it('converts data correctly for age', () => {
    const convertedData = convertToGraphData(employees, 'age')
    expect(convertedData).toMatchSnapshot()
  })
})
