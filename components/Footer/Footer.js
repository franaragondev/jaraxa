//Componente que renderizará el footer de la web
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faInstagram, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
    return (
        <div className='flex justify-center flex-col mt-10'>
            <img alt='logo' src='/logo/logo.png' className='w-40 block m-auto' />
            <div className='m-auto w-40 flex justify-between text-2xl text-white mt-4'>
                <FontAwesomeIcon onClick={props.message} className='cursor-pointer hover:text-primary' icon={faFacebook} />
                <FontAwesomeIcon onClick={props.message} className='cursor-pointer hover:text-primary' icon={faInstagram} />
                <FontAwesomeIcon onClick={props.message} className='cursor-pointer hover:text-primary' icon={faTwitter} />
                <FontAwesomeIcon onClick={props.message} className='cursor-pointer hover:text-primary' icon={faTwitch} />
            </div>
            <div className='text-footer flex flex-wrap justify-around text-xs mt-8 mb-8'>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Audio y subtítulos</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Películas y países</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Centro de ayuda</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Zona de prensa</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Empleo</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Privacidad</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Preferencias de cookies</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Contáctanos</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Audiodescripción</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Tarjetas regalo</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Inversores</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Términos de uso</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Avisos legales</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/5 md:w-2/7 text-center mb-2'>Información corporativa</p>
                <p onClick={props.message} className='cursor-pointer hover:underline w-2/7 hidden md:block text-center mb-2'>Política Privacidad</p>
            </div>
            <p className='text-footer text-xs mb-8 ml-4'>&copy; 2021 Fran Aragón - JARAXA Prueba Frontend</p>
        </div>
    )
}

export default Footer
