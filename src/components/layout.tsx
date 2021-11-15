import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
`

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
`

export const Row = styled.div<{
  xBetween?: boolean
  yCenter?: boolean
  xEnd?: boolean
}>`
  display: flex;
  ${(props) => (props.xBetween ? 'justify-content: space-between;' : '')}
  ${(props) => (props.xEnd ? 'justify-content: flex-end;' : '')}
  ${(props) => (props.yCenter ? 'align-items: center;' : '')}
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`
