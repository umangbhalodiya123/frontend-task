'use client'
import { Employee } from '@/types'
import { convertToGraphData } from '@/utils/convertToGraphData'
import { Card, CardContent, CardHeader, Skeleton } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { Chart } from 'react-charts'

type P = Readonly<{
  data?: Employee[]
  loading?: boolean
  label: string
  title: string
  graphKey: keyof Employee
}>

export const BarChart = ({
  data,
  loading = false,
  graphKey,
  label,
  title,
}: P) => {
  if (!data?.length) {
    return null
  }

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardHeader subheader={title} />
      <CardContent sx={{ height: 400, padding: 0 }}>
        <Chart
          options={{
            data: [
              {
                data: convertToGraphData(data, graphKey),
                label: label,
              },
            ],
            primaryAxis: {
              getValue: (datum) => datum.label,
              min: 0,
            },
            secondaryAxes: [
              {
                getValue: (datum) => datum.value,
                elementType: 'bar',
              },
            ],
            dark: true,
            defaultColors: [deepOrange[500]],
          }}
        />
      </CardContent>
    </Card>
  )
}
