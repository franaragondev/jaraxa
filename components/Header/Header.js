//Componente que renderizará el header de la web
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faSearch, faBell } from '@fortawesome/fontawesome-free-solid';
import Profiles from '../Profiles/Profiles';
import Users_Options from '../Users_Options/Users_Options'

const Header = (props) => {
    return (
        <div className='p-3 pb-4 -mt-2 flex justify-between fixed bg-bg-transparent w-full'>
            <div className='flex'>
                <img src='/logo/logo.png' alt='logo' className='w-14 cursor-pointer' />
                <div className='ml-4 flex cursor-pointer'>
                    <div className='group flex'>
                        <p className='text-white text-xs mt-1'>Menú</p>
                        <FontAwesomeIcon className='text-white ml-2 mt-1' icon={faCaretDown} />
                        <div className='invisible absolute left-0 top-8 group-hover:visible'>
                            {/* <FontAwesomeIcon className='text-gray-400 text-lg absolute left-32' icon={faCaretUp} /> */}
                            <div className='bg-bg-transparent text-white w-64 mt-4 p-1 text-center'>
                                <hr />
                                <p className='p-2 pt-3 hover:bg-logo'>Inicio</p>
                                <p className='p-2 pt-3 hover:bg-logo'>Películas</p>
                                <p className='p-2 pt-3 pb-3 hover:bg-logo'>Novedades más vistas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <FontAwesomeIcon className='text-white ml-2 text-xs mt-2 mr-6 cursor-pointer' icon={faSearch} />
                <FontAwesomeIcon className='text-white ml-2 text-xs mt-2 mr-16 cursor-pointer' icon={faBell} />
                <div className='group'>
                    <img src='/image_user/image-user.png' alt='image user' className='absolute cursor-pointer w-9 right-4 top-2 rounded-md' />
                    <div className='invisible absolute right-0 top-8 group-hover:visible'>
                        {/* <FontAwesomeIcon className='text-gray-400 text-lg absolute right-0' icon={faCaretUp} /> */}
                        <div className='bg-bg-transparent text-white w-52 mt-4 p-1'>
                            <hr />
                            <Profiles name='Fran Aragón' image='/image-user-1.png' />
                            <Profiles name='Marina Barriga' image='/image-user-2.png' />
                            <Profiles name='Alba Barriga' image='/image-user-3.png' />
                            <Profiles name='Antonio Garrido' image='/image-user-4.png' />
                            <p className='m-2 mt-4 text-sm cursor-pointer hover:underline'>Administrar Perfiles</p>
                            <hr />
                            <Users_Options option={'Cuenta'} />
                            <Users_Options option={'Centro de ayuda'} />
                            <Users_Options option={'Cerrar sesión en Jaraxa'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
