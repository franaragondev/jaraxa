//Componente que renderizará el header de la web
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch, faBell } from '@fortawesome/fontawesome-free-solid';

const Header = (props) => {
    return (
        <div className='m-3 flex justify-between'>
            <div className='flex'>
                <img src='/logo.png' alt='logo' className='w-14 cursor-pointer' />
                <div className='ml-4 flex cursor-pointer'>
                    <p className='text-white text-xs mt-1'>Menú</p>
                    <FontAwesomeIcon className='text-white ml-2 mt-1' icon={faCaretDown} />
                </div>
            </div>
            <div className='flex'>
                <FontAwesomeIcon className='text-white ml-2 text-xs mt-2 mr-6 cursor-pointer' icon={faSearch} />
                <FontAwesomeIcon className='text-white ml-2 text-xs mt-2 mr-16 cursor-pointer' icon={faBell} />
                <div className='group'>
                    <img src='/image-user.png' alt='image user' className='absolute cursor-pointer w-9 right-4 top-4 rounded-md' />
                    <div className='invisible absolute right-4 top-16 bg-white group-hover:visible '>HOLA AMIGOS DE YOUTUVE</div>
                </div>
            </div>
        </div>
    )
}

export default Header
