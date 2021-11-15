export type LoginComponentProps = {
  isLoggedIn: boolean
  redirectUri: string
  clientId: string
}
export type LoginControllerProps = {
  children: (props: LoginComponentProps) => React.ReactElement
}

export type HomeComponentProps = {
  isLoggedIn: boolean
  isLoading: boolean
  repoCount: number
}
export type HomeControllerProps = {
  children: (props: HomeComponentProps) => React.ReactElement
}
