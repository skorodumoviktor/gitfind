import styled from 'styled-components'
import { Container } from '../layout'

export const HeaderContainer = styled(Container)`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding-top: 24px;
  padding-bottom: 24px;
`
