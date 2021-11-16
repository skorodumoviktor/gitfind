export type LoginProps = {
  redirectUri: string
  clientId: string
}
export type LoginControllerProps = {
  children: (props: LoginProps) => React.ReactElement
}

export type HomeControllerProps = {
  children: () => React.ReactElement
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
