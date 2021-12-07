//Componente que renderizará las películas de Star Wars
export default function StarWars({ data_StarWars }) {
    return (
        <>
            <h2 className='text-white mt-4 left-0 ml-4'>Las Películas de <i>Star Wars</i></h2>
            <div className='text-white flex flex-wrap justify-around w-full'>
                {
                    data_StarWars.Search.map(
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

