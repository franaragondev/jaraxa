//Componente que renderizará las opciones de los usuarios de la web
const Users_Options = (props) => {
    return (
        <p onClick={props.message} className='m-2 text-sm cursor-pointer hover:underline'>{props.option}</p>
    )
}

export default Users_Options
