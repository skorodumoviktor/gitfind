import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 2px;
  height: 38px;
  color: ${(props) => props.theme.colors.body};
  outline: none;
  padding: 0 12px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.link};
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const LoaderContainer = styled.div`
  position: absolute;
  right: 9px;
  top: 9px;
`
