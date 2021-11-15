export type LoginProps = {
  isLoggedIn: boolean
  redirectUri: string
  clientId: string
}
export type LoginControllerProps = {
  children: (props: LoginProps) => React.ReactElement
}

export type HomeProps = {
  isLoggedIn: boolean
}
export type HomeControllerProps = {
  children: (props: HomeProps) => React.ReactElement
}

export type Repo = {
  id: string
  url: string
  description: string | null
  name: string
  nameWithOwner: string
  forkCount: number
  stargazerCount: number
  createdAt: string
  primaryLanguage: {
    color: string
    name: string
  } | null
  owner: {
    login: string
    url: string
  }
}
