import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
      }, [])



      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [message, setMessage] = useState('')
      const [subject, setSubject] = useState('')

      function sendEmail(e) {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            subject: subject
        }
        emailjs.send("service_q5aka4t", "template_ozxsv28", templateParams, "IeMk9cmiMFazDn2Lk")
        .then((response) => {
            console.log("Email enviado", response.text)
            setName('')
            setEmail('')
            setMessage('')
            setSubject('')
        }, (err) => {
            console.log("ERRO: ", err)
        })
      }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 't', 'e', '-', 'm', 'e']} 
                            idx={15}
                            />
                    </h1>
                    <p>
                    Estou interessado em oportunidades - especialmente em projetos ambiciosos ou grandes projetos. No entanto, se você tiver quaisquer outras solicitações ou perguntas, não hesite em contactar-me usando o formulário abaixo também.
                    </p>
                    <div className='contact-form'>
                        <form onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                    type="text" 
                                    name='name' 
                                    placeholder='Nome...' 
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required />
                                </li>
                                <li className='half'>
                                    <input 
                                    type="email" 
                                    name='email' 
                                    placeholder='Email...' 
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required />
                                </li>
                                <li>
                                    <input 
                                    type="text" 
                                    name='assunto' 
                                    placeholder='Assunto' 
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    required />
                                </li>
                                <li>
                                    <textarea 
                                    placeholder='Mensagem' 
                                    name='message' 
                                    required
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    />
                                </li>
                                <input type='submit' className='flat-button' value="Enviar"/>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}


export default Contact