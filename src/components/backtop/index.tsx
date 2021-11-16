import { Container } from './styled'
import { ReactComponent as ArrowIcon } from './arrow.svg'
import React from 'react'

export function Backtop() {
  const [visible, setVisible] = React.useState<boolean>(false)

  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 600 && visible) return
    if (window.scrollY <= 600 && !visible) return
    setVisible(window.scrollY > 600)
  }, [visible])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <Container
      visible={visible}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    >
      <ArrowIcon />
    </Container>
  )
}
