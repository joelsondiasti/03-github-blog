import logo from '../../assets/ghblog-logo.svg'
import { HeaderBackground } from './styles'
export function Header() {
  return (
    <HeaderBackground>
      <img src={logo} alt="" />
    </HeaderBackground>
  )
}
