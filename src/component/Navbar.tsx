'use client'
import { NAVBAR_ITEMS, NAVBAR_WIDTH } from '@/utils'
import { ChevronLeft } from '@mui/icons-material'
import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: NAVBAR_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

type P = Readonly<{
  open: boolean
  toggleDrawer: () => void
}>

export const Navbar = ({ open, toggleDrawer }: P) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>

      <Divider />

      <List component="nav">
        {NAVBAR_ITEMS.map((item) => (
          <ListItemButton key={item.name} LinkComponent={Link} href={item.path}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}
