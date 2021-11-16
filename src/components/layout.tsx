import styled from 'styled-components'
import { device } from '../utils'

export const Page = styled.div`
  width: 100%;
`

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  @media ${device.mobile} {
    padding: 0 16px;
  }
`

export const Row = styled.div<{
  xBetween?: boolean
  yCenter?: boolean
  xEnd?: boolean
  wrap?: boolean
}>`
  display: flex;
  ${(props) => (props.xBetween ? 'justify-content: space-between;' : '')}
  ${(props) => (props.xEnd ? 'justify-content: flex-end;' : '')}
  ${(props) => (props.yCenter ? 'align-items: center;' : '')}
  ${(props) => (props.wrap ? 'flex-wrap: wrap;' : 'flex-wrap: nowrap;')}
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`
