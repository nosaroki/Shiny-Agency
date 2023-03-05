import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey">Questionnaire</Link>
      <Link to="/freelances">Profils</Link>
    </nav>
  )
}

export default Header
