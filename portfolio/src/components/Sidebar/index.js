import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
import LogoM from '../../assets/images/logo-m2.png'
import LogoSubtitle from '../../assets/images/logo_subM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'


const styIcons = {
    color: "#4d4d4e", fontSize: "20px"
}

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt='Logo' />
            <img className="sub-logo" src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://www.linkedin.com/in/matheus-g-silva/">
                    <FaLinkedin style={styIcons}/>
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://www.github.com/matheuszz03">
                    <FaGithub style={styIcons}/>
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://www.intagram.com/matheuszz.03">
                    <FaInstagram style={styIcons}/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar