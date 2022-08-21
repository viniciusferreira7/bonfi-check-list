import { HeaderContainer } from './styles'

import bonfiglioliLogo from '../../assets/bonfiglioliLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={bonfiglioliLogo} alt="Logo marca da Bonfiglioli" />
    </HeaderContainer>
  )
}
