import { Employee } from '@/types'

export const convertToGraphData = (data: Employee[], key: keyof Employee) => {
  const graphData: { label: string; value: number }[] = []

  const labels = [...new Set(data.map((employee) => employee[key]))].toSorted(
    (a, b) =>
      typeof a === 'number' && typeof b === 'number'
        ? a - b
        : typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b)
        : 0
  )

  labels.forEach((label) => {
    const avgPerformanceRating =
      data
        .filter((employee) => employee[key] === label)
        .reduce((acc, curr) => acc + curr.performance_rating, 0) /
      data.filter((employee) => employee[key] === label).length

    graphData.push({
      label: String(label),
      value: avgPerformanceRating,
    })
  })

  return graphData
}
