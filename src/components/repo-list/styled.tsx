import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 4px;
`

export const ItemContainer = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  &:last-child {
    border-bottom: none;
  }
`

export const ItemsContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow-y: scroll;
  max-height: 500px;
  border-radius: 2px;
  padding-left: 8px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.border};
  }
`

export const Title = styled.a`
  color: ${(props) => props.theme.colors.link};
  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }
`

export const TitleStrong = styled.a`
  color: ${(props) => props.theme.colors.linkHover};
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

export const Description = styled.small``
