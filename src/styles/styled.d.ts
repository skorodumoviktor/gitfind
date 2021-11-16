import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string
      link: string
      linkHover: string
      border: string
      yellow: string
    }
  }
}
