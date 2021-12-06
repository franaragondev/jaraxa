//Componente que renderizará las películas de Navidad
export default function Christmas({ data_Christmas, data_Christmas2, data_Christmas3 }) {
    return (
        <>
            <h2 className='text-white mt-4 left-0 ml-4'>Las Mejores Películas de <i>Navidad </i>-<a className='text-white mt-0 cursor-pointer hover:text-primary w-20'><i> Ver todo</i></a></h2> 
            <div className='text-white flex flex-wrap justify-around w-full'>
                {
                    data_Christmas.Search.map(
                        movie =>
                            <div className='card-zoom cursor-pointer'>
                                <div className='card-zoom-image' style={{
                                    backgroundImage: `url("${movie.Poster}")`
                                }}>
                                </div>
                            </div>
                    )
                }
            </div>
        </>
    )
}

