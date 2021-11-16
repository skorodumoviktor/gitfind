import styled from 'styled-components'
import { device } from '../../utils'
import { Container } from '../layout'

export const HomeContainer = styled(Container)`
  margin: 72px auto;
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    margin: 44px auto;
  }
`
