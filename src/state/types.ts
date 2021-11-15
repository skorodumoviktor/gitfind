export type AuthReducerState = {
  isLoggedIn: boolean
  redirectUri: string
  clientId: string
}

export type AuthReducer = React.Reducer<AuthReducerState, AuthReducerAction>

export enum AuthReducerActionType {
  setIsLoggedIn,
}

export type AuthReducerAction = {
  type: AuthReducerActionType.setIsLoggedIn
  payload: boolean
}

export type AuthContextValue = {
  state: AuthReducerState
  setIsLoggedIn: (isLoggedIn: boolean) => void
}
