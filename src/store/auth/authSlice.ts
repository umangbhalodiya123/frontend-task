import { createAppSlice } from '@/store/createAppSlice'
import { fetchLogin } from './authAPI'
import { LoginRequestValues, User } from '@/types'

export interface AuthSliceState {
  // in real world app, we would store jwt token here
  value: User | null
  status: 'idle' | 'loading' | 'failed'
}

const initialState: AuthSliceState = {
  value: null,
  status: 'idle',
}

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    loginAction: create.asyncThunk(
      async (values: LoginRequestValues) => {
        const response = await fetchLogin(values)
        if (!response.success || !response.user) {
          throw new Error()
        }
        return response.user
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'idle'
          state.value = action.payload
        },
        rejected: (state) => {
          state.status = 'failed'
          state.value = null
        },
      }
    ),
    logoutAction: create.reducer((state) => {
      state.value = null
    }),
    authStatusIdleAction: create.reducer((state) => {
      state.status = 'idle'
    }),
  }),
  selectors: {
    selectUser: (auth) => auth.value,
    selectStatus: (auth) => auth.status,
  },
})

export const { loginAction, logoutAction, authStatusIdleAction } =
  authSlice.actions

export const { selectUser, selectStatus } = authSlice.selectors
