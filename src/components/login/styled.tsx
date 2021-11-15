import styled from 'styled-components'
import { Container } from '../layout'

export const LoginLink = styled.a`
  background-color: ${(props) => props.theme.colors.link};
  color: white;
  padding: 12px 32px;
  border-radius: 2px;
  &:hover {
    background-color: ${(props) => props.theme.colors.linkHover};
  }
`

export const LoginContainer = styled(Container)`
  padding-top: 72px;
  padding-bottom: 72px;
  display: flex;
  justify-content: center;
`
