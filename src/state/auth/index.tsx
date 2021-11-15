import React from 'react'
import {
  AuthContextValue,
  AuthReducer,
  AuthReducerActionType,
  AuthReducerState,
} from './types'

const initialState: AuthReducerState = {
  isLoggedIn: false,
  clientId: process.env.REACT_APP_CLIENT_ID || '',
  redirectUri: process.env.REACT_APP_REDIRECT_URI || '',
}

const defaultContextValue: AuthContextValue = {
  state: initialState,
  setIsLoggedIn: () => {},
}

const reducer: AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthReducerActionType.setIsLoggedIn:
      return { ...state, isLoggedIn: action.payload }

    default:
      return state
  }
}

export const AuthContext =
  React.createContext<AuthContextValue>(defaultContextValue)

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const setIsLoggedIn = React.useCallback((isLoggedIn: boolean) => {
    dispatch({ type: AuthReducerActionType.setIsLoggedIn, payload: isLoggedIn })
  }, [])

  return (
    <AuthContext.Provider value={{ state, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
