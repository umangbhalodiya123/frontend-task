import type { Metadata } from 'next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { theme } from '@/utils'
import { AuthProvider, LayoutProvider, StoreProvider } from '@/providers'

export const metadata: Metadata = {
  title: 'Frontend Test',
}

type P = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: P) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StoreProvider>
              <AuthProvider>
                <LayoutProvider>{children}</LayoutProvider>
              </AuthProvider>
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
