import styled from 'styled-components'
import { device } from '../../utils'
import { Col, Row } from '../layout'

export const Container = styled.div`
  border-radius: 4px;
`

export const ItemContainer = styled(Row)`
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
  &:last-child {
    border-bottom: none;
  }
  @media ${device.mobile} {
    padding: 8px;
    flex-direction: column;
  }
`

export const ItemsContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 2px;
  padding: 0 8px;
  @media ${device.mobile} {
    padding: 0;
  }
`

export const Title = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.link};
  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }
`

export const CounterContainer = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: flex-end;
`

export const LangCircle = styled.div<{ color: string }>`
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`

export const CountContainer = styled(Col)`
  margin-left: 8px;
  @media ${device.mobile} {
    flex-direction: row;
    margin: 0;
  }
`
