import { Dashboard, Info, Person, Settings } from '@mui/icons-material'

export const API_URL = 'https://api.mockaroo.com/api/502602f0'

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const CREDENTIALS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'admin@mail.com',
    password: 'Admin@123',
  },
]

export const NAVBAR_WIDTH = 240

export const NAVBAR_ITEMS = [
  {
    name: 'Dashboard',
    path: '/',
    icon: Dashboard,
  },
  {
    name: 'About',
    path: '/about',
    icon: Info,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: Person,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
  },
]
