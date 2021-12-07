//Componente que renderizará el los perfiles de usuarios de la web
const Profiles = (props) => {
    return (
        <div className='flex m-2 mt-3 cursor-pointer'>
            <img onClick={props.message} className='rounded-md' src={'/image_user'+props.image} alt='image profile'/>
            <p onClick={props.message} className='ml-2 mt-1 hover:underline text-sm'>{props.name}</p>
        </div>
    )
}

export default Profiles
