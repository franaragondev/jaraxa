//Componente que renderizará el los perfiles de usuarios de la web
const Profiles = (props) => {
    return (
        <div className='flex m-2 mt-3 cursor-pointer'>
            <img className='rounded-md' src={props.image} />
            <p className='ml-2 mt-1 hover:underline text-sm'>{props.name}</p>
        </div>
    )
}

export default Profiles
