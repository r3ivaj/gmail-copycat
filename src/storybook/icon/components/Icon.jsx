import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.primary};
  cursor: ${props => props.cursor};
  &:hover {
    color: ${props => props.theme.colors.secondary};
  },
`

export default Icon;