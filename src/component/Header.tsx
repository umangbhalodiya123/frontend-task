'use client'
import { logoutAction } from '@/store/auth/authSlice'
import { useAppDispatch } from '@/store/hooks'
import { NAVBAR_ITEMS, NAVBAR_WIDTH } from '@/utils'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'
import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  AppBarProps as MuiAppBarProps,
  AppBar as MuiAppBar,
  Avatar,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type AppBarProps = Readonly<
  MuiAppBarProps & {
    open?: boolean
  }
>

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: NAVBAR_WIDTH,
    width: `calc(100% - ${NAVBAR_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

type P = Readonly<{
  open: boolean
  toggleDrawer: () => void
}>

export const Header = ({ open, toggleDrawer }: P) => {
  const path = usePathname()
  const pageTitle = NAVBAR_ITEMS.find((item) => item.path === path)?.name || ''
  const dispatch = useAppDispatch()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {pageTitle}
        </Typography>

        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>

          <Menu
            sx={{ mt: '45px' }}
            id="menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              onClickCapture={() => dispatch(logoutAction())}
            >
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
