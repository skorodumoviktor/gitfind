import { useLocation } from 'react-router-dom'

export function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const screenSizes = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
}

export const device = {
  mobile: `(max-width: ${screenSizes.mobile})`,
  tablet: `(max-width: ${screenSizes.tablet})`,
  desktop: `(max-width: ${screenSizes.desktop})`,
}
