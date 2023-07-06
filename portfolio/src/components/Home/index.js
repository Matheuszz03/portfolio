import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo-m2.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss' 


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 't', 'h', 'e', 'u', 's']
    const jobArray = ['w', 'e', 'b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I'm</span>
                <img src={LogoSubtitle} alt="developer"/>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>Contate-Me</Link>
            </div>
            {/* <Logo /> */}
        </div>
        <Loader type="pacman"/>
        </>
    )
}


export default Home