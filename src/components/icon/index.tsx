import styled from 'styled-components'
import { ReactComponent as StarIcon } from './star.svg'
import { ReactComponent as ForkIcon } from './fork.svg'

type IconProps = {
  name: 'star' | 'fork'
  color?: string
  size?: string
}

const IconContainer = styled.div<{ color?: string; size?: string }>`
  color: ${(props) => props.color || props.theme.colors.body};
  line-height: 1;
  svg {
    width: ${(props) => props.size || '1em'};
    height: ${(props) => props.size || '1em'};
  }
`

export function Icon({ name, color, size }: IconProps) {
  const renderIcon = () => {
    switch (name) {
      case 'star':
        return <StarIcon />
      case 'fork':
        return <ForkIcon />
    }
  }

  return (
    <IconContainer color={color} size={size}>
      {renderIcon()}
    </IconContainer>
  )
}
