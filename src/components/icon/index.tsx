import styled from 'styled-components'
import { ReactComponent as StarIcon } from './star.svg'
import { ReactComponent as ForkIcon } from './fork.svg'

type IconProps = {
  name: 'star' | 'fork'
  color?: string
}

const IconContainer = styled.div<{ color?: string }>`
  color: ${(props) => props.color || props.theme.colors.body};
`

export function Icon({ name, color }: IconProps) {
  const renderIcon = () => {
    switch (name) {
      case 'star':
        return <StarIcon />
      case 'fork':
        return <ForkIcon />
    }
  }

  return <IconContainer color={color}>{renderIcon()}</IconContainer>
}
