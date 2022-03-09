import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import '../header/header.css'

function Header() {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt='Logo Kasa' className='kasa-logo'></img>
            </Link>
            <div className="header-links">
                <Link to="/">Accueil</Link>
                <Link to="/">A propos</Link>
            </div>
        </nav>
    )
}

export default Header