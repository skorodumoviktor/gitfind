import styled from 'styled-components'

export const Container = styled.div<{ visible: boolean }>`
  opacity: ${(props) => (props.visible ? '1' : '0')};
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);

  svg {
    width: 20px;
    height: 20px;
  }
`
