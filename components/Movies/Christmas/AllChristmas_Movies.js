//Componente que renderizará todas las películas de Navidad
export default function AllChristmas({ data_Christmas, data_Christmas2, data_Christmas3 }) {
    return (
        <>
            <h2 className='text-white mt-20 left-0 ml-4'>Todas las películas de <i>Navidad </i></h2> 
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
                {
                    data_Christmas2.Search.map(
                        movie =>
                            <div className='card-zoom cursor-pointer'>
                                <div className='card-zoom-image' style={{
                                    backgroundImage: `url("${movie.Poster}")`
                                }}>
                                </div>
                            </div>
                    )
                }
                {
                    data_Christmas2.Search.map(
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

