'use client'
import { Login } from '@/component'
import { selectUser } from '@/store/auth/authSlice'
import { useAppSelector } from '@/store/hooks'

type P = Readonly<{ children: React.ReactNode }>

export const AuthProvider = ({ children }: P) => {
  const user = useAppSelector(selectUser)

  if (user?.id) return children

  return <Login />
}
